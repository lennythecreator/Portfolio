'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Copy, Check } from 'lucide-react';
import { useState } from 'react';

export default function EmailModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);
  const email = 'lenyeuwaeme@gmail.com';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50"
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="bg-card border-2 border-border rounded-2xl shadow-2xl p-6 mx-4">
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-secondary transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Content */}
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-4 rounded-full bg-primary/10">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <h2 className="text-2xl font-bold mb-2">Let&apos;s Connect!</h2>
                <p className="text-muted-foreground mb-6">
                  Reach out to me via email to book a free consultation
                </p>

                {/* Email display */}
                <div className="bg-secondary/50 rounded-lg p-4 mb-4 flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="text-primary font-medium hover:underline break-all"
                  >
                    {email}
                  </a>
                  <button
                    onClick={copyToClipboard}
                    className="flex-shrink-0 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                    aria-label="Copy email"
                  >
                    {copied ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5" />
                    )}
                  </button>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${email}`}
                    className="flex-1 px-4 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium"
                  >
                    Send Email
                  </a>
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-3 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all duration-300 font-medium"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

