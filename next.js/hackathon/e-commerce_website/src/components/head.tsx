import Image from "next/image";
import { MdArrowForwardIos } from "react-icons/md";

interface Head {
  title: string;
}
const head = ({ title }: Head) => {
  return (
    <header className=" m-auto max-w-[1440px] min-w-full h-[50vh] max-h-[768px] bg-[url('/images/shop_banner.png')] bg-cover bg-center flex flex-col justify-center items-center gap-5 mt-12 mb-12">
      <Image
        className=" scale-150 transform"
        src={"/images/logo.png"}
        alt="Logo"
        width={77}
        height={77}
      />
      <h1 className=" text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold">
        {title}
      </h1>
      <div className=" flex justify-center gap-2 items-center text-xl">
        <h1 className=" text-lg md:text-xl font-bold">Home </h1>
        <MdArrowForwardIos className=" select-none" />
        <h1 className=" text-lg md:text-xl">{title}</h1>
      </div>
    </header>
  );
};

export default head;
