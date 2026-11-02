"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import {
  Download,
  Monitor,
  Apple,
  HardDrive,
  CheckCircle2,
  ArrowRight,
  Headphones,
} from "lucide-react";

const products = [
  {
    name: "Pixel Forge",
    eyebrow: "RASTER IMAGE EDITOR",
    version: "2025.1",
    description:
      "A powerful creative workspace for photo editing, retouching, and digital art.",
    initials: "PF",
    headerClass: "bg-gradient-to-br from-[#1b5a45] via-[#256b53] to-[#3f8c70]",
    iconTileClass: "bg-[#e3f1ea] text-[#256b53]",
    buttonClass: "bg-[#f4b740] text-[#1f2a24] hover:bg-[#efa72a]",
    platforms: [
      { os: "Windows", size: "412 MB", arch: "64-bit" },
      { os: "macOS", size: "438 MB", arch: "Apple Silicon & Intel" },
      { os: "Linux", size: "395 MB", arch: "AppImage / .deb" },
    ],
    features: [
      "Advanced editing tools",
      "Non-destructive workflow",
      "AI-powered tools",
    ],
  },
  {
    name: "Vector Studio",
    eyebrow: "VECTOR ILLUSTRATION",
    version: "2025.1",
    description:
      "Create precise illustrations, scalable graphics, and polished brand assets.",
    initials: "VS",
    headerClass: "bg-gradient-to-br from-[#ec6a4b] via-[#f0825a] to-[#f4a45f]",
    iconTileClass: "bg-[#fde9e1] text-[#df5a3b]",
    buttonClass: "bg-[#1f5f4a] text-white hover:bg-[#184a3b]",
    platforms: [
      { os: "Windows", size: "287 MB", arch: "64-bit" },
      { os: "macOS", size: "301 MB", arch: "Apple Silicon & Intel" },
      { os: "Linux", size: "265 MB", arch: "AppImage / .deb" },
    ],
    features: [
      "Precision vector tools",
      "Scalable artwork",
      "Flexible export options",
    ],
  },
];

const requirements = [
  {
    title: "Minimum Requirements",
    subtitle: "Essential specifications",
    recommended: false,
    items: [
      ["OS", "Windows 10 / macOS 12 / Ubuntu 20.04+"],
      ["CPU", "4-core Intel/AMD or Apple M1"],
      ["RAM", "8 GB"],
      ["GPU", "DirectX 11 / Metal / OpenGL 4.5"],
      ["Storage", "2 GB available space"],
    ],
  },
  {
    title: "Recommended Setup",
    subtitle: "For the best performance",
    recommended: true,
    items: [
      ["OS", "Windows 11 / macOS 14 / Ubuntu 22.04+"],
      ["CPU", "8-core or better / Apple M2+"],
      ["RAM", "16 GB or more"],
      ["GPU", "Dedicated GPU with 4 GB+ VRAM"],
      ["Storage", "SSD with 5 GB available space"],
    ],
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

const listStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const itemSlide: Variants = {
  hidden: { opacity: 0, x: -18 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease } },
};

const chipPop: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 16 },
  },
};

const inView = { once: true, amount: 0.15 } as const;

function PlatformIcon({ os }: { os: string }) {
  if (os === "Windows") return <Monitor size={20} />;
  if (os === "macOS") return <Apple size={20} />;
  return <HardDrive size={20} />;
}

function ProductCard({ product }: { product: (typeof products)[number] }) {
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#1f5f4a]/10"
    >
      {/* Colored header */}
      <div
        className={`relative overflow-hidden p-6 text-white sm:p-8 ${product.headerClass}`}
      >
        <motion.div
          aria-hidden="true"
          animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/15 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-black/10 blur-2xl"
        />

        <div className="relative flex items-center justify-between gap-3">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 14 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 text-lg font-bold ring-1 ring-white/30 backdrop-blur"
          >
            {product.initials}
          </motion.div>

          <motion.span
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-full bg-[#f4b740] px-3.5 py-1.5 text-xs font-semibold text-[#1f2a24]"
          >
            14-day free trial
          </motion.span>
        </div>

        <p className="relative mt-6 text-xs font-bold tracking-widest text-white/80">
          {product.eyebrow}
        </p>

        <div className="relative mt-2 flex flex-wrap items-center gap-3">
          <h2 className="text-2xl font-bold sm:text-3xl">{product.name}</h2>
          <span className="rounded-full bg-white/20 px-2.5 py-1 text-xs font-medium text-white/90">
            v{product.version}
          </span>
        </div>

        <p className="relative mt-3 text-sm leading-6 text-white/85">
          {product.description}
        </p>

        <motion.div
          variants={listStagger}
          className="relative mt-5 flex flex-wrap gap-2"
        >
          {product.features.map((feature) => (
            <motion.span
              key={feature}
              variants={chipPop}
              className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white ring-1 ring-white/20"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>
      </div>

      <div className="border-b border-[#ece9df] bg-[#f8f6f0] px-6 py-3 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-wider text-[#7a867f]">
          Choose your platform
        </p>
      </div>

      <motion.div variants={listStagger} className="divide-y divide-[#ece9df]">
        {product.platforms.map((platform) => (
          <motion.div
            key={platform.os}
            variants={itemSlide}
            className="flex flex-col gap-4 px-6 py-5 transition-colors duration-200 hover:bg-[#fbfaf6] sm:flex-row sm:items-center sm:justify-between sm:px-8"
          >
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: -8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${product.iconTileClass}`}
              >
                <PlatformIcon os={platform.os} />
              </motion.div>

              <div>
                <p className="font-semibold text-[#1f2a24]">{platform.os}</p>
                <p className="mt-1 text-xs text-[#7a867f]">
                  {platform.arch} · {platform.size}
                </p>
              </div>
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 18 }}
              className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-colors ${product.buttonClass}`}
            >
              <motion.span
                whileHover={{ y: 2 }}
                className="inline-flex"
                aria-hidden="true"
              >
                <Download size={16} />
              </motion.span>
              Download
            </motion.button>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex items-center justify-between gap-3 border-t border-[#ece9df] px-6 py-4 text-xs text-[#7a867f] sm:px-8">
        <span>Version {product.version}</span>
        <span className="flex items-center gap-1.5 font-medium text-[#256b53]">
          <CheckCircle2 size={14} />
          Trial available
        </span>
      </div>
    </motion.article>
  );
}

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

export default function DownloadContent() {
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
            className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur"
            >
              <motion.span
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.6, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="h-2 w-2 rounded-full bg-[#f4b740]"
              />
              Available for Windows, macOS &amp; Linux
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Download your
              <span className="mt-2 block font-medium text-[#f4c76a]">
                creative tools
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Get everything you need to turn your ideas into beautiful work.
              Start with a free 14-day trial and explore all the features.
            </motion.p>

            <motion.div
              variants={stagger}
              className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/85"
            >
              {[
                "No credit card required",
                "Full-featured trial",
                "Multiple platforms",
              ].map((text) => (
                <motion.span
                  key={text}
                  variants={fadeUp}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 size={16} className="text-[#f4c76a]" />
                  {text}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Products */}
          <motion.section
            aria-label="Available software downloads"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="grid gap-7 lg:grid-cols-2 lg:gap-8"
          >
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </motion.section>

          {/* System Requirements */}
          <section className="mt-20">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mb-10 text-center"
            >
              <p className="text-sm font-semibold tracking-wider text-[#df5a3b]">
                COMPATIBILITY
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                System Requirements
              </h2>
              <p className="mt-3 text-sm text-[#5f6d65] sm:text-base">
                Check your system specifications before installing.
              </p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={inView}
              className="grid gap-6 md:grid-cols-2"
            >
              {requirements.map((requirement) => (
                <motion.div
                  key={requirement.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className={`rounded-3xl bg-white p-6 shadow-sm sm:p-8 ${
                    requirement.recommended
                      ? "ring-2 ring-[#256b53]/40"
                      : "ring-1 ring-black/5"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#1f2a24]">
                        {requirement.title}
                      </h3>
                      <p className="mt-1 text-sm text-[#7a867f]">
                        {requirement.subtitle}
                      </p>
                    </div>

                    {requirement.recommended && (
                      <motion.span
                        animate={{ scale: [1, 1.07, 1] }}
                        transition={{
                          duration: 2.4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="rounded-full bg-[#f4b740] px-3.5 py-1.5 text-xs font-semibold text-[#1f2a24]"
                      >
                        Recommended
                      </motion.span>
                    )}
                  </div>

                  <motion.div
                    variants={listStagger}
                    className="mt-6 space-y-4"
                  >
                    {requirement.items.map(([label, value]) => (
                      <motion.div
                        key={label}
                        variants={itemSlide}
                        className="flex flex-col gap-1 border-b border-[#ece9df] pb-3 text-sm sm:flex-row sm:items-start"
                      >
                        <span className="w-20 shrink-0 font-semibold text-[#256b53]">
                          {label}
                        </span>
                        <span className="text-[#4b5a52]">{value}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* Support */}
          <motion.section
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b5a45] via-[#2f7d63] to-[#d9a050] p-7 text-white sm:p-10"
          >
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-start gap-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur"
                >
                  <Headphones size={23} />
                </motion.div>

                <div>
                  <h2 className="text-xl font-bold sm:text-2xl">
                    Need help getting started?
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/85">
                    Visit our support center for help with installation,
                    compatibility, and licensing.
                  </p>
                </div>
              </div>

              <Pressable className="shrink-0">
                <Link
                  href="/support"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f4b740] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition-colors hover:bg-[#efa72a]"
                >
                  Visit Support
                  <ArrowRight size={16} />
                </Link>
              </Pressable>
            </div>
          </motion.section>

          {/* Legal note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 border-t border-[#e3dfd2] pt-7 text-center text-xs leading-6 text-[#7a867f]"
          >
            <p>
              By downloading, you agree to our{" "}
              <Link
                href="/support"
                className="font-medium text-[#1f2a24] underline underline-offset-4 hover:text-[#256b53]"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/support"
                className="font-medium text-[#1f2a24] underline underline-offset-4 hover:text-[#256b53]"
              >
                Privacy Policy
              </Link>
              .
            </p>

            <p className="mt-2">
              Pixel Forge &amp; Vector Studio · Creative tools for ambitious
              ideas.
            </p>
          </motion.div>
        </div>
      </main>
    </MotionConfig>
  );
}
