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