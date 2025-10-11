import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Yusuf",
    role: "Child Panel Owner",
    text: "Alternme is a game-changer. My Child Panel mails deliver very smoothly and there's never been any complaint from my users. The privacy and delivery rates are unmatched.",
    image:
      "https://www.Alternme.com/storage/app/public/favicons/akzbDwHat0Jo5KLeBOcUmKbAV3fcWFt3wq7lOzKs.png",
  },
  {
    id: 2,
    name: "Thabo Mokoena",
    role: "Child Panel Owner",
    text: "I bought a domain, changed my DNS, and my own Alternme panel was live within minutes. I've already made profit selling activation keys.",
    image:
      "https://www.Alternme.com/storage/app/public/favicons/akzbDwHat0Jo5KLeBOcUmKbAV3fcWFt3wq7lOzKs.png",
  },
  {
    id: 3,
    name: "Fernández",
    role: "Alternme User",
    text: "Alternme made it super easy to reach cold wallet holders. The interface is smooth, and their support is quick and professional.",
    image:
      "https://www.Alternme.com/storage/app/public/favicons/akzbDwHat0Jo5KLeBOcUmKbAV3fcWFt3wq7lOzKs.png",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-slate-50 dark:bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <i className="fas fa-heart mr-2"></i>
            Customer Trust
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-slate-100 mb-3 sm:mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400">
            Testimonials from satisfied customers worldwide
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`glass bg-white/70 dark:bg-slate-900/70 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4 sm:mb-6">
                <i className="fas fa-quote-left text-primary-500 text-lg sm:text-2xl mr-3 sm:mr-4"></i>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fas fa-star text-xs sm:text-sm"></i>
                  ))}
                </div>
              </div>

              <p className="text-slate-600 dark:text-slate-400 mb-4 sm:mb-6 italic text-sm sm:text-base">
                “{testimonial.text}”
              </p>

              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full mr-3 sm:mr-4"
                />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm sm:text-base">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    {testimonial.role}
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
