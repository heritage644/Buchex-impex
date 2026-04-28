"use client"; // Required for framer-motion in Next.js App Router

import { motion } from "framer-motion";
import Image from "next/image";
import { ChefHat, MoveUpRight, Layers, Wrench } from "lucide-react";
import { SectionHeading } from "./sectionHEading";// Fixed casing in import

const services = [
  { 
    icon: ChefHat, 
    title: "Kitchen Countertops", 
    desc: "Beautiful, polished granite surfaces built for durability and style.", 
    img: "/countertop.jpg" // Directly from public folder
  },
  { 
    icon: MoveUpRight, 
    title: "Staircase Finishing", 
    desc: "Modern marble and granite stair designs that elevate your home.", 
    img: "/staircase-2.jpg" 
  },
  { 
    icon: Layers, 
    title: "Marble Installations", 
    desc: "Clean, precise marble works for floors, walls, and interiors.", 
    img: "/wall-cladding.jpg" 
  },
  { 
    icon: Wrench, 
    title: "Custom Projects", 
    desc: "We bring your ideas to life with tailored stone solutions.", 
    img: "/kitchen-2.jpg" 
  },
];

export function ServicesGrid() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="container-x">
        <div className="text-center">
          <SectionHeading eyebrow="Our Services" title="What We Offer" center />
        </div>
        
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div 
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative h-44 overflow-hidden">
                <Image 
                  src={s.img} 
                  alt={s.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>

              {/* Content */}
              <div className="p-6 pt-8">
                <div className="mb-3 text-primary">
                   <s.icon size={24} />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}