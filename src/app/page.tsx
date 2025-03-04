import { DotPattern } from "@/components/magicui/dot-pattern";
import { HyperText } from "@/components/magicui/hyper-text";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import {
  BsFileEarmarkTextFill,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import {
  FaArrowRightLong,
  FaNodeJs,
} from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { LuBox } from "react-icons/lu";
import { SiJest, SiSequelize } from "react-icons/si";

const links = [
  {
    icon: <BsLinkedin />,
    link: "https://www.linkedin.com/in/c%C3%A1ssio-eduardo-a3b7012a8/",
    name: "Linkedin",
  },
  {
    icon: <BsGithub />,
    link: "https://github.com/Cassiollopes",
    name: "Github",
  },
  {
    icon: <BsFileEarmarkTextFill />,
    link: "https://cassiomartins.github.io/",
    name: "Curriculo",
  },
];

export default function Home() {
  return (
    <div
      className="text-white bg-black/95
    flex uppercase items-center justify-start flex-col gap-4 min-h-screen font-[family-name:var(--font-geist-sans)] overflow-hidden"
    >
      <div className="bg-gradient-to-t from-transparent to-slate-800 flex to-90% flex-col gap-6 h-[80vh] max-md:h-[50vh] justify-center w-full md:items-center px-4">
        <div className="md:text-center flex flex-col gap-2 max-md:gap-4 font-bold ">
          <p className="text-xl opacity-60 font-black">Ola 👋 eu sou Cassio</p>
          <p className="text-9xl leading-[0.85] md:text-center max-md:text-5xl">
            React <br />
            Developer
          </p>
        </div>
        <p className="text-sm text-center max-md:text-left max-md:font-semibold">
          Tenho 19 anos e sou estudante de programação, procuro minha primeira
          <br className="max-md:hidden" /> oportunidade de emprego na área de
          desenvolvimento de software.
        </p>
        <div className="flex gap-2 items-center justify-center">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.link}
              target="_blank"
              className=" lowercase gap-1 p-2 px-4 border rounded-lg text-white/50 hover:text-white transition-all duration-300 ease-in-out flex items-center bg-white/[0.01] hover:bg-white/10"
            >
              <div>{link.icon}</div>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col text-2xl font-bold items-center w-full gap-12 relative">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(600_circle_at_center,white,transparent)] opacity-10"
          )}
        />
        <div className="flex flex-col gap-10 max-w-[1200px] items-center">
          <div className="w-fit md:text-3xl flex-col">
            <p>Projetos Fullstack</p>
            <div className="rounded w-full h-[1px] bg-gradient-to-r from-sky-100/0 via-sky-300 to-sky-100/0" />
          </div>
          <div className="grid max-md:grid-cols-1 max-md:grid-rows-5 grid-cols-7 grid-rows-1 gap-4 px-4 w-full max-md:h-[80vh]">
            <Link
              href="https://e-commerce-rho-eosin.vercel.app/"
              className="backdrop-blur-sm relative max-md:col-span-1 max-md:row-span-3 md:col-span-5 md:aspect-video cursor-pointer group overflow-hidden border rounded-lg flex items-start justify-center p-3 px-4 hover:p-0 transition-all duration-200 ease-linear hover:border-amber-100/20"
            >
              <Image
                src="/mobile.png"
                alt="Portfolio"
                width={200}
                height={200}
                className="border rounded-xl mt-[30%] absolute group-hover:shadow-2xl shadow-amber-100/10 group-hover:mt-[25%] transition-all duration-300 ease-in-out"
              />
              <Image
                src="/desktop.png"
                alt="Portfolio"
                width={1000}
                height={1000}
                className="border rounded-lg group-hover:border-0 transition-all duration-200 ease-in-out object-contain w-fit h-fit"
              />
              <div className="absolute top-0 left-0 h-full w-full flex p-4 px-3 group-hover:bg-black/5 transition-all duration-500 ease-in-out bg-gradient-to-b from-transparent to-black/95 from-65% gap-4 justify-between items-end backdrop-blur-[0.4px] group-hover:backdrop-blur-[0px]">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 ">
                    <div className="text-4xl group-hover:text-3xl transition-all duration-300 ease-in-out">
                      <LuBox />
                    </div>
                    <p>sla store</p>
                  </div>
                  <p className="text-sm font-normal lowercase">
                    E-commerce desenvolvido com Next.js e Prisma orm
                  </p>
                </div>
                <FaArrowRightLong className="translate-x-10 group-hover:translate-x-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
            <Link
              href="https://e-commerce-rho-eosin.vercel.app/"
              className="backdrop-blur max-md:col-span-1 max-md:row-span-2 md:col-span-2 relative cursor-pointer group overflow-hidden border rounded-lg flex items-start justify-center p-3 px-4 hover:p-0 transition-all duration-200 ease-linear hover:shadow hover:border-amber-100/20"
            >
              <Image
                src="/mobile.png"
                alt="Portfolio"
                width={200}
                height={200}
                className="border rounded-xl mt-[30%] absolute group-hover:shadow-2xl shadow-amber-100/10 group-hover:mt-[25%] transition-all duration-300 ease-in-out"
              />
              <Image
                src="/desktop.png"
                alt="Portfolio"
                width={1000}
                height={1000}
                className="border rounded-lg group-hover:border-0 transition-all duration-200 ease-in-out object-contain w-fit h-fit group-hover:border-b"
              />
              <div className="absolute top-0 left-0 h-full w-full flex p-4 px-3 group-hover:bg-black/5 transition-all duration-500 ease-in-out bg-gradient-to-b from-transparent to-black/95 from-65% gap-4 justify-between items-end backdrop-blur-[0.4px] group-hover:backdrop-blur-[0px]">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 ">
                    <div className="text-4xl group-hover:text-3xl transition-all duration-300 ease-in-out">
                      <LuBox />
                    </div>
                    <p>sla store</p>
                  </div>
                  <p className="text-sm font-normal lowercase">
                    E-commerce desenvolvido com Next.js e Prisma orm
                  </p>
                </div>
                <FaArrowRightLong className="translate-x-10 group-hover:translate-x-0 transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start relative bg-gradient-to-b from-transparent to-black/50 ">
          <div className="flex flex-col items-center justify-center gap-2 px-4">
            <HyperText>Apis</HyperText>
            <p className="text-base font-normal lowercase text-white/90">
              para facilitar a integração com diversos serviços.
            </p>
          </div>
          <div className="w-full h-full flex max-md:flex-col items-center justify-center gap-4 max-w-[1200px] py-10 pb-20">
            <div className="flex flex-col gap-4 items-start justify-start border hover:border-border/30 cursor-pointer rounded-lg bg-white/5 backdrop-blur-[1.5px] transition-all duration-300 ease-in-out group overflow-hidden">
              <div className="h-[150px] w-full gap-6 bg-black/30 flex items-center justify-center text-5xl text-white/60 border-b">
                <FaNodeJs />
                <SiSequelize />
                <SiJest />
              </div>
              <div className="p-4 pt-0 flex flex-col gap-2">
                <h1>AluraFlix</h1>
                <h2 className="text-sm font-normal lowercase">
                  api para gerenciar videos, categorias e usuarios. <br />
                  desenvolvida com express e sequelize.
                </h2>
                <div className="text-sm font-light lowercase flex flex-col text-white/50">
                  <h3 className="font-semibold text-xl mb-2">
                    principais rotas
                  </h3>
                  <p>/api/videos</p>
                  <p>/api/categorias</p>
                  <p>/api/usuarios</p>
                </div>
                <div className="text-xs lowercase flex items-center gap-2 text-white/50 font-light mt-2">
                  <p className="transition-all group-hover:text-white">
                    ver documentação
                  </p>
                  <div className="text-sm overflow-hidden">
                    <FiArrowUpRight className="group-hover:animate-diagonalSlide animate-diagonalSlideReverse" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 items-start justify-start border hover:border-border/30 cursor-pointer rounded-lg bg-white/5 backdrop-blur-[1.5px] transition-all duration-300 ease-in-out group overflow-hidden">
              <div className="h-[150px] w-full gap-6 bg-black/30 flex items-center justify-center text-5xl text-white/60 border-b">
                <FaNodeJs />
                <SiSequelize />
                <SiJest />
              </div>
              <div className="p-4 pt-0 flex flex-col gap-2">
                <h1>AluraFlix</h1>
                <h2 className="text-sm font-normal lowercase">
                  api para gerenciar videos, categorias e usuarios. <br />
                  desenvolvida com express e sequelize.
                </h2>
                <div className="text-sm font-light lowercase flex flex-col text-white/50">
                  <h3 className="font-semibold text-xl mb-2">
                    principais rotas
                  </h3>
                  <p>/api/videos</p>
                  <p>/api/categorias</p>
                  <p>/api/usuarios</p>
                </div>
                <div className="text-xs lowercase flex items-center gap-2 text-white/50 font-light mt-2">
                  <p className="transition-all group-hover:text-white">
                    ver documentação
                  </p>
                  <div className="text-sm overflow-hidden">
                    <FiArrowUpRight className="group-hover:animate-diagonalSlide animate-diagonalSlideReverse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
