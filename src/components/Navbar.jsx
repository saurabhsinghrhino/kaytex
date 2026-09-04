import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import logo from "../assets/kaytex-logo.png"; // Adjust path based on your folder structure

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile drawer open/close

  // Desktop Hover Dropdown States
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null); // 'design' | 'manufacturing' | null

  // Mobile Submenu Expandable States
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDesignOpen, setMobileDesignOpen] = useState(false);
  const [mobileMfgOpen, setMobileMfgOpen] = useState(false);

  const dropdownRef = useRef(null);
  const navRef = useRef(null);
  const openTimeoutRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const location = useLocation();

  const isServicesActive = location.pathname.startsWith("/services");
  const isDesignActive = location.pathname.startsWith(
    "/services/clothing-design",
  );
  const isMfgActive = location.pathname.startsWith(
    "/services/clothing-manufacturing",
  );

  // Track scrolling status
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle clicking outside the desktop dropdown to close it
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsServicesOpen(false);
        setHoveredService(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // Close dropdown on Escape keypress
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsServicesOpen(false);
        setHoveredService(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Desktop Hover Handlers with Delays
  const handleMouseEnterServices = () => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    openTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(true);
    }, 120); // 120ms opening delay to prevent flickering
  };

  const handleMouseLeaveServices = () => {
    if (openTimeoutRef.current) clearTimeout(openTimeoutRef.current);
    closeTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
      setHoveredService(null);
    }, 200); // 200ms close delay for smooth cursor transitions
  };

  const handleMobileLinkSelect = () => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileDesignOpen(false);
    setMobileMfgOpen(false);
  };

  // Reusable Data-Driven Services Structure
  const servicesData = [
    {
      key: "design",
      num: "01",
      title: "Clothing Design Services",
      desc: "Turn ideas into production-ready garments.",
      path: "/services/clothing-design",
      children: [
        {
          title: "Tech Pack Development",
          desc: "Detailed technical documentation that helps translate your garment concept into clear production requirements.",
          path: "/services/clothing-design/tech-pack-development",
        },
        {
          title: "3D Garments",
          desc: "Visualize garment concepts in 3D to better understand design, proportions, details, and presentation before production.",
          path: "/services/clothing-design/3d-garments",
        },
      ],
    },
    {
      key: "sourcing",
      num: "02",
      title: "Fabric Sourcing",
      desc: "Find the right materials for your product.",
      path: "/services/fabric-sourcing",
    },
    {
      key: "customisation",
      num: "03",
      title: "Fabric Customisation",
      desc: "Create materials tailored to your vision.",
      path: "/services/fabric-customisation",
    },
    {
      key: "manufacturing",
      num: "04",
      title: "Clothing Manufacturing",
      desc: "Bring your approved designs to life.",
      path: "/services/clothing-manufacturing",
      children: [
        {
          title: "Women's Clothing Manufacturing",
          desc: "Quality-focused manufacturing solutions for women's apparel across a range of garment styles and requirements.",
          path: "/services/clothing-manufacturing/womens-clothing",
        },
        {
          title: "Loungewear Manufacturing",
          desc: "Comfort-focused loungewear production combining thoughtful construction, suitable materials, and consistent finishing.",
          path: "/services/clothing-manufacturing/loungewear",
        },
      ],
    },
  ];

  const activeServiceData = servicesData.find((s) => s.key === hoveredService);
  const showSubmenu = activeServiceData && activeServiceData.children;

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-40 w-full transition-all duration-500 ease-out py-4 md:py-5 ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-3 md:py-4"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-12">
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false);
            setIsServicesOpen(false);
          }}
          className="flex items-center hover:opacity-85 transition-opacity cursor-pointer focus:outline-none"
          aria-label="KAYTEX-EXPORTERS Home"
        >
          <img
            src={logo}
            alt="KAYTEX-EXPORTERS"
            className="h-10 sm:h-12 md:h-14 lg:h-[80px] w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {/* Home */}
          <NavLink
            to="/"
            onClick={() => setIsServicesOpen(false)}
            className={({ isActive }) =>
              `text-xs uppercase font-bold tracking-[0.2em] transition-colors duration-300 relative py-1 group cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white/70 hover:text-white"
              }`
            }
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            onClick={() => setIsServicesOpen(false)}
            className={({ isActive }) =>
              `text-xs uppercase font-bold tracking-[0.2em] transition-colors duration-300 relative py-1 group cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white/70 hover:text-white"
              }`
            }
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </NavLink>

          {/* Services (Dropdown Trigger Wrapper) */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <Link
              to="/services"
              className={`text-xs uppercase font-bold tracking-[0.2em] flex items-center relative py-1 group cursor-pointer focus:outline-none transition-colors duration-350 ${
                isServicesActive
                  ? "text-[#d4c5b9]"
                  : "text-white/70 hover:text-white"
              }`}
              aria-expanded={isServicesOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 ml-1.5 transition-transform duration-300 ${
                  isServicesOpen ? "rotate-180 text-[#d4c5b9]" : "text-white/70"
                }`}
              />
            </Link>

            {/* Desktop Mega Dropdown System Container (Flex) */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-5 flex transition-all duration-300 origin-top shadow-2xl z-50 ${
                isServicesOpen
                  ? "opacity-100 translate-y-0 scale-100 pointer-events-auto"
                  : "opacity-0 -translate-y-2 scale-[0.98] pointer-events-none"
              }`}
            >
              {/* Primary Panel */}
              <div className="w-[340px] bg-black border border-black/10 p-6 text-left shrink-0 rounded">
                <div className="mb-6 border-b border-black/10 pb-3">
                  <span className="text-[9px] uppercase tracking-[0.3em] text-[#D5C5B8] font-mono">
                    OUR SERVICES
                  </span>
                  <p className="text-[10px] text-zinc-700 font-light mt-1 tracking-wide">
                    End-to-end apparel solutions.
                  </p>
                </div>

                <div className="flex flex-col space-y-4 transition-all duration-200">
                  {servicesData.map((item) => {
                    const isItemActive =
                      location.pathname === item.path ||
                      location.pathname.startsWith(item.path + "/");
                    return (
                      <div
                        key={item.num}
                        onMouseEnter={() => {
                          if (item.children) setHoveredService(item.key);
                          else setHoveredService(null);
                        }}
                        className="group transition-all duration-300"
                      >
                        <Link
                          to={item.path}
                          onClick={() => {
                            setIsServicesOpen(false);
                            setHoveredService(null);
                          }}
                          className={`flex items-start space-x-3 p-2.5 -m-2 rounded transition-colors duration-300  ${
                            isItemActive ? "bg-black/5" : "hover:bg-[#D5C5B8]"
                          }`}
                        >
                          <span className="font-serif text-xs text-[#D5C5B8] mt-0.5 shrink-0 group-hover:text-black  transition-colors duration-200">
                            {item.num}
                          </span>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h4
                                className={`font-serif text-xs transition-colors duration-200  ${
                                  isItemActive
                                    ? "text-[#D5C5B8] font-semibold"
                                    : "text-[#D5C5B8] group-hover:text-black font-normal"
                                }`}
                              >
                                {item.title}
                              </h4>
                              <ArrowRight className="w-3 h-3 text-black/40 group-hover:text-black group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
                            </div>
                            <p className="text-[10px] text-zinc-600 font-light mt-1 leading-relaxed truncate">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Secondary Submenu Panel with hover bridge padding */}
              {showSubmenu && (
                <div className="w-[300px] pl-4 text-left">
                  <div className="bg-black border border-black/10 p-6 h-full shadow-2xl flex flex-col justify-start rounded">
                    <div className="mb-6 border-b border-black/10 pb-3">
                      <span className="text-[9px] uppercase tracking-[0.3em] text-[#D5C5B8] font-mono">
                        {activeServiceData.key === "design"
                          ? "DESIGN SERVICES"
                          : "MANUFACTURING"}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 gap-4">
                      {activeServiceData.children.map((sub) => {
                        const isSubActive = location.pathname === sub.path;
                        return (
                          <Link
                            key={sub.title}
                            to={sub.path}
                            onClick={() => {
                              setIsServicesOpen(false);
                              setHoveredService(null);
                            }}
                            className="group flex flex-col p-2 -m-2 rounded hover:bg-[#D5C5B8] gap-2.5 text-black transition-colors duration-300"
                          >
                            <div className="flex items-center justify-between ">
                              <span
                                className={`text-xs transition-colors duration-200 ${
                                  isSubActive
                                    ? "text-[#D5C5B8] font-semibold"
                                    : "text-[#D5C5B8] group-hover:text-black font-normal"
                                }`}
                              >
                                {sub.title}
                              </span>
                              <ArrowRight className="w-3 h-3 text-black/40 group-hover:text-[#000000] group-hover:translate-x-0.5 transition-all duration-200" />
                            </div>
                            <p className="text-[9px] text-zinc-600 font-light mt-1 leading-relaxed">
                              {sub.desc}
                            </p>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* FAQ */}
          <NavLink
            to="/faq"
            onClick={() => setIsServicesOpen(false)}
            className={({ isActive }) =>
              `text-xs uppercase font-bold tracking-[0.2em] transition-colors duration-300 relative py-1 group cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white/70 hover:text-white"
              }`
            }
          >
            FAQ
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/contact"
            onClick={() => setIsServicesOpen(false)}
            className={({ isActive }) =>
              `text-xs uppercase font-bold tracking-[0.2em] transition-colors duration-300 relative py-1 group cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white/70 hover:text-white"
              }`
            }
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </NavLink>

          {/* Dedicated Inquire Button */}
          <Link
            to="/inquire"
            onClick={() => setIsServicesOpen(false)}
            className="border cursor-pointer font-bold border-white/20 bg-white/5 px-6 py-2.5 text-xs uppercase tracking-[0.25em] text-white hover:bg-[#D4C5B9] hover:text-black hover:border-white transition-all duration-500"
          >
            Inquire
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex md:hidden text-white hover:text-white/80 transition-colors p-1 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[68px] sm:top-[76px] z-30 flex h-[calc(100vh-68px)] w-full flex-col bg-[#0a0a0a] px-6 py-12 transition-all duration-500 md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-8 overflow-y-auto pb-16">
          {/* Home */}
          <NavLink
            to="/"
            onClick={handleMobileLinkSelect}
            className={({ isActive }) =>
              `text-left font-serif text-2xl font-light uppercase tracking-widest cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white hover:text-white/70"
              }`
            }
          >
            Home
          </NavLink>

          {/* About */}
          <NavLink
            to="/about"
            onClick={handleMobileLinkSelect}
            className={({ isActive }) =>
              `text-left font-serif text-2xl font-light uppercase tracking-widest cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white hover:text-white/70"
              }`
            }
          >
            About
          </NavLink>

          {/* Services Mobile Collapse Accordion */}
          <div className="flex flex-col">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between text-left font-serif text-2xl font-light uppercase tracking-widest cursor-pointer focus:outline-none ${
                isServicesActive
                  ? "text-[#d4c5b9]"
                  : "text-white hover:text-white/70"
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-6 h-6 transition-transform duration-300 ${
                  mobileServicesOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Level 1 Collapse List */}
            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden ${
                mobileServicesOpen
                  ? "max-h-[800px] mt-4 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col space-y-6 pl-4 border-l border-[#2a2a2a]">
                {/* 1. Design Services Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileDesignOpen(!mobileDesignOpen)}
                    className={`flex items-center justify-between text-left text-sm uppercase tracking-[0.15em] font-light cursor-pointer focus:outline-none ${
                      isDesignActive
                        ? "text-[#d4c5b9]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span>Clothing Design Services</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileDesignOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {/* Level 2 Submenu */}
                  <div
                    className={`transition-all duration-350 ease-in-out overflow-hidden ${
                      mobileDesignOpen
                        ? "max-h-[250px] mt-3 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col space-y-3 pl-4 border-l border-[#1a1a1a]">
                      <NavLink
                        to="/services/clothing-design"
                        onClick={handleMobileLinkSelect}
                        className="text-left text-xs font-light text-white/50 hover:text-white tracking-wider"
                      >
                        Overview
                      </NavLink>
                      <NavLink
                        to="/services/clothing-design/tech-pack-development"
                        onClick={handleMobileLinkSelect}
                        className="text-left text-xs font-light text-white/50 hover:text-white tracking-wider"
                      >
                        Tech Pack Development
                      </NavLink>
                      <NavLink
                        to="/services/clothing-design/3d-garments"
                        onClick={handleMobileLinkSelect}
                        className="text-left text-xs font-light text-white/50 hover:text-white tracking-wider"
                      >
                        3D Garments
                      </NavLink>
                    </div>
                  </div>
                </div>

                {/* 2. Fabric Sourcing */}
                <NavLink
                  to="/services/fabric-sourcing"
                  onClick={handleMobileLinkSelect}
                  className={({ isActive }) =>
                    `text-left text-sm uppercase tracking-[0.15em] font-light cursor-pointer ${
                      isActive
                        ? "text-[#d4c5b9]"
                        : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  Fabric Sourcing
                </NavLink>

                {/* 3. Fabric Customisation */}
                <NavLink
                  to="/services/fabric-customisation"
                  onClick={handleMobileLinkSelect}
                  className={({ isActive }) =>
                    `text-left text-sm uppercase tracking-[0.15em] font-light cursor-pointer ${
                      isActive
                        ? "text-[#d4c5b9]"
                        : "text-white/60 hover:text-white"
                    }`
                  }
                >
                  Fabric Customisation
                </NavLink>

                {/* 4. Manufacturing Accordion */}
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileMfgOpen(!mobileMfgOpen)}
                    className={`flex items-center justify-between text-left text-sm uppercase tracking-[0.15em] font-light cursor-pointer focus:outline-none ${
                      isMfgActive
                        ? "text-[#d4c5b9]"
                        : "text-white/70 hover:text-white"
                    }`}
                  >
                    <span>Clothing Manufacturing</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        mobileMfgOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                  {/* Level 2 Submenu */}
                  <div
                    className={`transition-all duration-350 ease-in-out overflow-hidden ${
                      mobileMfgOpen
                        ? "max-h-[250px] mt-3 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="flex flex-col space-y-3 pl-4 border-l border-[#1a1a1a]">
                      <NavLink
                        to="/services/clothing-manufacturing"
                        onClick={handleMobileLinkSelect}
                        className="text-left text-xs font-light text-white/50 hover:text-white tracking-wider"
                      >
                        Overview
                      </NavLink>
                      <NavLink
                        to="/services/clothing-manufacturing/womens-clothing"
                        onClick={handleMobileLinkSelect}
                        className="text-left text-xs font-light text-white/50 hover:text-white tracking-wider"
                      >
                        Women's Manufacturing
                      </NavLink>
                      <NavLink
                        to="/services/clothing-manufacturing/loungewear"
                        onClick={handleMobileLinkSelect}
                        className="text-left text-xs font-light text-white/50 hover:text-white tracking-wider"
                      >
                        Loungewear Manufacturing
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <NavLink
            to="/faq"
            onClick={handleMobileLinkSelect}
            className={({ isActive }) =>
              `text-left font-serif text-2xl font-light uppercase tracking-widest cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white hover:text-white/70"
              }`
            }
          >
            FAQ
          </NavLink>

          {/* Contact */}
          <NavLink
            to="/inquire"
            onClick={handleMobileLinkSelect}
            className={({ isActive }) =>
              `text-left font-serif text-2xl font-light uppercase tracking-widest cursor-pointer ${
                isActive ? "text-[#d4c5b9]" : "text-white hover:text-white/70"
              }`
            }
          >
            Contact
          </NavLink>

          {/* Mobile Inquire CTA */}
          <Link
            to="/inquire"
            onClick={handleMobileLinkSelect}
            className="border cursor-pointer border-white/20 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.25em] text-white hover:bg-[#D4C5B9] hover:text-black hover:border-white transition-all duration-500 text-center mt-4"
          >
            Inquire
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
