import Link from "next/link";
import { useEffect } from "react";
import Image from "next/image";

const links = [
  { label: "Register", href: "#register" },
  { label: "Past Events", href: "#past-dos" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav() {
  useEffect(() => {
    console.log(
      "Made with love @ Hack Club. Come visit us @ https://hackclub.com/",
    );
  });
  return (
    <nav className="bg-[#1c1c19] text-[#fcf7f0] font-body overflow-hidden py-4">
      <div className="flex w-full justify-between items-center">
        <div className="m-0 p-0 -ml-1">
          <img
            src="/hcflag.png"
            alt="Hack Club Logo"
            className="w-32 h-32 object-contain"
          />
        </div>
        <ul className="flex flex-row gap-12 pr-12 items-center">
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link
                href={href}
                className="text-[#dba7d0] hover:text-[#fcf7f0] transition-colors no-underline font-title text-lg font-bold"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
