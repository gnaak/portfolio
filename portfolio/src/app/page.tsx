import Image from "next/image";
import Headers from "./Headers";
import Base from "./Base";

const Home = () => {
  return (<>
    <div className="relative border border-black w-full h-screen flex justify-center">
      <Headers />
      <Base/>
    </div>
  </>)
}

export default Home;