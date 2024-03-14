import React from 'react';
import "./LandingPage.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TiHtml5, TiCss3 } from "react-icons/ti";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiSpringboot } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { SiKubernetes } from "react-icons/si";
import { SiSelenium } from "react-icons/si";
import { TbBrandCucumber } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaSalesforce } from "react-icons/fa";
import {motion as m} from "framer-motion";

const LandingPage = () => {

    const style={padding:"5px"};

    return ( 
      <m.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 1, ease:'easeOut'}} className="homeBody">
      <div>
        <m.img initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 2, ease:'easeOut'}}
          className="myphoto"
          src="./MohammedIshrath.jpeg"
          alt="Mohammed Ishrath"
        ></m.img>
      </div>
      <div>
        <m.p initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 3, ease:'easeOut'}} className="information">
          Hi my name is Mohammed Ishrath, I am a Software Developer passionate
          about learning new technologies and build stuff.
        </m.p>
        <m.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 3, ease:'easeOut'}}>
          <GitHubIcon style={style} size={30}></GitHubIcon>
          <EmailIcon style={style} size={30}></EmailIcon>
          <LinkedInIcon style={style} size={30}></LinkedInIcon>
        </m.div>
        <m.p initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 4, ease:'easeOut'}}>- Tech Stack - </m.p>
        <m.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 4, ease:'easeOut'}} className="techStack">
          <TiHtml5 style={style} size={30}></TiHtml5>
          <TiCss3 style={style} size={30}></TiCss3>
          <IoLogoJavascript style={style} size={30}></IoLogoJavascript>
          <FaReact style={style} size={30}></FaReact>
          <FaJava style={style} size={30}></FaJava>
          <SiSpringboot style={style} size={30}></SiSpringboot>
        </m.div>
        <m.p initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 5, ease:'easeOut'}}>- Other -</m.p>
        <m.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration: 5, ease:'easeOut'}} className="other">
          <FaBootstrap style={style} size={30}></FaBootstrap>
          <SiTailwindcss style={style} size={30}></SiTailwindcss>
          <SiSpring style={style} size={30}></SiSpring>
          <FaDocker style={style} size={30}></FaDocker>
          <SiKubernetes style={style} size={30}></SiKubernetes>
          <SiSelenium style={style} size={30}></SiSelenium>
          <TbBrandCucumber style={style} size={30}></TbBrandCucumber>
          <FaGithub style={style} size={30}></FaGithub>
          <FaGitlab style={style} size={30}></FaGitlab>
          <FaSalesforce style={style} size={30}></FaSalesforce>
        </m.div>
      </div>
    </m.div>
     );
}
 
export default LandingPage;