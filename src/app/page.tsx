import ApiCard from "@/components/api-card";
import Hero from "@/components/hero";
import { DotPattern } from "@/components/magicui/dot-pattern";
import ProjectCard from "@/components/project-card";
import { cn } from "@/lib/utils";
import { FaNodeJs } from "react-icons/fa6";
import { LuBox } from "react-icons/lu";
import { SiJest, SiSequelize } from "react-icons/si";

export default function Home() {
  return (
    <div
      className="text-white/90
    flex items-center justify-start flex-col min-h-screen overflow-hidden"
    >
      <Hero />
      <div className="flex flex-col text-2xl font-bold items-center w-full gap-12 relative pt-4 max-w-[1200px] px-5">
        <DotPattern
          className={cn(
            "[mask-image:radial-gradient(700_circle_at_center,white,transparent)] opacity-5"
          )}
        />
        <div className="flex flex-col gap-10 items-center">
          <div className="w-fit md:text-3xl flex-col uppercase">
            <h1>Projetos Fullstack</h1>
            <div className="rounded w-full h-[1px] bg-gradient-to-r from-sky-100/0 via-sky-300 to-sky-100/0" />
          </div>
          <div className="grid max-md:grid-cols-1 max-md:grid-rows-7 grid-cols-7 grid-rows-1 gap-4 w-full max-md:h-[85vh] h-[60vh]">
            <div className="md:col-span-4 max-md:row-span-4">
              <ProjectCard
                images={["/mobile.png", "/desktop.png"]}
                icon={<LuBox />}
              />
            </div>
            <div className="md:col-span-3 max-md:row-span-3">
              <ProjectCard
                images={["/mobile.png", "/desktop.png"]}
                icon={<LuBox />}
              />
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-start relative gap-10 pb-20">
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="uppercase md:text-3xl">Apis</h1>
            <h2 className="text-base font-normal lowercase text-white/90 text-center">
              para facilitar a integração com diversos serviços.
            </h2>
          </div>
          <div className="flex gap-6 max-md:flex-col">
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
  );
}
