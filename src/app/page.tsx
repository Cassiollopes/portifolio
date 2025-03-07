import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import Image from "next/image";
import Link from "next/link";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { LuBox } from "react-icons/lu";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma, SiRailway, SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  {
    name: "Typescript",
    icon: <BiLogoTypescript />,
  },
  {
    name: "Tailwind",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
  },
  {
    name: "Postgres",
    icon: <BiLogoPostgresql />,
  },
  {
    name: "Nextjs", icon: <RiNextjsFill />,
  },
  {
    name: "Framer Motion",
    icon: <TbBrandFramerMotion />,
  },
  {
    name: "ShadcnUI",
    icon: <SiShadcnui />,
  },
  {
    name: "Railway",
    icon: <SiRailway />,
  }
];

export default function Home() {
  return (
    <div
      className="text-white/95
    flex items-center justify-start flex-col min-h-screen overflow-hidden pb-20 scroll-smooth"
    >
      <Hero />
      <div className="flex flex-col text-2xl font-bold items-center w-full gap-16 max-w-[640px] md:px-5">
        <div className="flex flex-col gap-10 items-center w-full">
          <div className="flex flex-col gap-5 w-full max-md:px-5">
            <h1>Habilidades</h1>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="flex gap-2 items-center opacity-50 text-base bg-white/5 p-1 px-2 rounded-sm font-normal"
                >
                  {skill.icon}
                  <p>{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5 w-full max-md:px-5">
            <h1>Educação</h1>
            <Link
              href={"https://www.una.br/"}
              className="flex justify-between items-center w-full hover:opacity-50 transition-all duration-200 ease-in-out max-md:items-start"
            >
              <div className="flex gap-2 items-start">
                <Image
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc-ZxOa-Am3c9h1K9PiPIFaCmpx81n-NZV4A&s"
                  alt="Faculdade"
                  width={46}
                  height={46}
                  className="rounded-full object-cover"
                />
                <div className="flex flex-col gap-0.5 max-md:font-semibold font-normal text-sm">
                  <p>Una Divinópolis</p>
                  <p className="opacity-60 truncate">
                    Cursando Ciência da Computação
                  </p>
                </div>
              </div>
              <p className="opacity-50 text-sm max-md:font-normal font-light whitespace-nowrap">
                2024 - Atual
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center w-full">
          <div className="w-fit md:text-3xl flex-col uppercase">
            <h1>Meus Projetos</h1>
            <div className="rounded w-full h-[1px] bg-gradient-to-r from-sky-100/0 via-sky-300 to-sky-100/0" />
          </div>
          <div
            className="flex gap-4 max-md:overflow-x-scroll max-md:px-5 w-full scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            <ProjectCard
              link="https://e-commerce-rho-eosin.vercel.app/"
              sourceLink="https://github.com/cassiollopes/e-commerce"
              title="sla store"
              description="E-commerce com carrinho de compras e autenticação de usuários. Inclui um dashboard para o gerenciamento de vendas."
              images={["/mobile.png", "/desktop.png"]}
              icon={<LuBox />}
              technologies={[
                { label: "Next.js", icon: <RiNextjsFill /> },
                { label: "TypeScript", icon: <BiLogoTypescript /> },
                { label: "Tailwind", icon: <RiTailwindCssFill /> },
                { label: "ShadcnUI", icon: <SiShadcnui /> },
                { label: "Prisma", icon: <SiPrisma /> },
                { label: "Railway", icon: <SiRailway /> },
                { label: "PostgreSQL", icon: <BiLogoPostgresql /> },
                { label: "Framer Motion", icon: <TbBrandFramerMotion /> },
              ]}
            />
            <ProjectCard
              link="https://aluraflix.vercel.app/"
              sourceLink="https://github.com/cassiollopes/aluraflix"
              title="AluraFlix"
              description="Plataforma de videos com categorias e usuarios."
              images={["/mobile.png", "/desktop.png"]}
              icon={<LuBox />}
              technologies={[
                { label: "Next.js", icon: <RiNextjsFill /> },
                { label: "TypeScript", icon: <BiLogoTypescript /> },
                { label: "Tailwind", icon: <RiTailwindCssFill /> },
                { label: "ShadcnUI", icon: <SiShadcnui /> },
                { label: "Prisma", icon: <SiPrisma /> },
                { label: "Railway", icon: <SiRailway /> },
                { label: "PostgreSQL", icon: <BiLogoPostgresql /> },
                { label: "Framer Motion", icon: <TbBrandFramerMotion /> },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
