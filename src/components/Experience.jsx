
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import LiIcon from "./LiIcon"

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 last-mb-0 w-[60%] mx-auto felx flex-col items-center justify-between">
      <LiIcon reference={ref}/>
      <motion.div 
      initial={{y:50}}
      whileInView={{y:0}}
      transition={{duration:0.5, type:"spring"}}
      >
        <h3 className="capitalize font-bold text-2xl">{position}&nbsp;
          <a href={companyLink} target="_blank" className="text-primary capitalize ">
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div >
    </li>

  )
}

export default function Experience() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll(
    {
      target:ref,
      offset:["start end","center start"]
    }
  )

  return (
    <div>
      <div className="my-64">
        <h2 className="font-bold text-8xl mb-32 w-full text-center">
          Experience
        </h2>
        <div ref={ref} className="w-[75%] mx-auto relative">

          <motion.div 
          style={{scaleY:scrollYProgress}}
          className="absolute left-9 top-0 w-1 h-full bg-dark origin-top" />

          <ul className="w-full flex-col items-start justify-between ml-4">
            <Details
              position="lorem"
              companyLink="lorem"
              company="lorem"
              time="lorem"
              work="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              address="lorem" />

            <Details
              position="lorem"
              companyLink="lorem"
              company="lorem"
              time="lorem"
              work="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              address="lorem" />

            <Details
              position="lorem"
              companyLink="lorem"
              company="lorem"
              time="lorem"
              work="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              address="lorem" />

            <Details
              position="lorem"
              companyLink="lorem"
              company="lorem"
              time="lorem"
              work="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              address="lorem" />
          </ul>
        </div>
      </div>
    </div>
  )
}