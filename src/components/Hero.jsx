import { useState } from 'react';
import womanOne from '../assets/images.jpeg';
import womanTwo from '../assets/woman.png';

const slides = [
   {
      label: 'Trending Totebags',
      title: 'Leather Totebags',
      description: "Totebag's made with leather fabric. This fabric is usually stronger than the others.",
   },
   {
      label: 'Trending Totebags',
      title: 'Corduroy Totebags',
      description: 'Soft, textured corduroy totebags built for everyday carry.',
   },
   {
      label: 'Trending Totebags',
      title: 'Denim Totebags',
      description: 'Classic denim totebags that get better with every wash.',
   },
   {
      label: 'Trending Totebags',
      title: 'Adire Totebags',
      description: 'Hand-dyed adire totebags with bold traditional patterns.',
   },
];

export default function Hero() {
   const [current, setCurrent] = useState(1);
   const slide = slides[current];

   return (
      <section className="w-full bg-[#f4fbfa] font-sans text-slate-900 px-4 sm:px-8 lg:px-16 py-8 lg:py-12">
         <div className="w-full">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold">
               Shop your favourite totebag.
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-slate-500 mt-1">
               Select the totebag that matches your fashion.
            </p>

            <div className="relative mt-5 h-[260px] sm:h-[340px] md:h-[420px] lg:h-[520px] w-full rounded-2xl border border-slate-300 bg-white overflow-hidden">
               {/* Indicator pills, top left. Active pill is wide and light grey. */}
               <div className="absolute top-5 left-5 lg:top-8 lg:left-8 flex items-center gap-1.5 z-10">
                  {slides.map((s, index) => (
                     <button
                        key={s.title}
                        type="button"
                        aria-label={`Show ${s.title}`}
                        aria-current={index === current}
                        onClick={() => setCurrent(index)}
                        className={`h-2 lg:h-2.5 rounded-full transition-all cursor-pointer ${
                           index === current ? 'w-8 lg:w-10 bg-slate-300' : 'w-3.5 lg:w-4 bg-slate-900'
                        }`}
                     />
                  ))}
               </div>

               {/* Text block */}
               <div className="absolute left-6 sm:left-10 lg:left-16 top-1/2 -translate-y-1/2 max-w-[55%] sm:max-w-xs lg:max-w-sm z-10">
                  <p className="text-[10px] lg:text-xs tracking-[0.15em] uppercase text-slate-500">
                     {slide.label}
                  </p>
                  <h3 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl leading-tight font-medium mt-1">
                     {slide.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs lg:text-sm text-slate-900 mt-2 lg:mt-3 leading-snug">
                     {slide.description}
                  </p>
               </div>

               {/* Large woman, left-centre, full height */}
               <img
                  src={womanOne}
                  alt={slide.title}
                  className="absolute bottom-0 left-[35%] h-full w-auto object-contain object-bottom"
               />

               {/* Small woman with hat, far right */}
               <img
                  src={womanTwo}
                  alt=""
                  aria-hidden="true"
                  className="absolute bottom-0 left-[78%] h-[77%] w-auto object-contain object-bottom mr-30"
               />
            </div>
         </div>
      </section>
   );
}