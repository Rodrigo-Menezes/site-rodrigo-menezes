"use client"
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import profile from '../../../public/bgm.png'
import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 })
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0)
      }
    })
  }, [springValue, value])

  return <span ref={ref}></span>
}

export default function About() {
  return (
    <>
      <Head>
        <title>RodrigoMenezes| About Page</title>
        <meta name="descripition" content="any descripition" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Passion Fuels Purposel!" className="mb-16" />
          <div className="grid grid-cols-8 w-full gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase dark:text-light text-dark">Biography</h2>
              <p className="font-medium dark:text-light text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint non recusandae, corporis exercitationem amet hic, harum fuga tempora aperiam soluta provident ipsum magni quod, atque eligendi molestias quibusdam rem ducimus?
              </p>
              <p className="font-medium dark:text-light text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint non recusandae, corporis exercitationem amet hic, harum fuga tempora aperiam soluta provident ipsum magni quod, atque eligendi molestias quibusdam rem ducimus?
              </p>
              <p className="font-medium dark:text-light text-dark">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint non recusandae, corporis exercitationem amet hic, harum fuga tempora aperiam soluta provident ipsum magni quod, atque eligendi molestias quibusdam rem ducimus?
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light
            bg-light dark:bg-dark p-8 shadow-2xl border-r-8 border-b-8">


              <Image src={profile} alt="foto de perfil" className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,33vw"
              />
            </div>

            <div className="col-spam-2 flex flex-col items-end justify-between w-52">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold dark:text-light text-dark">
                  <AnimatedNumbers value={50} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">satisfied clientes</h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold dark:text-light text-dark">
                  <AnimatedNumbers value={40} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">projects completed</h2>
              </div>

              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold dark:text-light text-dark">
                  <AnimatedNumbers value={4} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">years of experience</h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  )
}