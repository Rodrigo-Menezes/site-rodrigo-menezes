"use client";
import Link from "next/link";
import React, { useState } from "react";
import Logo from "./Logo";
import { useRouter, usePathname } from "next/navigation";
import { GitHubIcon, LinkedinIcon, MoonIcon, SunIcon, Twitter } from "./icons";
import { motion } from "framer-motion";
import useThemeSwitche from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const pathname = usePathname();


  return (
    <Link href={href} className={`${className} group relative text-dark dark:text-light`}>
      {title}
      <span
        className={`h-px inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter()
  const handleClick = () => {
    toggle()
    router.push(href)
  }
  return (
    <button href={href} className={`${className} group relative text-dark dark:text-light`} onClick={handleClick}>
      {title}
      <span
        className={`h-px inline-block bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${pathname === href ? "w-full" : "w-0"
          }`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const NavBar = () => {

  const [mode, setMode] = useThemeSwitche();

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen)
  }
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">

      <button className="flex-col justify-center items-center hidden lg:flex"
        aria-label="botão de menu"
        onClick={handleClick}
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
      </button>

      {/* menu mobile */}

      {
        isOpen ?
          <div className="min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
            <nav className="flex flex-col items-center justify-center">
              <CustomMobileLink href="/" title="Home" className="mr-4" toggle={handleClick} />
              <CustomMobileLink href="/about" title="About" className="mx-4" toggle={handleClick} />
              <CustomMobileLink href="/projects" title="Projects" className="mx-4" toggle={handleClick} />
              <CustomMobileLink href="/article" title="Article" className="mx-4" toggle={handleClick} />
            </nav>

            <nav className="flex justify-center items-center flex-wrap">
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
              >
                <GitHubIcon className="dark:fill-light" aria-label='github' />
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
              >
                <Twitter aria-label="twitter" />
              </motion.a>
              <motion.a
                href="/"
                target={"_blank"}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="w-6 mx-3"
              >
                <LinkedinIcon aria-label="LinkedinIcon" />
              </motion.a>

              <button
                aria-label="mode Dark or Light"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
              >
                {
                  mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
                }
              </button>
            </nav>
          </div>
          : null
      }


      {/* menu web */}
      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4" />
          <CustomLink href="/about" title="About" className="mx-4" />
          <CustomLink href="/projects" title="Projects" className="mx-4" />
          <CustomLink href="/article" title="Article" className="mx-4" />
        </nav>

        <nav className="flex justify-center items-center flex-wrap">
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <GitHubIcon className="dark:fill-light" aria-label='github' />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <Twitter aria-label="twitter" />
          </motion.a>
          <motion.a
            href="/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-6 mx-3"
          >
            <LinkedinIcon aria-label="LinkedinIcon" />
          </motion.a>

          <button
            aria-label="mode Dark or Light"
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className="ml-3 flex items-center justify-center rounded-full p-1 bg-dark text-light dark:bg-light dark:text-dark"
          >
            {
              mode === "dark" ? <SunIcon className={"fill-dark"} /> : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

    </header>
  );
};
export default NavBar;
