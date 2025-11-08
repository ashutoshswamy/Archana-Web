-- ============================================
-- Supabase Database Schema for Archana Web
-- Contact Form Submissions
-- ============================================

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  query TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add comments to document the table and columns
COMMENT ON TABLE contacts IS 'Stores contact form submissions from the website';
COMMENT ON COLUMN contacts.id IS 'Unique identifier for each contact submission';
COMMENT ON COLUMN contacts.name IS 'Full name of the person submitting the form';
COMMENT ON COLUMN contacts.email IS 'Email address for contact response';
COMMENT ON COLUMN contacts.phone IS 'Phone number (10-digit format expected)';
COMMENT ON COLUMN contacts.query IS 'The message/query from the user';
COMMENT ON COLUMN contacts.created_at IS 'Timestamp when the submission was created';

-- Create an index on created_at for faster sorting and filtering
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);

-- Create an index on email for faster lookups (useful for checking duplicates)
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);

-- ============================================
-- Row Level Security (RLS) Policies
-- ============================================

-- Enable Row Level Security on the contacts table
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert new contacts (for the public contact form)
CREATE POLICY "Enable insert for all users" 
ON contacts
FOR INSERT
TO public
WITH CHECK (true);

-- Policy: Allow authenticated users to view all contacts (for admin access)
-- Uncomment this if you plan to build an admin dashboard
-- CREATE POLICY "Enable read for authenticated users only" 
-- ON contacts
-- FOR SELECT
-- TO authenticated
-- USING (true);

-- ============================================
-- Optional: Create a view for recent contacts
-- ============================================

-- View to easily see recent submissions (last 30 days)
CREATE OR REPLACE VIEW recent_contacts AS
SELECT 
  id,
  name,
  email,
  phone,
  LEFT(query, 100) || CASE WHEN LENGTH(query) > 100 THEN '...' ELSE '' END AS query_preview,
  created_at
FROM contacts
WHERE created_at >= NOW() - INTERVAL '30 days'
ORDER BY created_at DESC;

-- ============================================
-- Optional: Function to get contact statistics
-- ============================================

-- Function to get basic statistics about submissions
CREATE OR REPLACE FUNCTION get_contact_stats()
RETURNS TABLE (
  total_submissions BIGINT,
  submissions_today BIGINT,
  submissions_this_week BIGINT,
  submissions_this_month BIGINT
) 
LANGUAGE sql
STABLE
AS $$
  SELECT 
    COUNT(*) as total_submissions,
    COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as submissions_today,
    COUNT(*) FILTER (WHERE created_at >= DATE_TRUNC('week', CURRENT_DATE)) as submissions_this_week,
    COUNT(*) FILTER (WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE)) as submissions_this_month
  FROM contacts;
$$;

-- ============================================
-- Optional: Trigger for email validation
-- ============================================

-- Function to validate email format
CREATE OR REPLACE FUNCTION validate_email()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.email !~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$' THEN
    RAISE EXCEPTION 'Invalid email format: %', NEW.email;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to validate email before insert
CREATE TRIGGER check_email_format
  BEFORE INSERT OR UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION validate_email();

-- ============================================
-- Optional: Trigger for phone validation
-- ============================================

-- Function to validate phone number (10 digits)
CREATE OR REPLACE FUNCTION validate_phone()
RETURNS TRIGGER AS $$
BEGIN
  -- Remove any non-digit characters
  NEW.phone := REGEXP_REPLACE(NEW.phone, '[^0-9]', '', 'g');
  
  -- Check if phone number is exactly 10 digits
  IF LENGTH(NEW.phone) != 10 THEN
    RAISE EXCEPTION 'Phone number must be exactly 10 digits: %', NEW.phone;
  END IF;
  
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger to validate and clean phone number before insert
CREATE TRIGGER check_phone_format
  BEFORE INSERT OR UPDATE ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION validate_phone();

-- ============================================
-- Grant permissions (if needed)
-- ============================================

-- Grant insert permission to anonymous users (public)
GRANT INSERT ON contacts TO anon;

-- Grant all permissions to authenticated users (for admin features)
-- Uncomment if you want authenticated users to have full access
-- GRANT ALL ON contacts TO authenticated;

-- ============================================
-- Sample Query Examples (for reference)
-- ============================================

-- Get all contacts ordered by most recent
-- SELECT * FROM contacts ORDER BY created_at DESC;

-- Get contacts from the last 7 days
-- SELECT * FROM contacts WHERE created_at >= NOW() - INTERVAL '7 days';

-- Search contacts by email
-- SELECT * FROM contacts WHERE email ILIKE '%example.com%';

-- Get contact statistics
-- SELECT * FROM get_contact_stats();

-- View recent contacts (using the view)
-- SELECT * FROM recent_contacts;

-- ============================================
-- Cleanup (if you need to start over)
-- ============================================

-- Uncomment these lines to drop everything and start fresh
-- DROP TRIGGER IF EXISTS check_email_format ON contacts;
-- DROP TRIGGER IF EXISTS check_phone_format ON contacts;
-- DROP FUNCTION IF EXISTS validate_email();
-- DROP FUNCTION IF EXISTS validate_phone();
-- DROP FUNCTION IF EXISTS get_contact_stats();
-- DROP VIEW IF EXISTS recent_contacts;
-- DROP TABLE IF EXISTS contacts CASCADE;
