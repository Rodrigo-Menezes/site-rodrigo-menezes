import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import { GitHubIcon } from "@/components/icons";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import project1 from "../../../public/bgm.jpg"

const FeaturedProject = ({ type, title, sumary, img, link, github }) => {
  return (
    <article className="w-full flex items-center justify-between relative rounded-2xl rounded-br-3xl border border-solid border-dark bg-light shadow-2xl p-12">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-3xl bg-dark" />
      <Link href={link} target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-56 h-auto hover:scale-105 transition ease duration-300" />
      </Link>
      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark">{sumary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 text-dark"><GitHubIcon /></Link>
          <Link href={link} target="_blank" className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold">Visit Project</Link>
        </div>
      </div>

    </article>
  )
}

const Project = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative ">
      <div className="absolute top-0 -right-3 -z-10 w-[100%] h-[103%] rounded-3xl bg-dark" />
      <Link href={link} target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-56 h-auto hover:scale-105 transition ease duration-300"
          priority
          sizes="(max-width:768px) 100vw,(max-width:1200px)50vw,50vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link href={link} target="_blank" className="hover:underline underline-offset-2">
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}
          </h2>
        </Link>
        <div className="mt-2 flex items-center justify-between w-full">
          <Link href={link} target="_blank" className="rounded-lg text-dark underline text-lg ">Visit</Link>
          <Link href={github} target="_blank" className="w-8 text-dark"><GitHubIcon /></Link>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>RodrigoMenezes| Projects Page</title>
        <meta name="descripition" content="any descripition" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Imagination Trumps Knowledge!" className="mb-16" />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-12">
              <FeaturedProject
                type="lorem" title="lorem lorem lorem lorem" sumary="lorem loremlorem loremlorm lo remlor emlor emlo reml
                orem oremloreml oremloremlor emlor emlorem loremlo emloremlo srem" img={project1} link="/" github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="lorem" title="lorem lorem lorem lorem" img={project1} link="/" github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="lorem" title="lorem lorem lorem lorem" img={project1} link="/" github="/"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="lorem" title="lorem lorem lorem lorem" sumary="lorem loremlorem loremlorm lo remlor emlor emlo reml
                orem oremloreml oremloremlor emlor emlorem loremlo emloremlo srem" img={project1} link="/" github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="lorem" title="lorem lorem lorem lorem" img={project1} link="/" github="/"
              />
            </div>
            <div className="col-span-6">
              <Project
                type="lorem" title="lorem lorem lorem lorem" img={project1} link="/" github="/"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}