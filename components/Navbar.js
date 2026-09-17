// import { useState } from "react";
// import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
// const links = [
//   ["About", "about"],
//   ["Experience", "experience"],
//   ["Expertise", "expertise"],
//   ["Publications", "publications"],
//   ["Contact", "contact"],
// ];
// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const go = (id) => {
//     setOpen(false);
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f0e8]/85 backdrop-blur-xl border-b hairline">
//       <div className="container-x h-[76px] flex items-center justify-between">
//         <button onClick={() => go("home")} className="text-left">
//           <div className="text-[11px] tracking-[.28em] uppercase text-muted">
//             Nazrul Islam Maksud
//           </div>
//           <div className="text-[10px] tracking-[.18em] uppercase mt-1">
//             Real Estate · Leadership
//           </div>
//         </button>
//         <nav className="hidden md:flex items-center gap-8 text-sm">
//           {links.map(([label, id]) => (
//             <button key={id} onClick={() => go(id)} className="nav-link">
//               {label}
//             </button>
//           ))}
//           <button
//             onClick={() => go("contact")}
//             className="ml-2 px-4 py-2.5 bg-ink text-paper rounded-full flex items-center gap-2"
//           >
//             Connect <FiArrowUpRight />
//           </button>
//         </nav>
//         <button className="md:hidden text-xl" onClick={() => setOpen(!open)}>
//           {open ? <FiX /> : <FiMenu />}
//         </button>
//       </div>
//       {open && (
//         <div className="md:hidden border-t hairline px-5 py-5 bg-paper">
//           <div className="flex flex-col gap-5 text-sm">
//             {links.map(([label, id]) => (
//               <button className="text-left" key={id} onClick={() => go(id)}>
//                 {label}
//               </button>
//             ))}
//           </div>
//         </div>
//       )}
//     </header>
//   );
// }

import { useState } from "react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

const links = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Expertise", "expertise"],
  ["Publications", "publications"],
  ["Contact", "contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const go = (id) => {
    setOpen(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#f4f0e8]/85 backdrop-blur-xl border-b hairline">
      <div className="container-x h-[76px] flex items-center justify-between">
        {/* Logo / Brand */}
        <button
          onClick={() => go("home")}
          className="text-left group"
          aria-label="Go to homepage"
        >
          <div className="text-[11px] tracking-[.28em] uppercase text-muted transition-colors duration-300 group-hover:text-[#b99145]">
            Nazrul Islam Maksud
          </div>

          <div className="text-[10px] tracking-[.18em] uppercase mt-1 text-ink">
            Real Estate · Leadership
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([label, id]) => (
            <button key={id} onClick={() => go(id)} className="nav-link">
              {label}
            </button>
          ))}

          {/* Connect Button */}
          <button
            onClick={() => go("contact")}
            className="
              ml-2
              px-4
              py-2.5
              bg-ink
              text-paper
              rounded-full
              flex
              items-center
              gap-2
              transition-all
              duration-300
              hover:bg-[#b99145]
              hover:text-[#11100e]
            "
          >
            Connect
            <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="
            md:hidden
            w-10
            h-10
            flex
            items-center
            justify-center
            text-xl
            text-ink
            transition-colors
            duration-300
            hover:text-[#b99145]
          "
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          md:hidden
          overflow-hidden
          border-t
          hairline
          bg-[#f4f0e8]/95
          backdrop-blur-xl
          transition-all
          duration-500
          ease-in-out
          ${
            open
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 border-transparent"
          }
        `}
      >
        <div className="px-5 py-6">
          <div className="flex flex-col">
            {links.map(([label, id], index) => (
              <button
                key={id}
                onClick={() => go(id)}
                className="
                  group
                  relative
                  text-left
                  py-4
                  text-sm
                  text-ink
                  border-b
                  hairline
                  transition-colors
                  duration-300
                  hover:text-[#b99145]
                "
              >
                <span>{label}</span>

                {/* Mobile Gold Hover Line */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-[-1px]
                    h-[1px]
                    w-0
                    bg-[#b99145]
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </button>
            ))}

            {/* Mobile Connect */}
            <button
              onClick={() => go("contact")}
              className="
                mt-6
                w-full
                px-5
                py-3.5
                bg-ink
                text-paper
                rounded-full
                flex
                items-center
                justify-center
                gap-2
                text-sm
                transition-all
                duration-300
                hover:bg-[#b99145]
                hover:text-[#11100e]
              "
            >
              Connect
              <FiArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
