import ApiCard from "@/components/api-card";
import Hero from "@/components/hero";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ProjectCard from "@/components/project-card";
import { cn } from "@/lib/utils";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiJest,
  SiPrisma,
  SiRailway,
  SiSequelize,
  SiShadcnui,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Home() {
  return (
    <div
      className="text-white/95
    flex items-center justify-start flex-col min-h-screen overflow-hidden"
    >
      <Hero />
      <div className="flex flex-col text-2xl font-bold items-center w-full gap-12 relative pt-4 max-w-[640px] md:px-5">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(700_circle_at_center,white,transparent)] opacity-5"
          )}
        />
        <div className="flex flex-col gap-10 items-center max-md:px-5">
          <div className="w-fit md:text-3xl flex-col uppercase">
            <h1>Projetos Fullstack</h1>
            <div className="rounded w-full h-[1px] bg-gradient-to-r from-sky-100/0 via-sky-300 to-sky-100/0" />
          </div>
          <div className="flex gap-4 max-md:flex-col">
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
        <div className="w-full flex flex-col items-center justify-start relative gap-10 pb-20">
          <div className="flex flex-col items-center justify-center gap-2 max-md:px-5">
            <h1 className="uppercase md:text-3xl">Apis</h1>
            <h2 className="text-base font-normal lowercase text-white/90 text-center">
              para facilitar a integração com diversos serviços.
            </h2>
          </div>
          <div
            className="flex gap-4 max-md:overflow-x-scroll max-md:w-full max-md:flex-nowrap max-md:px-5 scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            <div style={{ scrollSnapAlign: "center" }}>
              <ApiCard
                icons={[
                  <FaNodeJs key="nodejs" />,
                  <SiSequelize key="sequelize" />,
                  <SiJest key="jest" />,
                ]}
                description="api para gerenciar videos, categorias e usuarios.
        desenvolvida com express e sequelize."
                link=""
                title="AluraFlix"
              />
            </div>

            <div style={{ scrollSnapAlign: "center" }}>
              <ApiCard
                icons={[
                  <FaNodeJs key="nodejs" />,
                  <SiSequelize key="sequelize" />,
                  <SiJest key="jest" />,
                ]}
                description="api para gerenciar videos, categorias e usuarios.
        desenvolvida com express e sequelize."
                link=""
                title="AluraFlix"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
