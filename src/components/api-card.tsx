import Link from "next/link";
import { ReactNode } from "react";
import { FiArrowUpRight } from "react-icons/fi";

export default function ApiCard({
  icons,
  title,
  description,
  link,
}: {
  icons: ReactNode[];
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="w-full max-w-[350px] h-full flex flex-col gap-4 items-start justify-start border hover:border-border/30 cursor-pointer rounded-xl bg-white/5 backdrop-blur-[1.5px] transition-all duration-200 ease-in-out group overflow-hidden"
    >
      <div className="h-[150px] w-full gap-6 bg-black/30 flex items-center justify-center text-5xl text-white/60 border-b">
        {icons.map((Icon) => Icon)}
      </div>
      <div className="p-4 pt-0 flex flex-col gap-2">
        <h1 className="uppercase">{title}</h1>
        <h2 className="text-sm font-normal lowercase">{description}</h2>
        <div className="text-sm font-light lowercase flex flex-col text-white/50">
          <h3 className="font-semibold text-xl mb-2">principais rotas</h3>
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
    </Link>
  );
}
