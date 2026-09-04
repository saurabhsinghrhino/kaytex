import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useGsap } from "../hooks/useGsap";
import { useLenis } from "../hooks/useLenis";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";

// Using our custom generated assets
import tshirtImg from "../assets/hero.png";
import hoodieImg from "../assets/about_main.jpg";
import jacketImg from "../assets/cat_jacket.jpg";
import customImg from "../assets/about_detail.jpg";

export const Categories = () => {
  const navigate = useNavigate();
  const { scrollTo } = useLenis();
  const containerRef = useRef(null);

  const categories = [
    {
      id: "tshirts",
      name: "Jersey wear",
      desc: "Jersey Tops, Printed Hoodies, Garment Sweatshirts, Jersey Midi and Mini Dresses",
      img: "https://media.sezane.com/image/upload/c_fill,d_placeholder_dark.png,fl_progressive:semi,h_816,q_auto:best,w_582/c3othgbvh49oqhl3edyf.jpg?epik=dj0yJnU9SF96SjlYVVJkeWwzTVlmSWQtY2lmMXNFYlNRcVpPdWomcD0wJm49a1Z4YUt4NlkzV2cyd185d2c2Z2V2QSZ0PUFBQUFBR3FaSFhn",
      gridClass: "md:col-span-7 aspect-[4/3] md:aspect-[16/10]",
      imgClass: "object-cover w-full h-full",
    },
    {
      id: "hoodies",
      name: "High-End Garments",
      desc: "Beaded Dresses, Indian Artisan, Luxury wear.",
      img: "https://i.pinimg.com/736x/a0/e9/93/a0e9933db8fcdb8bc5575a4df1e700e4.jpg",
      gridClass: "md:col-span-5 aspect-[3/4]",
      imgClass: "object-cover w-full h-full",
    },
    {
      id: "custom",
      name: "Custom Manufacturing",
      desc: "Spring/Summer Dresses, Maxi Dresses, Mini Dresses, Poplin & Linen Day Dresses.",
      img: "https://images.unsplash.com/photo-1673201229733-69d19c5c4a87?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      gridClass:
        "md:col-span-7 aspect-[4/3] md:aspect-[16/10] md:-translate-y-12",
      imgClass: "object-cover w-full h-full",
    },
  ];

  useGsap(
    () => {
      // Fade-in grid items as they enter viewport
      const items = containerRef.current.querySelectorAll(".category-card");

      gsap.fromTo(
        items,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    [],
    containerRef,
  );

  return (
    <section
      ref={containerRef}
      id="collection"
      className="relative w-full bg-[#faf9f6] text-[#0a0a0a] px-6 md:px-12 py-24 md:py-36 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-6">
          <div>
            <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-black/50 mb-4 font-mono">
              CURATED COLLECTION
            </p>
            <h2 className="font-serif text-4xl sm:text-5xl font-light uppercase tracking-tight text-black leading-none">
              PRODUCT <span className="italic text-[#8c7a6b]">CATEGORIES.</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs uppercase tracking-widest text-black/60 font-light leading-relaxed">
            Powered by a robust supply network and modern in-house printing and
            manufacturing machinery, Kaytex Exporters delivers high-value,
            cost-effective garment manufacturing—on time, every time as per the
            tech packs which includes ladies western wear.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 md:pb-24">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`category-card group relative overflow-hidden bg-zinc-900 cursor-pointer ${cat.gridClass}`}
              onClick={() => navigate("/services")}
            >
              {/* Image Frame */}
              <div className="w-full h-full overflow-hidden relative">
                <img
                  src={cat.img}
                  alt={cat.name}
                  className={`${cat.imgClass} transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105 opacity-85 group-hover:opacity-95`}
                />
                {/* Visual Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 opacity-60 group-hover:opacity-40" />
              </div>

              {/* Title & Arrow overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-end justify-between text-white z-10">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl uppercase tracking-wider font-light mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] md:text-xs tracking-[0.15em] text-white/60 font-light leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                {/* Circular hover button */}
                <div className="w-10 h-10 md:w-12 md:h-12 border border-white/20 rounded-full flex items-center justify-center bg-black/30 group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-500 transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
