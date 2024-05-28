import Image from "next/image";
import Headers from "./Headers";
import Base from "./Base";
import Skills from "./Skills/Skills";

const Home = () => {
  return (<>
    <div className="relative flex-col w-full h-screen flex items-center">
      {/* <Headers /> */}
      <Base />
      <Skills/>
    </div>
  </>)
}

export default Home;