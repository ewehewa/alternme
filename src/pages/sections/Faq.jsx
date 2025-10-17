import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer:
        "Our support team typically responds within 1-2 hours during business hours, and within 4-6 hours during off-peak times. For urgent issues, use our live chat for immediate assistance.",
    },
    {
      question: "What information should I include in my support request?",
      answer:
        "Please include your account email, a detailed description of the issue, steps you've already tried, and any error messages you've encountered. Screenshots are also very helpful.",
    },
    {
      question: "Can I get support in multiple languages?",
      answer:
        "Our primary support language is English, but we have team members who can assist in Spanish, French, and German. Please specify your preferred language when contacting us.",
    },
    {
      question: "Is the live chat available 24/7?",
      answer:
        "Yes! Our live chat support is available 24/7. While response times may vary during peak hours, we always have team members online to assist you with any questions or issues.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-white dark:bg-slate-900">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-slate-900 dark:text-slate-100 mb-4">
            Common Support Questions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Quick answers to frequently asked support questions
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors rounded-xl"
              >
                <span className="font-semibold text-slate-900 dark:text-slate-100 text-base lg:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`text-primary-500 transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  activeIndex === index ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-slate-600 dark:text-slate-400 text-sm lg:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
