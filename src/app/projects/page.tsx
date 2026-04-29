'use client'
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import { PageHero } from "@/components/pageHero";
import { ContactCTA } from "@/components/contactCTA";

import Image from "next/image";






const projects = [
  { img: "/kitchen-project.png", title: "Marble Kitchen Renovation", category: "Kitchen", location: "GRA, Enugu", date: "Mar 2026", desc: "Full Calacatta marble island and matching backsplash." },
  { img: "/grave-stone.png", title: "Black Marble Grand Staircase", category: "Tomb stone", location: "Independence Layout", date: "Feb 2026", desc: "Well designed and customized tomb stone." },
  { img: "/kitchen-wall.png", title: "Polished Granite Countertop", category: "KitchenTop", location: "New Haven", date: "Feb 2026", desc: "Glossy black granite with mirror finish." },
  { img: "/podium.png", title: "Luxury Master Bathroom", category: "Podium", location: "Trans-Ekulu", date: "Jan 2026", desc: "well designed marble podium." },
  { img: "/table.png", title: "White Marble Stair Hall", category: "Marble Table", location: "Achara Layout", date: "Jan 2026", desc: "dark marble table" },
  { img: "/marble-slab.png", title: "Modern Kitchen Island", category: "Slab", location: "Uwani", date: "Dec 2025", desc: "Pure marble slab" },
  
];

export default function ProjectsPage() {
  return (
    <>
      <PageHero eyebrow="Our Work" title="Recent Projects & Installations" description="A small selection of our most loved installations." image="/staircase-2.jpg" />

      <section className="py-20">
        <div className="container-x grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title + i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all"
            >
              <div className="relative h-60 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                <span className="absolute top-4 left-4 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">{p.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {p.location}</span>
                  <span className="inline-flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {p.date}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
