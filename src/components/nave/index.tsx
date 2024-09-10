"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";
const links = [
  { href: "/", label: "home" },
  { href: "/contato", label: "contato" },
  { href: "/produtos", label: "produtos" },
  { href: "/gerenciamento", label: "gerenciamento" },
  { href: "/login", label: "login" },
];
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header className="bg-black sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-4  lg:p-5  2xl:p-6">
      <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
        <nav className="flex justify-end">
          <div className="hidden w-full lg:flex justify-center items-center gap-32 2xl:gap-44">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <span className="text-base  underline text-white hover:bg-white/20 p-2  rounded-xl">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <Menu
              onClick={toggleNav}
              className="w-8 h-8 text-white cursor-pointer transition-all duration-200 p-1 rounded-xl"
            />
          </div>
        </nav>

        {isNavOpen && (
          <div className="lg:hidden flex basis-full flex-col items-center gap-4 mt-8 p-4">
            {links.map((link, index) => (
              <Link href={link.href} key={index}>
                <span className="text-xl text-white hover:bg-white/20 p-2 rounded-xl">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
