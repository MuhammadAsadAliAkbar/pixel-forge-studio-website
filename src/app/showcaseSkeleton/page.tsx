/* =========================================
   SHOWCASE IMAGE SKELETON
   (paste this block ABOVE `function ShowcaseRow`)
========================================= */

function ImageSkeleton({ dark }: { dark: boolean }) {
  const reduceMotion = useReducedMotion();

  const base = dark ? "bg-[#12151B]" : "bg-[#F7F6F2]";
  const centerBg = dark ? "bg-[#0B0D12]" : "bg-[#EEEFF3]";
  const canvas = dark ? "bg-white/[0.07]" : "bg-white shadow-md";
  const line = dark ? "border-white/5" : "border-black/5";
  const block = dark ? "bg-white/10" : "bg-black/[0.07]";
  const blockStrong = dark ? "bg-white/20" : "bg-black/[0.12]";
  const accent = "bg-[#F0785A]/60";
  const pulse = "motion-safe:animate-pulse";

  return (
    <div
      aria-hidden="true"
      className={`relative flex h-full w-full flex-col overflow-hidden ${base}`}
    >
      {/* Top bar */}
      <div
        className={`flex h-[7%] items-center gap-[1.2%] border-b px-[1.5%] ${line}`}
      >
        <div className={`aspect-square h-[60%] rounded-md ${accent} ${pulse}`} />
        <div className={`h-[55%] w-[9%] rounded-md ${block} ${pulse}`} />
        <div className={`h-[55%] w-[5%] rounded-md ${block} ${pulse}`} />
        <div className={`h-[55%] w-[6%] rounded-md ${accent} ${pulse}`} />
        <div className={`h-[55%] w-[7%] rounded-md ${block} ${pulse}`} />
        <div className="flex-1" />
        <div className={`h-[55%] w-[4%] rounded-md ${block} ${pulse}`} />
        <div className={`h-[55%] w-[4%] rounded-md ${block} ${pulse}`} />
        <div className={`h-[55%] w-[3%] rounded-md ${block} ${pulse}`} />
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Tool column */}
        <div
          className={`flex w-[5%] flex-col items-center gap-[4%] border-r py-[1.5%] ${line}`}
        >
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`aspect-square w-[58%] rounded-lg ${
                i === 0 ? accent : block
              } ${pulse}`}
            />
          ))}
        </div>

        {/* Canvas area */}
        <div
          className={`flex flex-1 items-center justify-center p-[3%] ${centerBg}`}
        >
          <div className={`h-[82%] w-[72%] rounded-sm ${canvas} ${pulse}`} />
        </div>

        {/* Right panel */}
        <div
          className={`flex w-[16%] flex-col gap-[3.5%] border-l p-[1.5%] ${line}`}
        >
          <div className="flex gap-[4%]">
            <div className={`h-[2.4vw] max-h-7 w-1/4 rounded-md ${accent} ${pulse}`} />
            <div className={`h-[2.4vw] max-h-7 w-1/4 rounded-md ${block} ${pulse}`} />
            <div className={`h-[2.4vw] max-h-7 w-1/4 rounded-md ${block} ${pulse}`} />
          </div>

          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-[6%]">
              <div className={`h-[1.1vw] max-h-3 w-1/3 rounded ${blockStrong} ${pulse}`} />
              <div className={`h-[2.6vw] max-h-8 w-full rounded-lg ${block} ${pulse}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Shimmer sweep */}
      {!reduceMotion && (
        <motion.div
          initial={{ x: "-120%" }}
          animate={{ x: "420%" }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatDelay: 0.4,
          }}
          className={`pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent to-transparent ${
            dark ? "via-white/10" : "via-white/70"
          }`}
        />
      )}
    </div>
  );
}

function ShowcaseImage({
  src,
  alt,
  dark,
}: {
  src: StaticImageData;
  alt: string;
  dark: boolean;
}) {
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // Handles images that finished loading before hydration (cached)
  useEffect(() => {
    const img = imgRef.current;
    if (img?.complete && img.naturalWidth > 0) setLoaded(true);
  }, []);

  return (
    <div className="relative">
      <Image
        ref={imgRef}
        src={src}
        alt={alt}
        width={1919}
        height={945}
        sizes="(min-width: 1024px) 58vw, 100vw"
        onLoad={() => setLoaded(true)}
        className={`h-auto w-full transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />

      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="skeleton"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="absolute inset-0"
          >
            <ImageSkeleton dark={dark} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
