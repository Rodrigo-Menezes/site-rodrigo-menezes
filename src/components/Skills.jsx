import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y,}}
      transition={{ duration: 1.5 }}
     >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-13vw" y="9vw" />
        <Skill name="React" x="0vw" y="-12vw" />
        <Skill name="JavaScript" x="13vw" y="9vw" />
        <Skill name="CSS" x="0vw" y="12vw" />
        <Skill name="NextJS" x="12vw" y="-10vw" />
        <Skill name="Figma" x="19vw" y="-5vw" />
        <Skill name="Tailwind CSS" x="-12vw" y="-10vw" />
        <Skill name="Firebase" x="20vw" y="3vw" />
        <Skill name="Web Desing" x="-20vw" y="3vw" />
        <Skill name="FramerMotion" x="-19vw" y="-5vw" />
      </div>
    </div>
  );
}
