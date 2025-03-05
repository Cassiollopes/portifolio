import Image from "next/image";
import Link from "next/link";
import { BsFileEarmarkTextFill, BsGithub, BsLinkedin } from "react-icons/bs";

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

export default function Hero() {
  return (
    <div className="flex flex-col gap-10 h-[80vh] max-md:py-10 justify-center w-full md:items-center px-8">
      <div className="md:text-center flex flex-col gap-5 font-bold md:items-center">
        <div className="flex items-center gap-2">
          <Image
            src="https://github.com/cassiollopes.png"
            alt="Cassio"
            width={40}
            height={40}
            className="rounded-full opacity-90"
          />
          <p className="opacity-85 text-lg">Ola 👋 eu sou Cassio</p>
        </div>
        <h1 className="text-9xl md:leading-[0.80] max-md:text-[3.5rem]">
          React <br />
          Developer
        </h1>
      </div>
      <p className="md:text-center max-w-[500px] font-normal">
        Tenho 19 anos, estou no terceiro semestre de faculdade e procuro minha
        primeira oportunidade de estagio na área de desenvolvimento de software.
      </p>
      <div className="flex gap-2 items-center justify-center max-md:flex-col max-md:gap-3">
        {links.map((link, i) => (
          <Link
            key={i}
            href={link.link}
            target="_blank"
            className="lowercase gap-1 p-2 px-4 border rounded-lg text-white/50 hover:text-white transition-all duration-200 ease-in-out flex items-center bg-white/[0.015] hover:bg-white/10 max-md:w-full justify-center"
          >
            <div>{link.icon}</div>
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
