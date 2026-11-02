"use client";

import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Image as ImageIcon,
  PenTool,
  Check,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Layers,
  Brush,
} from "lucide-react";

type Product = {
  name: string;
  category: string;
  description: string;
  icon: LucideIcon;
  features: string[];
  headerClass: string;
  checkClass: string;
  buttonClass: string;
};

const products: Product[] = [
  {
    name: "Pixel Forge",
    category: "Raster Editor",
    description:
      "A professional photo editing solution with powerful tools for image manipulation, retouching, digital painting and creative design.",
    icon: ImageIcon,
    features: [
      "Unlimited layers and blending modes",
      "Content-aware fill and AI editing tools",
      "Camera RAW support and lens corrections",
      "Advanced photo retouching",
      "Custom brushes and texture tools",
      "Batch processing and automation",
      "PSD, TIFF, PNG, JPEG, WebP and HEIC support",
    ],
    headerClass: "bg-gradient-to-br from-[#1b5a45] via-[#256b53] to-[#3f8c70]",
    checkClass: "bg-[#e3f1ea] text-[#256b53]",
    buttonClass: "bg-[#f4b740] text-[#1f2a24] hover:bg-[#efa72a]",
  },
  {
    name: "Vector Studio",
    category: "Vector Design",
    description:
      "Create professional illustrations, logos, icons and graphic designs with precise vector tools and scalable artwork.",
    icon: PenTool,
    features: [
      "Advanced Bezier pen and curvature tools",
      "Live shape effects and boolean operations",
      "Variable fonts and OpenType features",
      "Gradient meshes and pattern fills",
      "Artboards and multi-page documents",
      "Symbol libraries and asset management",
      "SVG, PDF, EPS and PNG export",
    ],
    headerClass: "bg-gradient-to-br from-[#ec6a4b] via-[#f0825a] to-[#f4a45f]",
    checkClass: "bg-[#fde9e1] text-[#df5a3b]",
    buttonClass: "bg-[#1f5f4a] text-white hover:bg-[#184a3b]",
  },
];

const heroTiles = [
  { icon: ImageIcon, tile: "bg-white text-[#1f5f4a]", rotate: -6 },
  { icon: PenTool, tile: "bg-[#f4b740] text-[#1f2a24]", rotate: 3 },
  { icon: Layers, tile: "bg-[#ee6c4d] text-white", rotate: -3 },
  { icon: Brush, tile: "bg-[#cfe6da] text-[#1f5f4a]", rotate: 6 },
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
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemSlide: Variants = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease } },
};

const inView = { once: true, amount: 0.2 } as const;

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

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon;

  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#1f5f4a]/10"
    >
      {/* Colored header */}
      <div
        className={`relative overflow-hidden p-7 text-white sm:p-9 ${product.headerClass}`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/15 blur-2xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-black/10 blur-2xl"
        />

        <div className="relative flex items-start justify-between gap-4">
          <motion.div
            whileHover={{ rotate: -8, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur"
          >
            <Icon size={27} strokeWidth={1.7} />
          </motion.div>

          <span className="rounded-full bg-white/20 px-3.5 py-1.5 text-xs font-semibold tracking-wide ring-1 ring-white/25 backdrop-blur">
            {product.category}
          </span>
        </div>

        <h2 className="relative mt-7 text-2xl font-bold tracking-tight sm:text-3xl">
          {product.name}
        </h2>

        <p className="relative mt-3 min-h-[84px] text-sm leading-7 text-white/85">
          {product.description}
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-7 sm:p-9">
        <h3 className="mb-5 text-sm font-semibold text-[#1f2a24]">
          Key Features
        </h3>

        <motion.ul variants={listStagger} className="flex-1 space-y-4">
          {product.features.map((feature) => (
            <motion.li
              key={feature}
              variants={itemSlide}
              className="flex items-start gap-3 text-sm leading-6 text-[#4b5a52]"
            >
              <span
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${product.checkClass}`}
              >
                <Check size={13} strokeWidth={2.5} />
              </span>
              {feature}
            </motion.li>
          ))}
        </motion.ul>

        <div className="mt-9 border-t border-[#ece9df] pt-6">
          <Pressable className="sm:inline-block">
            <Link
              href="/download"
              className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors duration-200 sm:w-auto ${product.buttonClass}`}
            >
              Download {product.name}
              <ArrowRight size={17} />
            </Link>
          </Pressable>
        </div>
      </div>
    </motion.article>
  );
}

export default function ImageContent() {
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
              <Sparkles size={13} />
              PixelForge Creative Suite
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Image Creation
              <span className="mt-2 block font-medium text-[#f4c76a]">
                Tools
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Everything you need for photo editing, illustration and graphic
              design. Create professional artwork with powerful and easy-to-use
              creative tools.
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
                  Start creating
                  <ArrowUpRight size={16} />
                </Link>
              </Pressable>
              <Pressable className="inline-block">
                <Link
                  href="/resources"
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Explore resources
                </Link>
              </Pressable>
            </motion.div>

            {/* Floating tiles */}
            <div
              aria-hidden="true"
              className="mt-12 flex items-center justify-center gap-4 sm:gap-6"
            >
              {heroTiles.map(({ icon: TileIcon, tile, rotate }, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.4, y: 30, rotate: 0 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate }}
                  transition={{
                    delay: 0.7 + i * 0.12,
                    type: "spring",
                    stiffness: 180,
                    damping: 14,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -9, 0] }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg shadow-black/15 sm:h-16 sm:w-16 ${tile}`}
                  >
                    <TileIcon size={26} strokeWidth={1.7} />
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Products */}
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={inView}
            className="mx-auto mb-12 max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Choose your creative tool
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#5f6d65] sm:text-base">
              Two powerful apps, one creative workspace.
            </p>
          </motion.div>

          <motion.section
            aria-label="Image creation products"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="grid items-stretch gap-7 lg:grid-cols-2 lg:gap-8"
          >
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </motion.section>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative mt-14 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b5a45] via-[#2f7d63] to-[#d9a050] px-6 py-12 text-center text-white sm:px-10 sm:py-14"
          >
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            />
            <h3 className="relative text-2xl font-bold tracking-tight sm:text-3xl">
              14-day free trial
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
              Included with both creative tools. No credit card required.
            </p>
            <Pressable className="relative mt-7 inline-block">
              <Link
                href="/download"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4b740] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition-colors hover:bg-[#efa72a]"
              >
                Get started for free
                <ArrowUpRight size={16} />
              </Link>
            </Pressable>
          </motion.div>
        </div>
      </main>
    </MotionConfig>
  );
}
