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
    <div className="bg-gradient-to-b from-indigo-900 to-transparent flex flex-col gap-10 h-[80vh] max-md:h-fit max-md:py-10 justify-center w-full md:items-center px-6">
      <div className="md:text-center flex flex-col gap-5 font-bold">
        <p className="opacity-85 text-lg uppercase">Ola 👋 eu sou Cassio</p>
        <p className="text-9xl md:leading-[0.80] max-md:text-[3.5rem]">
          React <br />
          Developer
        </p>
      </div>
      <p className="md:text-center">
        Tenho 19 anos e sou estudante de programação, procuro minha primeira
        <br /> oportunidade de emprego na área de
        desenvolvimento de software.
      </p>
      <div className="flex gap-2 items-center justify-center max-md:flex-col">
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
