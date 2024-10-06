"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import { HeroSliderImage1, HeroSliderImage2 } from '@/images';
import HeadingButton from '@/components/heading-button';


export default function HeroSliderSection() {
 
    const slides = [
        { id: 1, title: { content: "NDS LITE", color: "#000000" }, subtitle: "DE NOUVEAUX HORIZONS", image: HeroSliderImage1, link: '/page1' },
        { id: 2, title: { content: "PS VITA OLED", color: "#FFFFFF"}, subtitle: "DE NOUVELLES POSSIBILITÉS", image: HeroSliderImage2, link: '/page2' },
    ];
    
    return (
        <section>
            <Swiper
                modules={[Pagination,  Navigation, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                loop={true}
                pagination={{ clickable: true }}
                // autoplay={{
                //     delay: 3000,
                //     disableOnInteraction: false,
                // }}
            >   
            
                {slides.map(slide => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative w-screen h-[80vh] md:h-[93.2vh]">
                            <Image
                                className="absolute inset-0 z-[-1]"
                                src={slide.image}
                                alt={`Slide ${slide.id}`}
                                width={500}
                                height={300}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center bottom' }}
                            />
                            <div className="flex flex-col items-center justify-center h-1/2">
                                <HeadingButton
                                    title={slide.title.content}
                                    titleSize={{ sm: 70, md: 100}}
                                    titleColor={slide.title.color}
                                    subtitle={slide.subtitle}
                                    button="Découvrir"
                                    link={slide.link}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev swiper-button-white after:text-[--white] after:!text-[16px]"></div>
                <div className="swiper-button-next swiper-button-white after:text-[--white] after:!text-[16px]"></div>
            </Swiper>
        </section>
    );
}