import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from 'react';

interface Category {
  image: string;
}

interface CategoriesCarouselProps {
  gallery: Category[];
}

export default function SwiperComponent({ gallery }: CategoriesCarouselProps) {
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => new Set(prev).add(index));
  };

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1600}
        breakpoints={{
          640: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
        }}
      >
        {gallery.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={src.image}
                alt={`France Buses Shuttle Service Image ${idx + 1}`}
                className={`object-cover w-full h-[250px] lg:h-[450px] rounded-2xl transition-opacity duration-300 ${
                  loadedImages.has(idx) ? 'opacity-100' : 'opacity-0'
                }`}
                onLoad={() => handleImageLoad(idx)}
                loading={idx === 0 ? "eager" : "lazy"}
              />
              {!loadedImages.has(idx) && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-2xl" />
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}