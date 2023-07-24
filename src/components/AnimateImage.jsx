"use client";
import Image from "next/image";
import bg2 from "../../public/bgm.png";
import { motion } from "framer-motion";

const image = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default function AnimatedImage() {
  return (
    <motion.div
      className="w-1/2"
      variants={image}
      initial="initial"
      animate="animate"
    >
      <Image src={bg2} className="w-full" />
    </motion.div>
  );
}
