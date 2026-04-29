'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/pageHero";



export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Contact" title="Let's Talk About Your Space" description="We respond within hours during business days." image="bathroom-2.jpg" />

      <section className="py-20">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="lg:col-span-2 space-y-4">
            <InfoRow icon={MapPin} title="Visit Us" lines={["#72/73 Kenyetta Street,", "Uwani, Enugu, Nigeria"]} />
            <InfoRow icon={Phone} title="Call Us" lines={["08154780100", "09050377975"]} />
            <InfoRow icon={Mail} title="Email" lines={["info@bucheximpex.com"]} />
            <InfoRow icon={Clock} title="Business Hours" lines={["Mon – Sat: 8:00AM – 5:30PM", "Sunday: Closed"]} />
            <a href="https://wa.me/2348154780100" target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-whatsapp-foreground hover:opacity-90 transition-opacity">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 bg-white rounded-2xl p-8 shadow-card grid gap-4"
          >
            <h2 className="text-2xl font-bold">Send Us a Message</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Service Needed</label>
                <select title="b" className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40">
                  <option>Kitchen Countertops</option>
                  <option>Marble Staircase</option>
                  <option>Bathroom Finishing</option>
                  <option>Wall Cladding</option>
                  <option>Commercial Project</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Message</label>
              <textarea rows={5} className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" placeholder="Tell us about your project..." />
            </div>
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-hover transition-colors">
              {sent ? "Message Sent ✓" : <>Send Message <Send className="h-4 w-4" /></>}
            </button>
          </motion.form>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="rounded-2xl overflow-hidden shadow-card aspect-[16/7] bg-cream relative">
          <iframe   
              loading="lazy" className="h-full w-full border-0"  title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.81032102773!2d7.4968184781256975!3d6.4184128769995645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a16aecadc655%3A0x96aa11887c61d3fc!2s72%2C%2073%20Kenyatta%20St%2C%20Uwani%2C%20Enugu%20400105%2C%20Enugu!5e0!3m2!1sen!2sng!4v1777461927083!5m2!1sen!2sng" width="600" height="450"   referrerPolicy="no-referrer-when-downgrade"></iframe>
            
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, title, lines }: { icon: typeof MapPin; title: string; lines: string[] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-card flex items-start gap-4">
      <div className="h-11 w-11 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{title}</div>
        {lines.map((l) => <div key={l} className="text-sm text-foreground">{l}</div>)}
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{label}</label>
      <input placeholder="nill"
        name={name} type={type} required={required}
        className="mt-1.5 w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
      />
    </div>
  );
}
