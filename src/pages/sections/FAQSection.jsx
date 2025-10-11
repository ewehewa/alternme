import React, { useState } from "react";

const faqs = [
  {
    question: "Do I need multiple subscriptions to use all features?",
    answer:
      "No. With just one active subscription, you can access every wallet type, feature, and mailing tool on Alternme without any restrictions. One plan unlocks it all.",
  },
  {
    question: "Is Alternme safe and private to use?",
    answer:
      "Absolutely. Alternme only requires your email address no real name, identity verification, or sensitive details. Your activity is fully secure and private with military-grade encryption.",
  },
  {
    question: "How much does it cost to create a child panel?",
    answer:
      "It's completely free. Just buy a domain and update your DNS to point to Alternme. Your panel will be live and fully functional at no extra cost.",
  },
  {
    question: "Is there a limit to how many emails I can send?",
    answer:
      "No limits at all. You can send/flash 10,000+ emails daily if you like. Alternme does not restrict your mailing volume, even with a basic one-month subscription.",
  },
  {
    question: "What if I don't see the wallet or coin I need?",
    answer:
      "No worries. You can request any wallet or coin you don't see on Alternme. Our team will do its best to add it quickly and keep the platform up-to-date.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fas fa-question-circle mr-2"></i>
            Help Center
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            Everything you need to know about Alternme
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass bg-white/70 dark:bg-slate-900/70 rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-4 py-4 sm:px-6 sm:py-6 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors rounded-lg sm:rounded-xl"
              >
                <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                  {faq.question}
                </span>
                <i
                  className={`fas fa-chevron-down faq-icon text-primary-500 transition-transform duration-300 text-sm ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                ></i>
              </button>

              <div
                className={`faq-content overflow-hidden transition-all duration-300 ease-out ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-4 pb-4 sm:px-6 sm:pb-6">
                  <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
