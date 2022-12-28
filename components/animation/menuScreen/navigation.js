import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./menuItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    zIndex: 15,
    
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const nav = [
  { name: "About", link: "#about" },
  { name: "Speaker", link: "#speaker" },
  { name: "Sponsers", link: "#sponsers" },
  { name: "Themes", link: "#themes" },
  { name: "Schedule", link: "#schedule" },
  { name: "Tracks", link: "#tracks" },
  { name: "FAQ", link: "#faq" },
];

export const Navigation = ({ toggle }) => (
  <motion.ul className="unlist " variants={variants}>
    {nav.map((item) => (
      <MenuItem name={item.name} toggle={toggle} link={item.link} />
    ))}
  </motion.ul>
);
