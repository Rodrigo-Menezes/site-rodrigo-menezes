import Layout from "@/components/Layout";
import Image from "next/image";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { User } from "@/components/icons";
import HireMe from "@/components/HireMe";
import ideia from "../../public/ideia.png";
import AnimatedImage from "@/components/AnimateImage";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
    <TransitionEffect/>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <AnimatedImage />
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
                targetWord="Vision"
                targetColor="text-primary dark:text-primaryDark font-lobster"
              />
              <p className="my-4 text-base font-medium text-dark dark:text-light">
                {" "}
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/"
                  className="flex items-center bg-dark dark:bg-light text-light dark:text-dark dark:hover:text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light dark:hover:bg-dark hover:text-dark border border-solid  hover:border-dark dark:hover:border-light transition ease duration-300"
                >
                  {" "}
                  Contact
                  <User className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-10 inline-block w-24">
          <Image
            src={ideia}
            alt="Imagem de uma ideia"
            className=" w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
