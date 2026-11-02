"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import {
  Video,
  Clapperboard,
  MonitorPlay,
  Zap,
  Layers3,
  ArrowRight,
  ArrowUpRight,
  Clock,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: MonitorPlay,
    title: "4K / 8K Editing",
    description: "High-resolution video timeline support.",
    cardClass: "bg-gradient-to-br from-[#1b5a45] via-[#256b53] to-[#3f8c70]",
  },
  {
    icon: Zap,
    title: "GPU Effects",
    description: "Fast rendering and real-time previews.",
    cardClass: "bg-gradient-to-br from-[#ec6a4b] via-[#f0825a] to-[#f4a45f]",
  },
  {
    icon: Layers3,
    title: "Creative Integration",
    description: "Works with Pixel Forge and Vector Studio.",
    cardClass: "bg-gradient-to-br from-[#f0a43a] via-[#f3b24a] to-[#f6c565]",
  },
];

const capabilities = [
  "Professional timeline-based video editing",
  "Advanced color grading and correction",
  "Transitions, filters and visual effects",
  "Multi-camera editing support",
  "Motion graphics and animation tools",
  "High-quality video export",
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

const popIn: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.94 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease },
  },
};

const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const itemSlide: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
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

export default function VideoContent() {
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
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#f4c76a]/50 bg-[#f4b740]/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-[#f8dc9b] backdrop-blur"
            >
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="inline-flex"
              >
                <Clock size={13} />
              </motion.span>
              Coming Soon
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Video &amp;
              <span className="mt-2 block font-medium text-[#f4c76a]">
                Motion
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Introducing Motion Lab — professional video editing and motion
              graphics software designed to work seamlessly with Pixel Forge
              and Vector Studio.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Pressable className="inline-block">
                <Link
                  href="/download"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4b740] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition-colors hover:bg-[#efa72a]"
                >
                  Explore Free Trial Suite
                  <ArrowUpRight size={16} />
                </Link>
              </Pressable>
              <Pressable className="inline-block">
                <Link
                  href="/image"
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Explore products
                </Link>
              </Pressable>
            </motion.div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          {/* Main Product Card */}
          <section className="mx-auto max-w-4xl">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
            >
              {/* Product Heading */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#1b5a45] via-[#256b53] to-[#3f8c70] p-8 text-center text-white sm:p-12">
                <motion.div
                  aria-hidden="true"
                  animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -right-14 -top-14 h-52 w-52 rounded-full bg-white/15 blur-2xl"
                />
                <motion.div
                  aria-hidden="true"
                  animate={{ x: [0, 25, 0], y: [0, -12, 0] }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -bottom-16 left-10 h-44 w-44 rounded-full bg-[#f4b740]/25 blur-2xl"
                />

                <motion.div
                  initial={{ scale: 0.4, opacity: 0, rotate: -15 }}
                  whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200, damping: 14 }}
                  className="relative mx-auto h-16 w-16"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur"
                  >
                    <Video size={32} strokeWidth={1.7} />
                  </motion.div>
                </motion.div>

                <h2 className="relative mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
                  Motion Lab
                </h2>

                <p className="relative mt-2 text-sm font-semibold text-[#f4c76a]">
                  Professional Video Editor
                </p>

                <p className="relative mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                  A powerful video editing workspace with professional timeline
                  controls, color grading, visual effects and multi-camera
                  support. Create content for YouTube, social media, film and
                  broadcast.
                </p>
              </div>

              <div className="p-6 sm:p-10 lg:p-12">
                {/* Feature Cards */}
                <motion.div
                  variants={stagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.3 }}
                  className="grid gap-4 sm:grid-cols-3"
                >
                  {features.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <motion.div
                        key={feature.title}
                        variants={popIn}
                        whileHover={{ y: -6 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 20,
                        }}
                        className={`relative overflow-hidden rounded-2xl p-5 text-white shadow-md shadow-black/5 ${feature.cardClass}`}
                      >
                        <div
                          aria-hidden="true"
                          className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-xl"
                        />
                        <motion.div
                          whileHover={{ rotate: -10, scale: 1.1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 12,
                          }}
                          className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-white/25 ring-1 ring-white/30"
                        >
                          <Icon size={21} />
                        </motion.div>

                        <h3 className="relative mt-4 text-sm font-semibold">
                          {feature.title}
                        </h3>

                        <p className="relative mt-2 text-xs leading-5 text-white/90">
                          {feature.description}
                        </p>
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Capabilities */}
                <div className="mt-10 border-t border-[#ece9df] pt-8">
                  <motion.h3
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mb-5 text-base font-semibold text-[#1f2a24]"
                  >
                    What to Expect
                  </motion.h3>

                  <motion.div
                    variants={listStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid gap-x-8 gap-y-4 sm:grid-cols-2"
                  >
                    {capabilities.map((item) => (
                      <motion.div
                        key={item}
                        variants={itemSlide}
                        className="flex items-start gap-3 text-sm text-[#4b5a52]"
                      >
                        <CheckCircle2
                          size={18}
                          className="mt-0.5 shrink-0 text-[#256b53]"
                        />
                        <span className="leading-6">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 30, scale: 0.97 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, ease }}
                  className="relative mt-10 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b5a45] via-[#2f7d63] to-[#d9a050] px-6 py-10 text-center text-white sm:px-10"
                >
                  <motion.div
                    aria-hidden="true"
                    animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -left-10 -top-10 h-44 w-44 rounded-full bg-white/10 blur-2xl"
                  />

                  <motion.div
                    animate={{ rotate: [0, -8, 8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 ring-1 ring-white/30"
                  >
                    <Clapperboard size={24} />
                  </motion.div>

                  <h3 className="relative mt-4 text-lg font-semibold sm:text-xl">
                    Be the First to Experience Motion Lab
                  </h3>

                  <p className="relative mx-auto mt-2 max-w-lg text-sm leading-6 text-white/85">
                    Stay connected with Pixel Forge Studio for product
                    announcements and future availability.
                  </p>

                  <Pressable className="relative mt-6 inline-block">
                    <Link
                      href="/download"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4b740] px-7 py-3.5 text-sm font-semibold text-[#1f2a24] transition-colors duration-200 hover:bg-[#efa72a]"
                    >
                      Explore Free Trial Suite
                      <ArrowRight size={17} />
                    </Link>
                  </Pressable>
                </motion.div>
              </div>
            </motion.article>
          </section>

          {/* Bottom Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <p className="text-xs leading-6 text-[#7a867f] sm:text-sm">
              Motion Lab is currently in development. Stay tuned for future
              updates and early access.
            </p>
          </motion.div>
        </div>
      </main>
    </MotionConfig>
  );
}
