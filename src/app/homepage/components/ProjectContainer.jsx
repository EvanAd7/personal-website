import Project from "./ProjectCard";
import { projects } from "/data/projects";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectContainer() {
    return (
        <div className="my-8">
            <div>
                <Swiper
                    modules={[Pagination, Navigation, EffectCoverflow]}
                    initialSlide={1}
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1.5,
                        },
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    cssMode={true}
                    effect={'coverflow'}
                    coverflowEffect={{ slideShadows: false, rotate: 30, depth: 100 }}
                    pagination={{ clickable: true, dynamicBullets: true }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="pt-4 mb-10 max-w-xl">
                            <Project {...project} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}