import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa6";

type technologies = {
  label: string;
  icon: ReactNode;
};

const cardOptions = [
  {
    label: "Website",
    icon: <FaGlobe />,
  },
  {
    label: "Codigo",
    icon: <BsGithub />,
  },
];

export default function ProjectCard({
  images,
  icon,
  technologies,
  description,
  title,
  link,
  sourceLink,
}: {
  images: string[];
  icon: ReactNode;
  technologies: technologies[];
  description: string;
  title: string;
  link: string;
  sourceLink: string;
}) {
  return (
    <div
      className="w-full h-full relative overflow-hidden border rounded-md flex items-start justify-start group flex-col hover:border-black/20 dark:hover:border-white/20 transition-all duration-200 ease-in max-md:min-w-[88vw] max-w-[350px]"
      style={{ scrollSnapAlign: "center" }}
    >
      <Link
        href={link}
        target="_blank"
        className="flex h-[180px] relative overflow-hidden w-full justify-center shadow-inner dark:opacity-80 opacity-95"
      >
        <Image
          src={images[0]}
          alt="Portfolio"
          width={100}
          height={215}
          className="border rounded-md mt-[20%] absolute"
          loading="eager"
          quality={100}
        />
        <Image
          src={images[1]}
          alt="Portfolio"
          width={500}
          height={500}
          className="object-fill"
          loading="eager"
          quality={100}
        />
      </Link>
      <div className="h-full w-full flex pt-3 px-5 pb-6 justify-between flex-col gap-3 border-t">
        <div className="flex items-center gap-2 uppercase">
          <div className="text-3xl">{icon}</div>
          <h1 className="text-xl">{title}</h1>
        </div>
        <p className="text-sm max-md:text-base font-normal opacity-70">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 py-1">
          {technologies.map((tech, i) => (
            <div
              key={i}
              className="lowercase p-0.5 px-2 dark:bg-white/10 bg-black/10 rounded-xs text-xs flex gap-1 items-center font-light max-md:text-sm"
            >
              {tech.icon}
              {tech.label}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 w-full justify-between">
          <div className="flex items-center gap-2">
            {cardOptions.map((option, i) => (
              <Link
                href={option.label === "Website" ? link : sourceLink}
                target="_blank"
                key={i}
                className="flex items-center gap-1 text-xs max-md:text-[15px] text-white dark:text-black bg-black dark:bg-white/95 p-1 px-3 rounded-sm group ring-[1.5px] ring-white/50 hover:opacity-50 transition-all duration-200 ease-in-out cursor-pointer font-semibold"
              >
                {option.icon}
                <h1>{option.label}</h1>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
