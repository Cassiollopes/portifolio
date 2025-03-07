import Link from "next/link";
import { links } from "./hero";
import { BsSun } from "react-icons/bs";

export default function Nav() {
  return (
    <nav className="w-full p-4 sticky top-0 z-50 border-b text-white/95 backdrop-blur-xl ">
      <div className="flex justify-between items-center max-w-[600px] mx-auto">
        <h1 className="text-2xl font-bold">Portfólio</h1>
        <div className="flex gap-6 max-md:gap-4 items-center text-xl ">
          {links.map((link, i) => (
            <Link
              key={i}
              href={link.link}
              target="_blank"
              className="cursor-pointer hover:text-sky-400 transition-all duration-200 ease-in-out"
            >
              {link.icon}
            </Link>
          ))}
          <div className="pl-4">
            <BsSun />
          </div>
        </div>
      </div>
    </nav>
  );
}
