"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/swiper-bundle.css';

import TitleSection from "@/components/title-section";
import HeadingButton from '@/components/heading-button';
import Image from 'next/image';

import { LimitedEditionImage1, LimitedEditionImage2 } from "@/images";

export default function LimitedEditionSection() {

    const slides = [
        { id: 1, title: "TRANSFORMERS", subtitle: "Gameboy Color x OPTIMUS PRIME", image: LimitedEditionImage1, link: '/page1' },
        { id: 2, title: "RETOUR VERS LE FUTUR", subtitle: "Gameboy Color x Delorean", image: LimitedEditionImage2, link: '/page2' },
        { id: 3, title: "TRANSFORMERS", subtitle: "Gameboy Color x OPTIMUS PRIME", image: LimitedEditionImage1, link: '/page1' },
        { id: 4, title: "RETOUR VERS LE FUTUR", subtitle: "Gameboy Color x Delorean", image: LimitedEditionImage2, link: '/page2' },
        { id: 5, title: "TRANSFORMERS", subtitle: "Gameboy Color x OPTIMUS PRIME", image: LimitedEditionImage1, link: '/page1' },
    ];

    return (
        <section className="bg-[--black2] pb-10">

            <TitleSection title="Éditions Limitées" subtitle="Créés pour être unique" titleColor="#FFFFFF" bgColor="linear-gradient(191deg, #121212 40%, #293DF21F 100%)" />

            <div className="">
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1.4}
                    centeredSlides={true}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >   
                
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <div className="flex items-center justify-center relative h-[90vh] rounded-xl overflow-hidden">
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
                                        title={slide.title}
                                        titleSize={80}
                                        titleColor="#FFFFFF"
                                        subtitle={slide.subtitle}
                                        button="Découvrir"
                                        link={slide.link}
                                    />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}