import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Safari } from "./magicui/safari";

export default function ProjectCard({ images, icon }: { images: string[], icon: ReactNode }) {
  return (
    <Link
      href="https://e-commerce-rho-eosin.vercel.app/"
      className="bg-black/5 w-full h-full relative cursor-pointer overflow-hidden border rounded-md flex items-start justify-center group"
    >
      <Image
        src={images[0]}
        alt="Portfolio"
        width={200}
        height={200}
        className="border rounded-xl mt-[30%] absolute group-hover:mt-[25%] transition-all duration-300 ease-in-out"
      />
      <Safari className="size-full" url="https://e-commerce-rho-eosin.vercel.app/" imageSrc="/desktop.png" mode="simple"/>
      <div className="absolute top-0 left-0 h-full w-full flex p-4 bg-gradient-to-b from-transparent to-black/95 from-60% gap-4 justify-between items-end">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 uppercase">
            <div className="text-4xl">{icon}</div>
            <h1>sla store</h1>
          </div>
          <p className="text-sm font-normal lowercase">
            E-commerce desenvolvido com Next.js e Prisma orm
          </p>
        </div>
        <FaArrowRightLong className="translate-x-10 group-hover:translate-x-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
      </div>
    </Link>
  );
}