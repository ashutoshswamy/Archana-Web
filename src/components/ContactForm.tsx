"use client";

import { useState, FormEvent } from "react";
import { Mail, User, Phone, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  name: string;
  email: string;
  phone: string;
  query: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

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
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

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
    <motion.div
      className="max-w-2xl mx-auto text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
    >
      <motion.div
        className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-2xl"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.h3
          className="text-2xl sm:text-3xl font-bold mb-2 text-center"
          variants={fadeInUp}
        >
          Send us a Message
        </motion.h3>
        <motion.p
          className="text-white/90 mb-6 text-center text-sm sm:text-base"
          variants={fadeInUp}
        >
          Fill out the form below and we'll respond within 24 hours
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 sm:space-y-5"
          variants={staggerContainer}
        >
          {/* Name Input */}
          <motion.div variants={fadeInUp}>
            <label
              htmlFor="name"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Full Name
            </label>
            <motion.input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              placeholder="Enter your full name"
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Email Input */}
          <motion.div variants={fadeInUp}>
            <label
              htmlFor="email"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <motion.input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              placeholder="your.email@example.com"
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Phone Input */}
          <motion.div variants={fadeInUp}>
            <label
              htmlFor="phone"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <motion.input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              placeholder="10-digit mobile number"
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Query Input */}
          <motion.div variants={fadeInUp}>
            <label
              htmlFor="query"
              className="block text-sm font-medium mb-2 flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Your Query
            </label>
            <motion.textarea
              id="query"
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all resize-none"
              placeholder="Tell us about your financial planning needs..."
              whileFocus={{ scale: 1.01 }}
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-white text-[var(--brand)] font-bold py-3 sm:py-4 px-6 rounded-lg hover:bg-gray-100 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-base sm:text-lg"
            variants={fadeInUp}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <motion.div
                  className="w-5 h-5 border-2 border-[var(--brand)] border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </motion.button>

          {/* Status Message */}
          <AnimatePresence mode="wait">
            {submitStatus.type && (
              <motion.div
                className={`p-4 rounded-lg flex items-center gap-2 ${
                  submitStatus.type === "success"
                    ? "bg-green-500/20 border border-green-400/30"
                    : "bg-red-500/20 border border-red-400/30"
                }`}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1, type: "spring", stiffness: 400 }}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 text-green-400" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-red-400" />
                  )}
                </motion.div>
                <p className="text-sm">{submitStatus.message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </motion.div>
    </motion.div>
  );
}
