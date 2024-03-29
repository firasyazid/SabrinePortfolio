import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
         <h2 className={styles.sectionHeadText}>Qui suis-je ?</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >

Graphiste et community manager passionnée, je maîtrise l'art de la conception visuelle et de la gestion de communauté. Forte d'une expérience étendue avec des outils tels que la suite Adobe Creative, je crée des visuels percutants et des identités visuelles puissantes. En tant que community manager, j'ai développé des communautés en ligne dynamiques. Toujours avide d'apprendre, je collabore étroitement avec mes clientes pour élaborer des solutions visuelles innovantes. Travaillons ensemble afin de concrétiser vos idées et de renforcer votre présence visuelle.




        </motion.p>

       
        <h2 className={styles.sectionHeadText}>Mes compétences : </h2>

      <div className='mt-20 flex flex-wrap gap-10'>

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
