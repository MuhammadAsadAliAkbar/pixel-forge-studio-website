import Link from "next/link";
import BackToTop from "./BackToTop"; // NEW: BackToTop.tsx ko isi folder me rakhein

async function getCurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Pixel Forge", href: "/image" },
      { label: "Vector Studio", href: "/image" },
      { label: "Motion Lab", href: "/video" },
      { label: "All Downloads", href: "/download" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Tutorials", href: "/resources" },
      { label: "Templates", href: "/resources" },
      { label: "Community", href: "/resources" },
      { label: "Help Center", href: "/support" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Us", href: "/support" },
      { label: "System Requirements", href: "/support" },
      { label: "License Info", href: "/support" },
      { label: "Free Trial", href: "/download" },
    ],
  },
];

// Apne real social profile links yahan daal dein
const socials = [
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11H3v-11zm6.5 0h3.8v1.5h.05c.53-1 1.82-1.85 3.75-1.85 4 0 4.75 2.6 4.75 6v5.35h-4v-4.75c0-1.15-.02-2.6-1.6-2.6-1.6 0-1.85 1.25-1.85 2.55v4.8h-4v-11z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9a5.5 5.5 0 0 1-5.5 5.5h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.25-3.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8zM10 15V9l5.2 3L10 15z",
  },
  {
    label: "X",
    href: "#",
    path: "M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3zm-1.08 16.15h1.7L7.4 4.75H5.58l11.09 14.4z",
  },
];

export default async function Footer() {
  const year = await getCurrentYear();

  return (
    <footer className="border-t border-gray-200 bg-white text-gray-900">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16">
          {/* Brand + Download */}
          <div className="space-y-6">
            <Link
          href="/"
          className="group relative z-10"
        >
          <span
          
            className="font-serif text-[23px] font-bold italic tracking-[-1.5px] text-black"
          >
            PixelForge
            <span className="text-white/70">.</span>
          </span>
        </Link>

            <p className="max-w-xs text-sm leading-6 text-gray-600">
              Professional creative software for designers, photographers, and
              artists.
            </p>

            <div>
              <p className="mb-3 text-sm font-semibold text-gray-900">
                Download PixelForge for free
              </p>
              <div className="flex gap-3">
                <Link
                  href="/download"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
                >
                  Windows
                </Link>
                <Link
                  href="/download"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-xs font-semibold text-gray-900 transition-colors hover:border-gray-400 hover:bg-gray-50"
                >
                  Mac
                </Link>
              </div>
            </div>
          </div>

          {/* Link Columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h3 className="mb-4 text-sm font-medium text-gray-500">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-gray-900 transition-colors duration-200 hover:text-violet-600 hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col gap-6 border-t border-gray-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-700">
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.8}
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
              </svg>
              English (US)
            </span>

            <ul className="flex items-center gap-4">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="text-gray-700 transition-colors hover:text-violet-600"
                  >
                    <svg
                      className="h-[18px] w-[18px]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d={s.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-600">
            <Link href="/support" className="transition-colors hover:text-gray-900">
              Privacy
            </Link>
            <Link href="/support" className="transition-colors hover:text-gray-900">
              Terms
            </Link>
            <Link href="/support" className="transition-colors hover:text-gray-900">
              Cookies
            </Link>
            <span>© {year} Pixel Forge Studio. All rights reserved.</span>
            {/* NEW: Back to top arrow */}
            <BackToTop />
          </div>
        </div>
      </div>
    </footer>
  );
}
