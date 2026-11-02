"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BookOpen,
  Image as ImageIcon,
  Palette,
  GraduationCap,
  Users,
  Download,
  Clock,
  ArrowRight,
  ArrowUpRight,
  HelpCircle,
} from "lucide-react";

type Resource = {
  title: string;
  type: string;
  description: string;
  time: string;
  icon: LucideIcon;
  tileClass: string;
  chipClass: string;
};

const green = {
  tileClass: "bg-gradient-to-br from-[#1b5a45] to-[#3f8c70] text-white",
  chipClass: "bg-[#e3f1ea] text-[#256b53]",
};
const coral = {
  tileClass: "bg-gradient-to-br from-[#ec6a4b] to-[#f4a45f] text-white",
  chipClass: "bg-[#fde9e1] text-[#df5a3b]",
};
const amber = {
  tileClass: "bg-gradient-to-br from-[#f0a43a] to-[#f6c565] text-[#1f2a24]",
  chipClass: "bg-[#fdf0d3] text-[#a86d12]",
};
const sage = {
  tileClass: "bg-gradient-to-br from-[#5fa085] to-[#9fcdb6] text-white",
  chipClass: "bg-[#e3f1ea] text-[#256b53]",
};

const resources: Resource[] = [
  {
    title: "Getting Started Guide",
    type: "Tutorial",
    description:
      "Complete walkthrough for new users of Pixel Forge and Vector Studio.",
    time: "25 min",
    icon: BookOpen,
    ...green,
  },
  {
    title: "Photo Retouching Masterclass",
    type: "Tutorial",
    description:
      "Professional skin retouching, frequency separation and color grading techniques.",
    time: "1h 10m",
    icon: GraduationCap,
    ...green,
  },
  {
    title: "Logo Design from Scratch",
    type: "Tutorial",
    description:
      "Create a professional logo using Vector Studio's precision tools.",
    time: "45 min",
    icon: Palette,
    ...green,
  },
  {
    title: "UI Kit – Modern Dashboard",
    type: "Template",
    description:
      "200+ components with dark and light themes for modern design workflows.",
    time: "Free",
    icon: ImageIcon,
    ...coral,
  },
  {
    title: "Brush Pack – Digital Painting",
    type: "Asset",
    description:
      "120 high-quality brushes for concept art and illustration in Pixel Forge.",
    time: "Free",
    icon: Download,
    ...amber,
  },
  {
    title: "Community Showcase",
    type: "Gallery",
    description:
      "Explore creative work from other artists and share your own designs.",
    time: "Live",
    icon: Users,
    ...sage,
  },
];

/* ---------- Animation variants ---------- */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.08 } },
};

const gridStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const popIn: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
};

/* Button wrapper: subtle hover / tap feedback */
function Pressable({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 350, damping: 18 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function ResourceCard({ resource }: { resource: Resource }) {
  const Icon = resource.icon;

  return (
    <motion.article
      variants={popIn}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#1f5f4a]/10 sm:p-7"
    >
      {/* Card Header */}
      <div className="flex items-center justify-between gap-3">
        <span
          className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${resource.chipClass}`}
        >
          {resource.type}
        </span>

        <span className="flex items-center gap-1.5 text-xs font-medium text-[#7a867f]">
          <Clock size={13} />
          {resource.time}
        </span>
      </div>

      {/* Icon */}
      <motion.div
        whileHover={{ rotate: -8, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300, damping: 14 }}
        className={`mt-6 flex h-14 w-14 items-center justify-center rounded-2xl shadow-md shadow-black/10 ${resource.tileClass}`}
      >
        <Icon size={25} strokeWidth={1.8} />
      </motion.div>

      {/* Content */}
      <h2 className="mt-5 text-lg font-semibold tracking-tight text-[#1f2a24]">
        {resource.title}
      </h2>

      <p className="mt-2 min-h-[72px] text-sm leading-6 text-[#5f6d65]">
        {resource.description}
      </p>

      {/* Action */}
      <div className="mt-6 border-t border-[#ece9df] pt-5">
        <Link
          href="/support"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#256b53] transition-colors hover:text-[#1b5a45]"
        >
          Explore Resource
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ResourcesContent() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen bg-[#f8f6f0] text-[#1f2a24]">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#1b5a45] via-[#256b53] to-[#3b8467] pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, 40, 0], y: [0, 25, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#c9a24a]/30 blur-3xl"
          />
          <motion.div
            aria-hidden="true"
            animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#8fc2a6]/30 blur-3xl"
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative mx-auto max-w-7xl px-5 text-center sm:px-8 lg:px-10"
          >
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur"
            >
              <BookOpen size={13} />
              Learn &amp; Create
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Resources
              <span className="mt-2 block font-medium text-[#f4c76a]">
                &amp; Learning
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Explore tutorials, templates, creative assets and community
              resources to improve your skills and make your creative workflow
              easier.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Pressable className="inline-block">
                <Link
                  href="/support"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4b740] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition-colors hover:bg-[#efa72a]"
                >
                  Visit Help Center
                  <ArrowUpRight size={16} />
                </Link>
              </Pressable>
              <Pressable className="inline-block">
                <Link
                  href="/download"
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Free trial
                </Link>
              </Pressable>
            </motion.div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          {/* Section heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Learn, download and get inspired
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5f6d65] sm:text-base">
              Tutorials, templates and assets to help you create more.
            </p>
          </motion.div>

          {/* Resource Grid */}
          <motion.section
            aria-label="Learning resources"
            variants={gridStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {resources.map((resource) => (
              <ResourceCard key={resource.title} resource={resource} />
            ))}
          </motion.section>

          {/* Help Center CTA */}
          <motion.section
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b5a45] via-[#2f7d63] to-[#d9a050] px-6 py-12 text-center text-white sm:px-10 sm:py-14"
          >
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            />

            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur"
            >
              <HelpCircle size={28} strokeWidth={1.7} />
            </motion.div>

            <h2 className="relative mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              Need More Help?
            </h2>

            <p className="relative mx-auto mt-3 max-w-lg text-sm leading-7 text-white/85">
              Find detailed guides, troubleshooting instructions and additional
              information in our Help Center.
            </p>

            <Pressable className="relative mt-7 inline-block">
              <Link
                href="/support"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4b740] px-7 py-3.5 text-sm font-semibold text-[#1f2a24] transition-colors duration-200 hover:bg-[#efa72a]"
              >
                Visit Help Center
                <ArrowRight size={17} />
              </Link>
            </Pressable>
          </motion.section>
        </div>
      </main>
    </MotionConfig>
  );
}
