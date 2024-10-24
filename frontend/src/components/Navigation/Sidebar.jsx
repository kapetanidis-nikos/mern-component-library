import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ClipboardType,
  ChevronDown,
  StickyNote,
  Framer,
  MapPinned,
  ChevronsRight,
} from "lucide-react";

const sideBarItems = [
  { title: "Forms", icon: ClipboardType, link: "forms" },
  { title: "Notes App", icon: StickyNote, link: "notes-app" },
  { title: "Maps", icon: MapPinned, link: "maps" },
  { title: "Framer Motion", icon: Framer, link: "framer-motion" },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
      <TitleSection open={open} />

      <div className="space-y-1">
        {sideBarItems.map((sideBarItem) => {
          return (
            <Option
              key={sideBarItem.title}
              Icon={sideBarItem.icon}
              title={sideBarItem.title}
              selected={selected}
              setSelected={setSelected}
              open={open}
              link={sideBarItem.link}
            />
          );
        })}
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, link, selected, setSelected, open }) => {
  return (
    <div className="flex group">
      <Link to={`/${link}`} className="w-full">
        <motion.button
          layout
          onClick={() => setSelected(title)}
          className={`relative flex h-10 w-full items-center rounded-md transition-colors ${
            selected === title
              ? "bg-indigo-100 text-indigo-800"
              : "text-slate-500 hover:bg-slate-100"
          }`}
        >
          <motion.div
            layout
            className="grid h-full w-10 place-content-center text-lg"
          >
            <Icon />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-xs font-medium"
            >
              {title}
            </motion.span>
          )}
        </motion.button>
      </Link>

      {!open && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-3
          bg-indigo-100 text-indigo-800 
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {title}
        </div>
      )}
    </div>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
          <Logo />
          {open && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="block text-xs font-semibold">TomIsLoading</span>
              <span className="block text-xs text-slate-500">Pro Plan</span>
            </motion.div>
          )}
        </div>
        {open && <ChevronDown className="mr-2" />}
      </div>
    </div>
  );
};

const Logo = () => {
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute bottom-0 left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <ChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

export default Sidebar;
