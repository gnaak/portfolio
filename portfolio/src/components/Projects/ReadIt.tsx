import readit from "@/assets/projects/readit.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Readit = () => {
  const router = useRouter();
  return (
    <>
      <div
        className="flex flex-col justify-between xl:w-[32%] md:w-[48%] aspect-3/4  border border-gray-400 p-3 rounded-xl shadow-xl lg:gap-7 hover:cursor-pointer hover:-translate-y-1 hover:scale-105 duration-300"
        onClick={() => router.push("/readit")}
      >
        <div className="w-20 h-20 flex justify-center items-center border bg-[#EEF5FB] border-gray-400 rounded-xl ">
          <Image src={readit} alt="리딧" className="w-full aspect-auto" />
        </div>
        <div className="flex flex-col lg:gap-5 justify-between">
          <div className="flex jus">
            <span className="font-bold lg:text-lg">Readit</span>
          </div>
          <div className="flex flex-col lg:gap-2">
            <span className="font-bold">프론트엔드(리드)</span>
            <div className="">뉴스, 비문학을 통한 문해력 향상 서비스</div>
            <div className="flex flex-row lg:gap-2">
              <span className="bg-[#3179c6] px-2 text-white border border-black rounded-md">
                Typescript
              </span>
              <span className="bg-[#61DAFB] px-2 text-white border border-[#619efb] rounded-md">
                React
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Readit;
