"use client"
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import img from '../../../public/bgm.jpg'
import { motion, useMotionValue } from "framer-motion";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }
  function handleMouseleave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} target="_blank"
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseleave}
    >
      <h2 className="capitalize text-xl font-semibold hover:underline">{title}</h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef} src={img} alt={title} className="w-72 h-auto hidden absolute rounded-lg z-10"
        priority
        sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,50vw"
      />
    </Link>
  )
}

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-5 my-4 rounded-xl flex items-center justify-between bg-light text-dark fisrt:mt-0 border border-solid border-dark border-r-4 border-b-4" >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4">{date}</span>
    </motion.li >
  )
}

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="col-span-1 w-full relative p-4 bg-light border border-solid border-dark rounded-2xl">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[102%]rounded-3xl bg-dark" />
      <Link href={link} target="_blank" className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className='w-full h-auto hover:scale-110 transition ease duration-300' />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline transition ease duration-300">{title}</h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold">{time}</span>
    </li>
  )
}

export default function Articles() {
  return (
    <>
      <Head>
        <title>RodrigoMenezes| Articles Page</title>
        <meta name="descripition" content="any descripition" />
      </Head>
      <TransitionEffect/>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText text="Words Can Change the World!" className="mb-16" />
          <ul className="grid grid-cols-2 gap-16">
            <FeaturedArticle
              img={img} title="lorem" time="lorem" summary="lorem lorem lorem" link="lorems"
            />
            <FeaturedArticle
              img={img} title="lorem" time="lorem" summary="lorem lorem lorem" link="lorems"
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">All Articles</h2>
          <Article
            title="Muitos lorem são escritos aqui HAHAHAH"
            img={img}
            date="lorem"
            link="/"
          />
          <Article
            title="Muitos lorem são escritos aqui HAHAHAH"
            img={img}
            date="lorem"
            link="/"
          />
          <Article
            title="Muitos lorem são escritos aqui HAHAHAH"
            img={img}
            date="lorem"
            link="/"
          />
          <Article
            title="Muitos lorem são escritos aqui HAHAHAH"
            img={img}
            date="lorem"
            link="/"
          />
          <Article
            title="Muitos lorem são escritos aqui HAHAHAH"
            img={img}
            date="lorem"
            link="/"
          />
          <Article
            title="Muitos lorem são escritos aqui HAHAHAH"
            img={img}
            date="lorem"
            link="/"
          />
          <Article
            title="Muitos lorem são escritos aqui HAHAHAH"
            img={img}
            date="lorem"
            link="/"
          />
        </Layout>
      </main>
    </>
  )
}