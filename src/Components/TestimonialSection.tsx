import { Star } from "lucide-react";
import { useState } from 'react';
import { getCountryData } from '../data/basecode';

// Define TypeScript interfaces
interface Testimonial {
  key: string;
  name: string;
  role: string;
  avatar: string;
  message: string;
  rating: number;
}

interface TestimonialCategory {
  key: string;
  label: string;
}

interface TestimonialsData {
  badge: string;
  title: string;
  categories: TestimonialCategory[];
  items: Testimonial[];
}

// You can get the country code from context, URL params, or user selection
const countryCode = 'fr';

export default function TestimonialSection() {
  const countryData = getCountryData(countryCode);
  const testimonialsData: TestimonialsData = countryData.testimonials;

  const categories: string[] = testimonialsData.categories.map((cat: TestimonialCategory) => cat.key);
  const [active, setActive] = useState<string>(categories[0]);
  const filtered: Testimonial[] = testimonialsData.items.filter((t: Testimonial) => t.key === active);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <h3 className="inline-block bg-blue-100 text-blue-600 px-3 py-2 rounded-full text-sm font-semibold ">
            {testimonialsData.badge}
          </h3>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            {testimonialsData.title}
          </h2>
        </div>
        {/* Tabs */}
        <div className="mb-12 flex justify-center gap-4 flex-wrap">
          {testimonialsData.categories.map((category: TestimonialCategory) => (
            <button
              key={category.key}
              onClick={() => setActive(category.key)}
              className={
                `px-5 py-2 rounded-full transition-colors duration-200 focus:outline-none border 
                ${active === category.key
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white text-gray-600 border-gray-300 hover:bg-blue-50 hover:text-blue-600'}`
              }
            >
              {category.label}
            </button>
          ))}
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((t: Testimonial, idx: number) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-xl shadow-md p-6 text-left h-full"
            >
              <p className="text-gray-700 mb-6 flex-grow">{t.message}</p>
              {/* Stars */}
              <div className="flex mb-4">
                {Array(t.rating)
                  .fill(0)
                  .map((_, i: number) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400"
                      fill="currentColor"
                    />
                  ))}
              </div>
              {/* Avatar & Name */}
              <div className="flex items-center gap-4 mt-auto">
                {/* <img
                  src={`/images/${t.avatar}.png`}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                /> */}
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}