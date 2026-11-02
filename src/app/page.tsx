"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import pf from "../assets/pf.png"
import vf from "../assets/vf.png"

import {
  ArrowUpRight,
  Sparkles,
  Image as ImageIcon,
  WandSparkles,
  Layers,
  PenTool,
  Type,
  Palette,
  Crop,
  Eraser,
  Video,
  Heart,
  Shapes,
  Stars,
  Zap,
  Aperture,
  MoveRight,
  Check,
  Download,
} from "lucide-react";

/* =========================================
   PIXELFORGE BRAND COLORS

   Forest Green: #174B3A
   Muted Teal:   #438B79
   Coral:        #F0785A
   Amber:        #F2B84B
   Warm Ivory:   #FAF8F3
========================================= */

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease,
    },
  },
};

/* Showcase section animations */
const textStagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const textItem: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease } },
};

/* =========================================
   DATA
========================================= */

const tools = [
  {
    icon: ImageIcon,
    label: "Image editing",
    color: "bg-[#E4EEE7] text-[#174B3A]",
  },
  {
    icon: WandSparkles,
    label: "AI tools",
    color: "bg-[#FCE5DF] text-[#D85D42]",
  },
  {
    icon: Type,
    label: "Typography",
    color: "bg-[#FCEFD0] text-[#A87317]",
  },
  {
    icon: Palette,
    label: "Colors",
    color: "bg-[#F8E8CF] text-[#AD702B]",
  },
  {
    icon: Crop,
    label: "Photo editing",
    color: "bg-[#DDECE7] text-[#438B79]",
  },
  {
    icon: Video,
    label: "Video",
    color: "bg-[#E7E8D9] text-[#61784F]",
  },
];

const creativeCards = [
  {
    title: "Turn your ideas into stunning visuals",
    description:
      "Create beautiful artwork with powerful editing tools.",
    label: "Explore PixelForge",
    href: "/image",
    style: "bg-gradient-to-br from-[#174B3A] to-[#438B79]",
    type: "artwork",
  },
  {
    title: "Clean up photos with Magic Eraser",
    description:
      "Remove unwanted objects and distractions in seconds.",
    label: "Explore Magic Eraser",
    href: "/image",
    style: "bg-gradient-to-br from-[#F0785A] to-[#F5A17D]",
    type: "eraser",
  },
  {
    title: "Remove image backgrounds in one click",
    description:
      "Create clean, professional images effortlessly.",
    label: "Explore background remover",
    href: "/image",
    style: "bg-gradient-to-br from-[#F4D9C7] to-[#F7B9A5]",
    type: "background",
  },
  {
    title: "Elevate your writing with Magic Write",
    description:
      "Turn simple ideas into engaging creative content.",
    label: "Try Magic Write",
    href: "/image",
    style: "bg-gradient-to-br from-[#438B79] to-[#A5CDB5]",
    type: "writing",
  },
];

const suiteCards = [
  {
    title: "Meet the Visual Suite",
    description:
      "Your creative workspace for everything visual.",
    label: "Explore creative tools",
    style: "bg-gradient-to-br from-[#174B3A] to-[#76A98C]",
    type: "visual",
  },
  {
    title: "Present with impact",
    description:
      "Make presentations that communicate your ideas.",
    label: "Explore presentations",
    style: "bg-gradient-to-br from-[#F2B84B] to-[#F0785A]",
    type: "presentation",
  },
];

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
    src: pf,
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
    src: vf,
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

const templates = [
  {
    title: "Pre-Order Now",
    category: "Social Media",
    style: "bg-[#174B3A] text-white",
    subtitle: "NEW COLLECTION",
  },
  {
    title: "Open House",
    category: "Business",
    style: "bg-[#F4D9C7] text-[#26332E]",
    subtitle: "REAL ESTATE",
  },
  {
    title: "Project Retro Deck",
    category: "Presentation",
    style: "bg-[#DCEBE1] text-[#174B3A]",
    subtitle: "PRESENTATION",
  },
  {
    title: "Creative Ideas",
    category: "Marketing",
    style: "bg-[#F0785A] text-white",
    subtitle: "DESIGN STUDIO",
  },
  {
    title: "Content Strategy",
    category: "Marketing",
    style: "bg-[#F2B84B] text-[#26332E]",
    subtitle: "CREATIVE PLANNING",
  },
  {
    title: "Hiring Plan",
    category: "Business",
    style: "bg-[#438B79] text-white",
    subtitle: "TEAM GROWTH",
  },
];

const ecosystemCards = [
  {
    title:
      "Get inspired, build skills and discover what you can create",
    label: "Explore creative resources",
    style: "bg-gradient-to-br from-[#174B3A] to-[#438B79]",
    icon: Sparkles,
    type: "inspiration",
  },
  {
    title:
      "Bring your ideas to life with powerful design tools",
    label: "Explore tools",
    style: "bg-gradient-to-br from-[#438B79] to-[#A5CDB5]",
    icon: Palette,
    type: "design",
  },
  {
    title:
      "End-to-end platform for large organizations",
    label: "Explore enterprise",
    style: "bg-gradient-to-br from-[#26332E] to-[#526D5F]",
    icon: Layers,
    type: "enterprise",
  },
  {
    title:
      "Built for small businesses with big aspirations",
    label: "Explore business",
    style: "bg-gradient-to-br from-[#F0785A] to-[#F2B84B]",
    icon: Zap,
    type: "business",
  },
];

/* =========================================
   REUSABLE REVEAL COMPONENT
========================================= */

function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={
        reduceMotion ? { duration: 0 } : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* =========================================
   SECTION HEADING
========================================= */

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#438B79]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl font-semibold tracking-tight text-[#26332E] sm:text-3xl md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-7 text-[#68766E] sm:text-base">
          {description}
        </p>
      )}
    </Reveal>
  );
}

/* =========================================
   FLOATING HERO ARTWORK
========================================= */

function FloatingArtwork() {
  const reduceMotion = useReducedMotion();

  const floatingItems = [
    {
      icon: Type,
      style: "bg-white text-[#438B79] rotate-[-10deg]",
    },
    {
      icon: ImageIcon,
      style: "bg-[#F0785A] text-white rotate-[8deg]",
    },
    {
      icon: Heart,
      style: "bg-[#F2B84B] text-[#8A5620] rotate-[-12deg]",
    },
    {
      icon: Sparkles,
      style: "bg-[#DCEBE1] text-[#174B3A] rotate-[12deg]",
    },
    {
      icon: Palette,
      style: "bg-[#F2B84B] text-[#174B3A] rotate-[-8deg]",
    },
    {
      icon: Aperture,
      style: "bg-white text-[#438B79] rotate-[12deg]",
    },
    {
      icon: Shapes,
      style: "bg-[#A5CDB5] text-[#174B3A] rotate-[-10deg]",
    },
    {
      icon: PenTool,
      style: "bg-white text-[#F0785A] rotate-[8deg]",
    },
  ];

  return (
    <motion.div
      className="relative mx-auto mt-12 grid max-w-lg grid-cols-4 justify-items-center gap-x-5 gap-y-6 sm:gap-x-10"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {floatingItems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            variants={cardAnimation}
            animate={
              reduceMotion
                ? {}
                : {
                    y: [0, -12, 0],
                    rotate: [0, 4, -4, 0],
                  }
            }
            transition={{
              duration: 3 + index * 0.3,
              repeat: reduceMotion ? 0 : Infinity,
              ease: "easeInOut",
              delay: index * 0.15,
            }}
            whileHover={{
              scale: 1.2,
              rotate: 12,
            }}
            className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl shadow-lg shadow-black/10 sm:h-14 sm:w-14 ${item.style}`}
          >
            <Icon size={25} strokeWidth={1.8} />
          </motion.div>
        );
      })}
    </motion.div>
  );
}

/* =========================================
   CREATIVE CARD ARTWORK
========================================= */

function CardArtwork({ type }: { type: string }) {
  const reduceMotion = useReducedMotion();

  if (type === "artwork") {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-hidden sm:h-48">
        <motion.div
          animate={
            reduceMotion
              ? {}
              : { rotate: [-12, -7, -12], y: [0, -6, 0] }
          }
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute left-8 top-8 h-24 w-24 rounded-xl border border-white/50 bg-white/20 backdrop-blur-sm"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : { rotate: [12, 18, 12], y: [0, 8, 0] }
          }
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute right-10 top-5 h-20 w-16 rounded-lg bg-[#F2B84B] shadow-xl"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : { y: [0, -8, 0], rotate: [-5, -2, -5] }
          }
          transition={{ duration: 4, repeat: Infinity }}
          className="relative flex h-28 w-36 items-center justify-center rounded-xl border-4 border-white/40 bg-gradient-to-br from-[#F2B84B] via-[#F0785A] to-[#438B79] shadow-2xl sm:h-36 sm:w-44"
        >
          <span className="text-center text-2xl font-black tracking-tight text-white sm:text-3xl">
            CREATE
          </span>
        </motion.div>

        <div className="absolute bottom-5 left-10 rounded-md bg-white px-3 py-1 text-[10px] font-bold text-[#174B3A] shadow-lg">
          Creative design
        </div>

        <Sparkles
          className="absolute right-8 top-12 text-[#F2B84B]"
          size={28}
        />
      </div>
    );
  }

  if (type === "eraser") {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5A17D] to-[#F0785A] sm:h-48">
        <div className="absolute left-5 top-5 h-24 w-24 rounded-full bg-[#F2B84B]/50 blur-xl" />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  rotate: [-5, 5, -5],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{ duration: 4, repeat: Infinity }}
          className="flex h-32 w-32 items-center justify-center rounded-2xl border-4 border-white/70 bg-gradient-to-br from-[#D85D42] to-[#F2B84B] shadow-xl"
        >
          <Eraser className="text-white" size={55} />
        </motion.div>

        <span className="absolute bottom-4 right-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#D85D42]">
          Magic Eraser
        </span>
      </div>
    );
  }

  if (type === "background") {
    return (
      <div className="relative flex h-40 items-center justify-center overflow-hidden bg-[#F4D9C7] sm:h-48">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%),linear-gradient(45deg,#fff_25%,transparent_25%,transparent_75%,#fff_75%)] [background-position:0_0,12px_12px] [background-size:24px_24px]" />

        <motion.div
          animate={
            reduceMotion ? {} : { scale: [1, 1.08, 1] }
          }
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute inset-x-8 bottom-0 flex h-32 items-center justify-center rounded-t-full bg-gradient-to-br from-[#F0785A] to-[#D85D42]"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#F2B84B]">
            <ImageIcon size={38} className="text-white" />
          </div>
        </motion.div>

        <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#D85D42]">
          Background removed
        </span>
      </div>
    );
  }

  return (
    <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-[#438B79] to-[#A5CDB5] px-5 sm:h-48">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 blur-2xl" />

      <motion.div
        animate={reduceMotion ? {} : { y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="relative max-w-xs text-center"
      >
        <p className="font-serif text-xl italic text-white sm:text-2xl">
          Create something
        </p>

        <p className="mt-2 text-3xl font-black text-white sm:text-4xl">
          AMAZING.
        </p>

        <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-[#174B3A] shadow-lg">
          <WandSparkles size={14} />
          Magic Write
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================
   SUITE ARTWORK
========================================= */

function SuiteArtwork({ type }: { type: string }) {
  const reduceMotion = useReducedMotion();

  if (type === "visual") {
    const icons = [
      ImageIcon,
      Heart,
      Video,
      Type,
      Palette,
      Layers,
      Sparkles,
      PenTool,
    ];

    return (
      <div className="relative flex h-48 items-center justify-center overflow-hidden sm:h-56">
        <motion.div
          animate={reduceMotion ? {} : { rotate: 360 }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute h-36 w-36 rounded-full border-[20px] border-white/15"
        />

        <div className="absolute h-28 w-28 rounded-full bg-[#F2B84B]/30 blur-xl" />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.08, 1],
                  rotate: [0, 5, -5, 0],
                }
          }
          transition={{ duration: 5, repeat: Infinity }}
          className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-white/50 bg-gradient-to-br from-[#F2B84B] to-[#438B79] shadow-2xl"
        >
          <Sparkles size={42} className="text-white" />
        </motion.div>

        {icons.map((Icon, index) => {
          const angle = (index * Math.PI * 2) / icons.length;
          const x = Math.cos(angle) * 85;
          const y = Math.sin(angle) * 72;

          return (
            <motion.div
              key={index}
              animate={
                reduceMotion
                  ? {}
                  : {
                      y: [y, y - 6, y],
                      rotate: [0, 8, 0],
                    }
              }
              transition={{
                duration: 3 + index * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.2 }}
              className="absolute flex h-11 w-11 items-center justify-center rounded-xl border border-white/50 bg-white text-[#174B3A] shadow-lg"
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <Icon size={21} />
            </motion.div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="relative flex h-48 items-center justify-center overflow-hidden sm:h-56">
      <div className="absolute -right-5 -top-8 h-40 w-40 rounded-full bg-white/20" />
      <div className="absolute bottom-0 left-0 h-20 w-full bg-[#F0785A]/30" />

      <motion.div
        animate={
          reduceMotion
            ? {}
            : { y: [0, -7, 0], rotate: [-4, -2, -4] }
        }
        transition={{ duration: 5, repeat: Infinity }}
        className="relative w-4/5 rounded-xl border-4 border-white bg-[#FAF8F3] p-4 shadow-2xl"
      >
        <span className="text-[10px] font-bold uppercase tracking-widest text-[#D85D42]">
          Creative presentation
        </span>

        <p className="mt-3 font-serif text-2xl font-bold leading-tight text-[#26332E]">
          Ideas that
          <br />
          make an impact.
        </p>

        <div className="mt-3 flex gap-2">
          <span className="h-2 w-12 rounded-full bg-[#F0785A]" />
          <span className="h-2 w-8 rounded-full bg-[#438B79]" />
        </div>
      </motion.div>
    </div>
  );
}

/* =========================================
   PRODUCT SHOWCASE ROW
========================================= */

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

/* =========================================
   TEMPLATE CARD
========================================= */

function TemplateCard({
  item,
}: {
  item: (typeof templates)[number];
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      variants={cardAnimation}
      whileHover={reduceMotion ? {} : { y: -10, scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.3 }}
      className="shrink-0"
    >
      <Link
        href="/image"
        className={`group relative flex h-48 w-[210px] flex-col justify-between overflow-hidden rounded-xl p-5 shadow-sm sm:w-[230px] ${item.style}`}
      >
        <div>
          <span className="text-[9px] font-bold uppercase tracking-[0.16em] opacity-75">
            {item.subtitle}
          </span>

          <h3 className="mt-3 max-w-[170px] text-2xl font-bold leading-tight tracking-tight">
            {item.title}
          </h3>
        </div>

        <div className="flex items-center justify-between">
          <span className="rounded-full bg-white/85 px-3 py-1 text-[10px] font-semibold text-[#26332E]">
            {item.category}
          </span>

          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/85 text-[#26332E] transition duration-300 group-hover:translate-x-1">
            <ArrowUpRight size={16} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

/* =========================================
   ECOSYSTEM ARTWORK
========================================= */

function EcosystemArtwork({
  type,
  Icon,
}: {
  type: string;
  Icon: React.ElementType;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative flex h-32 items-center justify-center overflow-hidden sm:h-40">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border-[18px] border-white/10" />

      <div className="absolute bottom-[-30px] left-5 h-28 w-28 rounded-full bg-white/20 blur-xl" />

      <motion.div
        animate={
          reduceMotion
            ? {}
            : {
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }
        }
        transition={{ duration: 5, repeat: Infinity }}
        className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/40 bg-white/20 shadow-xl backdrop-blur-md"
      >
        <Icon size={38} className="text-white" />
      </motion.div>

      <motion.div
        animate={
          reduceMotion ? {} : { y: [0, -5, 0], rotate: [12, 8, 12] }
        }
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute right-8 top-5 rounded-lg bg-white px-3 py-2 text-xs font-bold text-[#174B3A] shadow-lg"
      >
        {type === "business"
          ? "Business"
          : type === "enterprise"
            ? "Teams"
            : type === "design"
              ? "Design"
              : "Create"}
      </motion.div>
    </div>
  );
}

/* =========================================
   MAIN HOME PAGE
========================================= */

export default function HomePage() {
  const reduceMotion = useReducedMotion();

  return (
    <main className="overflow-hidden bg-[#FAF8F3] text-[#26332E]">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#174B3A] via-[#236B55] to-[#438B79]">

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                }
          }
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -left-28 top-10 h-72 w-72 rounded-full bg-[#F2B84B] blur-3xl"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.25, 0.1],
                }
          }
          transition={{ duration: 9, repeat: Infinity }}
          className="absolute -right-28 top-24 h-72 w-72 rounded-full bg-[#A5CDB5] blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 text-center sm:px-8 sm:pb-20 sm:pt-28">

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm"
          >
            <Sparkles size={14} />
            PIXELFORGE CREATIVE SUITE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 45 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease,
            }}
            className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.08] tracking-tight text-[#FFFDF7] sm:text-6xl lg:text-7xl"
          >
            What will you
            <br />
            <span className="font-normal text-[#F2D69C]">
              create today?
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#F1F5EC]/90 sm:text-base"
          >
            Make your ideas a reality with powerful creative tools,
            professional image editing, and limitless possibilities.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"
          >
            <motion.div
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/download"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F2B84B] px-7 py-3 text-sm font-semibold text-[#26332E] shadow-lg transition hover:bg-[#FFD078]"
              >
                Start creating
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 0.96 }}
            >
              <Link
                href="/image"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/40 bg-white/10 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Explore products
              </Link>
            </motion.div>
          </motion.div>

          <FloatingArtwork />
        </div>
      </section>

      {/* =====================================
          CREATIVE TOOLS
      ===================================== */}

      <section className="bg-[#FAF8F3] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <SectionHeading
            title="Tools to power your best work"
            description="Everything you need to turn creative ideas into reality."
          />

          <Reveal>
            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {tools.map((tool, index) => {
                const Icon = tool.icon;

                return (
                  <motion.span
                    key={tool.label}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -4, scale: 1.04 }}
                    className="inline-flex items-center gap-2 rounded-full border border-[#E5E8DE] bg-white px-4 py-2 text-xs font-medium text-[#526158] shadow-sm"
                  >
                    <span className={`flex h-6 w-6 items-center justify-center rounded-full ${tool.color}`}>
                      <Icon size={13} />
                    </span>
                    {tool.label}
                  </motion.span>
                );
              })}
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {creativeCards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardAnimation}
                whileHover={reduceMotion ? {} : { y: -8, scale: 1.015 }}
                className={`overflow-hidden rounded-2xl text-white shadow-sm transition-shadow hover:shadow-xl ${card.style}`}
              >
                <Link href={card.href} className="group block">
                  <div className="px-5 pt-5">
                    <h3 className="max-w-sm text-lg font-semibold leading-snug">
                      {card.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-xs leading-5 text-white/85">
                      {card.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#FFFDF7] px-3 py-2 text-[10px] font-bold text-[#26332E]">
                      {card.label}
                      <ArrowUpRight size={12} />
                    </span>
                  </div>

                  <CardArtwork type={card.type} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================
          CREATIVE SUITE
      ===================================== */}

      <section className="bg-[#F0F2EA] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <SectionHeading
            title="All the tools. All in one place."
            description="One workspace. Endless creative possibilities."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 md:grid-cols-2"
          >
            {suiteCards.map((card) => (
              <motion.div
                key={card.title}
                variants={cardAnimation}
                whileHover={reduceMotion ? {} : { y: -8, scale: 1.015 }}
                className={`overflow-hidden rounded-2xl text-white shadow-sm hover:shadow-xl ${card.style}`}
              >
                <Link href="/image" className="group block">
                  <div className="px-6 pt-6">
                    <h3 className="text-xl font-semibold">
                      {card.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/85">
                      {card.description}
                    </p>

                    <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#FFFDF7] px-4 py-2 text-xs font-semibold text-[#26332E]">
                      {card.label}
                      <ArrowUpRight size={14} />
                    </span>
                  </div>

                  <SuiteArtwork type={card.type} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* =====================================
          PRODUCT SHOWCASE
      ===================================== */}

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

      {/* =====================================
          TEMPLATES
      ===================================== */}

      <section className="overflow-hidden bg-[#FAF8F3] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <SectionHeading
            title="Templates for absolutely anything"
            description="Get inspired with creative starting points for your next project."
          />

          <Reveal>
            <div className="mb-7 flex flex-wrap justify-center gap-2">
              <span className="rounded-full bg-[#174B3A] px-4 py-2 text-xs font-semibold text-white">
                All templates
              </span>

              <span className="rounded-full border border-[#DDE3D9] bg-white px-4 py-2 text-xs font-medium text-[#526158]">
                Business templates
              </span>

              <span className="rounded-full border border-[#DDE3D9] bg-white px-4 py-2 text-xs font-medium text-[#526158]">
                Social media
              </span>
            </div>
          </Reveal>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="scrollbar-hide flex gap-4 overflow-x-auto px-5 pb-5 sm:px-8"
        >
          {templates.map((item, index) => (
            <TemplateCard
              key={`${item.title}-${index}`}
              item={item}
            />
          ))}
        </motion.div>

        <Reveal className="mt-5 text-center">
          <Link
            href="/image"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#438B79] transition hover:text-[#174B3A]"
          >
            Explore all templates
            <MoveRight size={16} />
          </Link>
        </Reveal>
      </section>

      {/* =====================================
          ECOSYSTEM
      ===================================== */}

      <section className="bg-[#F0F2EA] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">

          <SectionHeading
            title="Unlock your creative ecosystem"
            description="Discover a complete creative experience built around your ideas."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-4 md:grid-cols-2"
          >
            {ecosystemCards.map((card) => {
              const Icon = card.icon;

              return (
                <motion.div
                  key={card.title}
                  variants={cardAnimation}
                  whileHover={reduceMotion ? {} : { y: -8, scale: 1.015 }}
                  className={`overflow-hidden rounded-2xl text-white shadow-sm hover:shadow-xl ${card.style}`}
                >
                  <Link href="/image" className="group block">
                    <div className="px-5 pt-5">
                      <h3 className="max-w-sm text-base font-semibold leading-snug sm:text-lg">
                        {card.title}
                      </h3>

                      <span className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#FFFDF7] px-3 py-2 text-[10px] font-bold text-[#26332E]">
                        {card.label}
                        <ArrowUpRight size={12} />
                      </span>
                    </div>

                    <EcosystemArtwork
                      type={card.type}
                      Icon={Icon}
                    />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* =====================================
          CALL TO ACTION
      ===================================== */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#174B3A] via-[#438B79] to-[#D49B50] px-5 py-20 text-center sm:py-28">

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.25, 0.1],
                }
          }
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-[#F2B84B] blur-3xl"
        />

        <motion.div
          animate={
            reduceMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.2, 0.1],
                }
          }
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-white blur-3xl"
        />

        <Reveal className="relative mx-auto max-w-3xl">
          <motion.div
            animate={
              reduceMotion
                ? {}
                : {
                    rotate: [0, 10, -10, 0],
                    y: [0, -5, 0],
                  }
            }
            transition={{ duration: 5, repeat: Infinity }}
            className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/30 bg-white/15 text-[#FFFDF7] backdrop-blur-sm"
          >
            <Stars size={30} />
          </motion.div>

          <h2 className="text-3xl font-semibold tracking-tight text-[#FFFDF7] sm:text-5xl">
            Start creating with
            <span className="mt-2 block font-bold italic text-[#F2D69C]">
              PixelForge.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/85 sm:text-base">
            Bring your imagination to life. Explore powerful tools,
            create beautiful designs, and make every idea count.
          </p>

          <motion.div
            whileHover={{ scale: 1.07, y: -3 }}
            whileTap={{ scale: 0.96 }}
            className="mt-8 inline-block"
          >
            <Link
              href="/download"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#F2B84B] px-7 py-3 text-sm font-bold text-[#26332E] shadow-lg transition hover:bg-[#FFD078]"
            >
              Get started for free
              <ArrowUpRight size={17} />
            </Link>
          </motion.div>
        </Reveal>
      </section>

    </main>
  );
}
