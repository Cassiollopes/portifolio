import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { FaArrowRightLong, FaGlobe } from "react-icons/fa6";

type technologies = {
  label: string;
  icon: ReactNode;
};

export default function ProjectCard({
  images,
  icon,
  technologies,
  description,
  title,
}: {
  images: string[];
  icon: ReactNode;
  technologies: technologies[];
  description: string;
  title: string;
}) {
  return (
    <Link
      href="https://e-commerce-rho-eosin.vercel.app/"
      className="bg-black/5 w-full h-full relative cursor-pointer overflow-hidden border rounded-lg flex items-start justify-center group flex-col  hover:border-white/20 transition-all duration-200 ease-in"
    >
      <div className="flex h-fit relative overflow-hidden w-full justify-center border-b">
        <Image
          src={images[0]}
          alt="Portfolio"
          width={100}
          height={100}
          className="border rounded-sm mt-[20%] absolute"
        />
        <Image
          src={images[1]}
          alt="Portfolio"
          width={200}
          height={200}
          className="w-full h-fit object-contain"
        />
      </div>
      <div className="h-full w-full flex p-3 gap-3 justify-between flex-col">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 uppercase">
            <div className="text-3xl">{icon}</div>
            <h1 className="text-xl">{title}</h1>
          </div>
          <p className="text-sm max-md:text-base font-normal text-white/70">
            {description}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="lowercase p-1 px-3 bg-white/10 rounded-md text-xs flex gap-1 items-center font-normal"
            >
              {tech.icon}
              {tech.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 w-full justify-between">
          <div className="flex items-center gap-1 text-xs font-light text-black bg-white/90 p-1 px-3 rounded-md group">
            <FaGlobe />
            <h1>Visitar website</h1>
          </div>
          <FaArrowRightLong className="translate-x-10 group-hover:translate-x-0 transition-all duration-200 ease-in opacity-0 group-hover:opacity-100 text-xl" />
        </div>
      </div>
    </Link>
  );
}
