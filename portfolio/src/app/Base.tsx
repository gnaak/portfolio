import Image from "next/image";
import profile from "@/assets/img/image.png"
const Base = () => {

  return (
    <>
      <div className="border border-black pt-20 p-10 w-2/5">
        LGH's Portfolio
        <Image src={profile} alt="프로필 사진" className="w-1/5 rounded-full"/>
      </div>
    </>
  );
}
export default Base;