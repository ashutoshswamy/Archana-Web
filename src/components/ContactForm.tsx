"use client";

import { useState, FormEvent } from "react";
import { supabase } from "@/lib/supabase";
import { Mail, User, Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  query: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          query: formData.query,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) throw error;

      setSubmitStatus({
        type: "success",
        message: "Thank you for contacting us! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", query: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl">
        <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
          Send us a Message
        </h3>
        <p className="text-white/90 mb-6 text-center text-sm sm:text-base">
          Fill out the form below and we'll respond within 24 hours
        </p>

        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Phone Input */}
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              placeholder="10-digit mobile number"
            />
          </div>

          {/* Query Input */}
          <div>
            <label
              htmlFor="query"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Your Query
            </label>
            <textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your financial planning needs..."
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-[#2ba4d8] font-bold py-3 sm:py-4 px-6 rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base sm:text-lg"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-[#2ba4d8] border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>

          {/* Status Message */}
          {submitStatus.type && (
            <div
              className={`p-4 rounded-lg flex items-center gap-2 ${
                submitStatus.type === "success"
                  ? "bg-green-500/20 border border-green-400/30"
                  : "bg-red-500/20 border border-red-400/30"
              }`}
            >
              {submitStatus.type === "success" && (
                <CheckCircle className="w-5 h-5" />
              )}
              <p className="text-sm">{submitStatus.message}</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
