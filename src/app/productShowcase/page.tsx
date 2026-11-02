"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Image as ImageIcon,
  PenTool,
  Layers,
  Download,
} from "lucide-react";

/* =========================================
   PIXELFORGE BRAND COLORS
   Forest Green: #174B3A  |  Muted Teal: #438B79
   Coral: #F0785A        |  Amber: #F2B84B
   Warm Ivory: #FAF8F3
========================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const textStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const showcases = [
  {
    id: "pixel-forge",
    name: "Pixel Forge",
    eyebrow: "Raster Editor",
    title: "Edit photos like a pro",
    description:
      "A dark, focused workspace for photo editing, retouching and digital painting, with layers, filters and adjustments always one click away.",
    features: [
      "Layers with blend modes and opacity",
      "Brushes, retouching and creative tools",
      "Adjustments and filters panel",
      "Export to PNG or JPG",
    ],
    src: "/pf.png",
    alt: "Pixel Forge editor with a dark interface, tool bar, layers panel and a blank canvas",
    href: "/image",
    cta: "Explore Pixel Forge",
    icon: ImageIcon,
    backdrop: "bg-gradient-to-br from-[#174B3A] via-[#236B55] to-[#438B79]",
    glowA: "bg-[#F2B84B]/30",
    glowB: "bg-[#A5CDB5]/30",
    checkClass: "bg-[#E4EEE7] text-[#174B3A]",
    badgeClass: "bg-[#E4EEE7] text-[#174B3A]",
    buttonClass: "bg-[#174B3A] text-white hover:bg-[#123D2F]",
    chips: [
      { icon: Layers, label: "Layers & blend modes", pos: "left-3 top-6 sm:-left-4" },
      { icon: Download, label: "Export PNG / JPG", pos: "bottom-6 right-3 sm:-right-4" },
    ],
    reverse: false,
  },
  {
    id: "vector-studio",
    name: "Vector Studio",
    eyebrow: "Vector Design",
    title: "Design with precision",
    description:
      "A clean, light workspace for illustrations, logos and icons, with precise drawing tools, pathfinder operations and artboard alignment.",
    features: [
      "Selection, pen, shape and text tools",
      "Fill and stroke controls",
      "Pathfinder, arrange and align tools",
      "Export to SVG or PNG",
    ],
    src: "/vf.png",
    alt: "Vector Studio editor with a light interface, drawing tools, artboard and properties panel",
    href: "/image",
    cta: "Explore Vector Studio",
    icon: PenTool,
    backdrop: "bg-gradient-to-br from-[#F0785A] via-[#F5A17D] to-[#F2B84B]",
    glowA: "bg-white/30",
    glowB: "bg-[#174B3A]/20",
    checkClass: "bg-[#FCE5DF] text-[#D85D42]",
    badgeClass: "bg-[#FCE5DF] text-[#D85D42]",
    buttonClass: "bg-[#F0785A] text-white hover:bg-[#E0644A]",
    chips: [
      { icon: PenTool, label: "Pathfinder tools", pos: "right-3 top-6 sm:-right-4" },
      { icon: Download, label: "Export SVG / PNG", pos: "bottom-6 left-3 sm:-left-4" },
    ],
    reverse: true,
  },
];

function ShowcaseRow({ item }: { item: (typeof showcases)[number] }) {
  const reduceMotion = useReducedMotion();
  const Icon = item.icon;
  const slideFrom = item.reverse ? -70 : 70;

  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Text */}
      <motion.div
        variants={textStagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className={`lg:col-span-5 ${item.reverse ? "lg:order-2" : ""}`}
      >
        <motion.span
          variants={textItem}
          className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-bold ${item.badgeClass}`}
        >
          <Icon size={14} />
          {item.eyebrow}
        </motion.span>

        <motion.h3
          variants={textItem}
          className="mt-5 text-3xl font-semibold tracking-tight text-[#26332E] sm:text-4xl"
        >
          {item.title}
        </motion.h3>

        <motion.p
          variants={textItem}
          className="mt-4 text-sm leading-7 text-[#68766E] sm:text-base"
        >
          {item.description}
        </motion.p>

        <motion.ul variants={textItem} className="mt-6 space-y-3">
          {item.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm leading-6 text-[#4B5A52]"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${item.checkClass}`}
              >
                <Check size={13} strokeWidth={2.5} />
              </span>
              {feature}
            </li>
          ))}
        </motion.ul>

        <motion.div variants={textItem} className="mt-8">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block"
          >
            <Link
              href={item.href}
              className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold shadow-md transition-colors ${item.buttonClass}`}
            >
              {item.cta}
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Screenshot */}
      <motion.div
        initial={{ opacity: 0, x: reduceMotion ? 0 : slideFrom }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease }}
        className={`relative lg:col-span-7 ${item.reverse ? "lg:order-1" : ""}`}
      >
        <div
          className={`relative overflow-hidden rounded-[28px] p-4 shadow-xl sm:p-7 ${item.backdrop}`}
        >
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion ? {} : { x: [0, 30, 0], y: [0, 20, 0] }
            }
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className={`pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full blur-3xl ${item.glowA}`}
          />
          <motion.div
            aria-hidden="true"
            animate={
              reduceMotion ? {} : { x: [0, -30, 0], y: [0, -20, 0] }
            }
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className={`pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full blur-3xl ${item.glowB}`}
          />

          {/* Browser-style window */}
          <motion.div
            whileHover={reduceMotion ? {} : { y: -6, scale: 1.015 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
            className="relative overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black/10"
          >
            <div className="flex items-center gap-1.5 border-b border-black/5 bg-[#F4F2EC] px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#F0785A]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#F2B84B]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#438B79]" />
              <span className="ml-3 rounded-full bg-white px-3 py-0.5 text-[10px] font-medium text-[#68766E]">
                {item.name}
              </span>
            </div>

            <Image
              src={item.src}
              alt={item.alt}
              width={1919}
              height={945}
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="h-auto w-full"
            />
          </motion.div>

          {/* Floating chips */}
          {item.chips.map((chip, index) => {
            const ChipIcon = chip.icon;

            return (
              <motion.div
                key={chip.label}
                animate={reduceMotion ? {} : { y: [0, -8, 0] }}
                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute hidden items-center gap-2 rounded-xl bg-white px-3.5 py-2 text-xs font-bold text-[#26332E] shadow-lg sm:flex ${chip.pos}`}
              >
                <ChipIcon size={14} className="text-[#438B79]" />
                {chip.label}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProductShowcase() {
  return (
    <section
      aria-labelledby="showcase-heading"
      className="overflow-hidden border-y border-[#EAE7DC] bg-[#FFFDF7] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          variants={textStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-20"
        >
          <motion.p
            variants={textItem}
            className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#438B79]"
          >
            Product tour
          </motion.p>

          <motion.h2
            id="showcase-heading"
            variants={textItem}
            className="text-2xl font-semibold tracking-tight text-[#26332E] sm:text-3xl md:text-4xl"
          >
            See the editors in action
          </motion.h2>

          <motion.p
            variants={textItem}
            className="mt-3 text-sm leading-7 text-[#68766E] sm:text-base"
          >
            Two powerful apps, one creative suite. Take a look inside Pixel
            Forge and Vector Studio.
          </motion.p>
        </motion.div>

        <div className="space-y-20 sm:space-y-28">
          {showcases.map((item) => (
            <ShowcaseRow key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
