import Hero from "@/components/hero";
import ProjectCard from "@/components/project-card";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import { LuBox } from "react-icons/lu";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiPrisma, SiRailway, SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

export default function Home() {
  return (
    <div
      className="text-white/95
    flex items-center justify-start flex-col min-h-screen overflow-hidden pb-20 scroll-smooth"
    >
      <Hero />
      <div className="flex flex-col text-2xl font-bold items-center w-full gap-12 max-w-[640px] md:px-5">
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
