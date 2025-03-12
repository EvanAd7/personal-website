import { motion } from "motion/react";
import { projects } from '/data/projects';
import ProjectCard from './ProjectCard';
import { item } from "/data/animations";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ProjectContainer() {
    return (
        <motion.div 
            variants={item}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            id="projects"
            className="w-full"
        >
            <Swiper
                modules={[Pagination, EffectCoverflow]}
                initialSlide={3}
                slidesPerView={4}
                spaceBetween={30}
                grabCursor={true}
                centeredSlides={true}
                cssMode={true}
                effect={'coverflow'}
                coverflowEffect={{ slideShadows: false, rotate: 30, depth: 100 }}
                pagination={{ bulletClass: 'bg-white', clickable: true, dynamicBullets: true }}
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className="pt-4 mb-10 max-w-xl">
                        <ProjectCard {...project} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </motion.div>
    );
}