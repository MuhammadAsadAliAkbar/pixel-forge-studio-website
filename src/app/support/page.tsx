"use client";

import Link from "next/link";
import {
  AnimatePresence,
  motion,
  MotionConfig,
  type Variants,
} from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  Monitor,
  KeyRound,
  Bug,
  Lightbulb,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Headphones,
  Send,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";

const green = "bg-gradient-to-br from-[#1b5a45] to-[#3f8c70] text-white";
const coral = "bg-gradient-to-br from-[#ec6a4b] to-[#f4a45f] text-white";
const amber = "bg-gradient-to-br from-[#f0a43a] to-[#f6c565] text-[#1f2a24]";
const sage = "bg-gradient-to-br from-[#5fa085] to-[#9fcdb6] text-white";

const supportItems = [
  {
    title: "Help Center",
    description: "Find helpful articles, FAQs, and troubleshooting guides.",
    icon: BookOpen,
    tileClass: green,
  },
  {
    title: "Contact Support",
    description: "Get in touch with our team for assistance and guidance.",
    icon: MessageCircle,
    tileClass: coral,
  },
  {
    title: "System Requirements",
    description:
      "Check whether your computer meets the installation requirements.",
    icon: Monitor,
    tileClass: amber,
  },
  {
    title: "License & Activation",
    description:
      "Get help managing licenses, activating devices, and recovering keys.",
    icon: KeyRound,
    tileClass: sage,
  },
  {
    title: "Bug Reports",
    description: "Report problems and help us improve the software experience.",
    icon: Bug,
    tileClass: coral,
  },
  {
    title: "Feature Requests",
    description:
      "Share your ideas and suggest improvements for future updates.",
    icon: Lightbulb,
    tileClass: green,
  },
];

const inputClass =
  "w-full rounded-xl border border-[#e3dfd2] bg-[#fbfaf6] px-4 py-3 text-sm text-[#1f2a24] outline-none transition placeholder:text-[#9aa59e] focus:border-[#256b53] focus:bg-white focus:ring-2 focus:ring-[#256b53]/15";

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

const formStagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const fieldIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
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

export default function SupportPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Demo form: connect your API or email service here.
    setSubmitted(true);
    e.currentTarget.reset();
  };

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
              We’re here to help
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl"
            >
              Support
              <span className="mt-2 block font-medium text-[#f4c76a]">
                Center
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/80 sm:text-base sm:leading-8"
            >
              Need assistance? Explore our resources, find answers to common
              questions, or contact our support team.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
            >
              <Pressable className="inline-block">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#f4b740] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition-colors hover:bg-[#efa72a]"
                >
                  Contact Us
                  <ArrowUpRight size={16} />
                </a>
              </Pressable>
              <Pressable className="inline-block">
                <Link
                  href="/resources"
                  className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Browse resources
                </Link>
              </Pressable>
            </motion.div>
          </motion.div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {/* Support Cards */}
          <section aria-label="Support resources">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className="mx-auto mb-12 max-w-2xl text-center"
            >
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                How can we help?
              </h2>
              <p className="mt-3 text-sm text-[#5f6d65] sm:text-base">
                Choose a support category to get started.
              </p>
            </motion.div>

            <motion.div
              variants={gridStagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {supportItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    variants={popIn}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-shadow duration-300 hover:shadow-xl hover:shadow-[#1f5f4a]/10 sm:p-7"
                  >
                    <motion.div
                      whileHover={{ rotate: -8, scale: 1.1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 14,
                      }}
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-md shadow-black/10 ${item.tileClass}`}
                    >
                      <Icon size={25} strokeWidth={1.8} />
                    </motion.div>

                    <h3 className="mt-5 text-lg font-semibold text-[#1f2a24]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-[#5f6d65]">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#256b53]">
                      Learn more
                      <ArrowRight
                        size={16}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </div>
                  </motion.article>
                );
              })}
            </motion.div>
          </section>

          {/* Contact Section */}
          <section
            id="contact"
            className="mx-auto mt-20 max-w-3xl scroll-mt-24"
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease }}
              className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5"
            >
              {/* Form Header */}
              <div className="relative overflow-hidden bg-gradient-to-br from-[#1b5a45] via-[#256b53] to-[#3f8c70] p-6 text-white sm:p-9">
                <motion.div
                  aria-hidden="true"
                  animate={{ x: [0, -20, 0], y: [0, 15, 0] }}
                  transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute -right-14 -top-14 h-48 w-48 rounded-full bg-white/15 blur-2xl"
                />
                <div className="relative flex items-start gap-4">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur"
                  >
                    <Headphones size={24} />
                  </motion.div>

                  <div>
                    <h2 className="text-2xl font-bold">Contact Us</h2>
                    <p className="mt-2 text-sm leading-6 text-white/85">
                      Have a question or need assistance? Send us a message and
                      our team will get back to you.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 sm:p-9">
                {/* Success Message */}
                <AnimatePresence initial={false}>
                  {submitted && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: -12, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.97 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="mb-6 flex items-center gap-3 rounded-xl border border-[#b9dcc9] bg-[#e3f1ea] p-4 text-sm text-[#1b5a45]"
                    >
                      <motion.span
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.15,
                          type: "spring",
                          stiffness: 300,
                          damping: 12,
                        }}
                        className="inline-flex"
                      >
                        <CheckCircle2 size={20} />
                      </motion.span>
                      Thank you! Your demo form was submitted successfully.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Contact Form */}
                <motion.form
                  onSubmit={handleSubmit}
                  variants={formStagger}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.15 }}
                  className="space-y-5"
                >
                  <motion.div
                    variants={fieldIn}
                    className="grid gap-5 sm:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[#1f2a24]"
                      >
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#1f2a24]"
                      >
                        Email Address
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                        className={inputClass}
                      />
                    </div>
                  </motion.div>

                  <motion.div variants={fieldIn}>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-medium text-[#1f2a24]"
                    >
                      Subject
                    </label>

                    <select
                      id="subject"
                      name="subject"
                      required
                      defaultValue=""
                      className={inputClass}
                    >
                      <option value="" disabled>
                        Select a subject
                      </option>
                      <option value="technical-support">
                        Technical Support
                      </option>
                      <option value="licensing">Licensing Question</option>
                      <option value="bug-report">Bug Report</option>
                      <option value="feature-request">Feature Request</option>
                      <option value="other">Other</option>
                    </select>
                  </motion.div>

                  <motion.div variants={fieldIn}>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-[#1f2a24]"
                    >
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Describe your issue or question..."
                      className={`${inputClass} resize-none`}
                    />
                  </motion.div>

                  <motion.button
                    variants={fieldIn}
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f4b740] px-6 py-3.5 text-sm font-semibold text-[#1f2a24] transition-colors hover:bg-[#efa72a] focus:outline-none focus:ring-2 focus:ring-[#f4b740] focus:ring-offset-2"
                  >
                    <Send
                      size={17}
                      className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-1"
                    />
                    Send Message
                  </motion.button>
                </motion.form>
              </div>
            </motion.div>
          </section>

          {/* Email Support */}
          <motion.section
            initial={{ opacity: 0, y: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease }}
            className="relative mt-12 overflow-hidden rounded-3xl bg-gradient-to-r from-[#1b5a45] via-[#2f7d63] to-[#d9a050] p-8 text-center text-white sm:p-10"
          >
            <motion.div
              aria-hidden="true"
              animate={{ x: [0, 30, 0], y: [0, 15, 0] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 rounded-full bg-white/10 blur-2xl"
            />

            <motion.div
              animate={{ rotate: [0, -8, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 ring-1 ring-white/30 backdrop-blur"
            >
              <Mail size={23} />
            </motion.div>

            <h2 className="relative mt-4 text-xl font-bold sm:text-2xl">
              Prefer Email?
            </h2>

            <p className="relative mt-2 text-sm text-white/85">
              You can also contact our support team directly.
            </p>

            <Pressable className="relative mt-5 inline-block">
              <a
                href="mailto:support@pixelforge.studio"
                className="inline-flex items-center gap-2 rounded-full bg-[#f4b740] px-6 py-3 text-sm font-semibold text-[#1f2a24] transition-colors hover:bg-[#efa72a]"
              >
                support@pixelforge.studio
                <ArrowRight size={16} />
              </a>
            </Pressable>
          </motion.section>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-12 border-t border-[#e3dfd2] pt-7 text-center text-xs text-[#7a867f]"
          >
            <p>
              Pixel Forge &amp; Vector Studio · We are here to help you create.
            </p>

            <Link
              href="/"
              className="mt-3 inline-block font-medium text-[#256b53] hover:text-[#1b5a45]"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </main>
    </MotionConfig>
  );
}
