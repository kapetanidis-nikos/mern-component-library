import { motion } from "framer-motion";
import * as React from "react";

export default function DraggableButton() {
  return (
    <motion.button
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer"
    >
      Drag Me
    </motion.button>
  );
}
