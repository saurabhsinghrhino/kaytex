import { useRef, useState } from 'react';
import { useGsap } from '../hooks/useGsap';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Reusing assets for the 6 production stages
import stageImg1 from '../assets/hero.png';
import stageImg2 from '../assets/about_main.jpg';
import stageImg3 from '../assets/about_detail.jpg';
import stageImg4 from '../assets/cat_jacket.jpg';

export const Process = () => {
  const containerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    {
      num: '01',
      title: 'CONCEPT',
      desc: 'Collaborating closely with designers to map out structured silhouettes, functional pockets, and overall architectural guidelines.',
      img: stageImg1
    },
    {
      num: '02',
      title: 'FABRIC SOURCING',
      desc: 'Sourcing heavy-gauge cotton loops, high-performance nylon, and fine merino wool from our global network of sustainable textile mills.',
      img: stageImg2
    },
    {
      num: '03',
      title: 'PATTERN MAKING',
      desc: 'Precision CAD pattern drafting followed by hand-cut paper designs, optimizing drape, range of motion, and fabric efficiency.',
      img: stageImg3
    },
    {
      num: '04',
      title: 'BULK PRODUCTION',
      desc: 'Our specialized garment craftsmen execute construction using high-end chain stitch and flatlock machinery for robust seams.',
      img: stageImg4
    },
    {
      num: '05',
      title: 'QUALITY CONTROL',
      desc: 'A full-spectrum physical examination where every garment is checked for measurements, trim compliance, and stitching integrity.',
      img: stageImg1
    },
    {
      num: '06',
      title: 'DELIVERY',
      desc: 'Custom-branded tissue wrapping, ironed packaging, and reliable door-to-door freight forwarding to global markets.',
      img: stageImg2
    }
  ];

  useGsap(() => {
    // Only pin on desktop (screen width >= 1024px)
    if (window.innerWidth < 1024) return;

    const sections = containerRef.current.querySelectorAll('.stage-text-block');
    
    // Pin the left panel while the right scroll takes place
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: 'top top',
      end: 'bottom bottom',
      pin: leftPanelRef.current,
      scrub: true,
    });

    // Detect which section is currently in viewport center and update active state
    sections.forEach((section, index) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 50%',
        end: 'bottom 50%',
        onEnter: () => setActiveStage(index),
        onEnterBack: () => setActiveStage(index),
      });
    });
  }, [], containerRef);

  return (
    <section
      ref={containerRef}
      id="process"
      className="relative w-full bg-[#0a0a0a] text-[#faf9f6] px-6 md:px-12 py-24 lg:py-0 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Panel: Pinned Visual Frame (5 cols) */}
          <div
            ref={leftPanelRef}
            className="hidden lg:flex lg:col-span-5 h-screen flex-col justify-center relative py-12"
          >
            <div className="relative w-full aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
              {stages.map((stage, idx) => (
                <img
                  key={stage.num}
                  src={stage.img}
                  alt={stage.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    activeStage === idx 
                      ? 'opacity-80 scale-100' 
                      : 'opacity-0 scale-105 pointer-events-none'
                  }`}
                />
              ))}
              {/* Overlay number indicator */}
              <div className="absolute top-8 left-8 mix-blend-difference z-10">
                <span className="font-serif text-6xl font-light text-white leading-none">
                  {stages[activeStage].num}
                </span>
              </div>
            </div>
            {/* Visual Progress Bar */}
            <div className="mt-8 h-[2px] w-full bg-white/10 relative overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-[#d4c5b9] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                style={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
              />
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">Stage Progress</span>
              <span className="text-[10px] uppercase tracking-widest text-[#d4c5b9] font-mono font-medium">
                {activeStage + 1} / {stages.length}
              </span>
            </div>
          </div>

          {/* Right Panel: Content Timeline Blocks (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-center lg:py-[35vh]">
            {/* Mobile Header (hidden on desktop) */}
            <div className="block lg:hidden mb-12">
              <p className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-3 font-mono">
                THE WAY WE WORK
              </p>
              <h2 className="font-serif text-3xl font-light uppercase tracking-tight text-white leading-none">
                PRODUCTION <span className="italic text-[#d4c5b9]">PROCESS.</span>
              </h2>
            </div>

            {stages.map((stage, idx) => (
              <div
                key={stage.num}
                className={`stage-text-block flex flex-col justify-center py-16 lg:py-24 border-b border-white/5 lg:border-none transition-opacity duration-500 ${
                  activeStage === idx ? 'lg:opacity-100' : 'lg:opacity-20'
                }`}
              >
                {/* Mobile graphic view (hidden on desktop) */}
                <div className="lg:hidden w-full aspect-[16/10] overflow-hidden bg-zinc-900 mb-6 border border-white/5">
                  <img
                    src={stage.img}
                    alt={stage.title}
                    className="w-full h-full object-cover opacity-60"
                  />
                </div>

                <div className="flex items-center gap-6 mb-4 lg:mb-6">
                  <span className="font-mono text-sm text-[#d4c5b9] tracking-wider border border-[#d4c5b9]/30 px-3 py-1">
                    STAGE {stage.num}
                  </span>
                  <h3 className="font-serif text-2xl md:text-3xl font-light uppercase tracking-wider text-white">
                    {stage.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base font-light tracking-wide text-white/60 leading-relaxed max-w-xl">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Process;
