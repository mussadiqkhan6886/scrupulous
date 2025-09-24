"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaCheck } from "react-icons/fa";

export default function PricingSlider() {
  return (
    <section className="text-text">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
      >
        {/* Basic */}
        <SwiperSlide>
          <section className="p-3 px-5">
            <div className="mb-3">
                <h2 aria-label="essential plan" className="text-4xl font-bold">Essential</h2>
                <p className="text-contact text-base">Basic Plan</p>
            </div>
            <div className="mb-7">
                <div className="flex items-end">
                    <span className="text-end text-lg text-contact">PKR</span>
                    <h3 aria-label="essential price 5999" className="text-4xl font-bold mx-1">5999</h3>
                </div>
                <p className="mt-2 text-[17px]">For startups taking their first step online.</p>
            </div>
            <div>
                <p className="font-semibold text-2xl mb-2">It Includes</p>
                <div className="flex flex-col gap-3 text-xl">
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>1 Page (Landing Page)</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Responsive design</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Basic SEO</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>2-3 days delivery</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>1 Free Revision</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Contact Form</span></p>
                </div>
            </div>
          </section>
        </SwiperSlide>

      
        <SwiperSlide>
          <section className="p-3 px-5">
            <div className="mb-3">
                <h2 aria-label="professional planning price" className="text-4xl font-bold">Professional</h2>
                <p className="text-contact text-base">Business Plan</p>
            </div>
            <div className="mb-5">
                <div className="flex items-end">
                    <span className="text-end text-lg text-contact">PKR</span>
                    <h3 aria-label="professional price 29999" className="text-4xl font-bold mx-1">29999</h3>
                </div>
                <p className="mt-2 text-[17px]">For growing companies needing a stronger digital presence.</p>
            </div>
            <div>
                <p className="font-semibold text-2xl mb-2">It Includes</p>
                <div className="flex flex-col gap-3 text-xl">
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>5 Page</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Responsive design</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Basic SEO</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Modern UI/UX</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>6-7 days delivery</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>5 Free Revision</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Functional</span></p>
                </div>
            </div>
          </section>
        </SwiperSlide>

       
     <SwiperSlide>
          <section className="p-0 px-5">
            <div className="mb-2">
                <h2 aria-label="premium pricing plan" className="text-4xl font-bold">Premium</h2>
                <p className="text-contact text-base">Enterprise Plan</p>
            </div>
            <div className="mb-3">
                <div className="flex items-end">
                    <span className="text-end text-lg text-contact">PKR</span>
                    <h3 aria-label="premium planning price 79999" className="text-4xl font-bold mx-1">79999</h3>
                </div>
                <p className="mt-2 text-[17px]">For established businesses seeking a fully custom solution.</p>
            </div>
            <div>
                <p className="font-semibold text-2xl mb-1">It Includes</p>
                <div className="flex flex-col gap-2 text-xl">
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Up to 10 Pages</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Responsive design</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>SEO Optimized</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Speed optimized</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>10 days delivery</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Unlimited Free Revisions</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Fully Functional Website</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Hosting setup</span></p>
                    <p className="flex items-center gap-5"><FaCheck className="text-text text-[17px]" /> <span>Animation smooth scroll</span></p>
                </div>
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
