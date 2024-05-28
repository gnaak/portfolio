import Image from "next/image";
import Headers from "../components/Headers";
import Base from "../components/Base";
import Skills from "../components/Skills/Skills";
import Certi from "../components/Certificates";
import Exp from "../components/Experience";
import Projects from "../components/Projects/Projects";

const Home = () => {
  return (<>
    <div className="relative flex-col w-full h-screen flex items-center gap-20">
      {/* <Headers /> */}
      <Base />
      <Skills />
      <Certi />
      <Exp />
      <Projects/>
    </div>
  </>)
}

export default Home;