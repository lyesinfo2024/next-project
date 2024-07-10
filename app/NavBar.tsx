"use client";

import Link from "next/link";
import classNames from "classnames";

import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  const links = [
    { label: "dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 h-14 items-center mb-5 px-5 border-b ">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={classNames({
              "text-red-700": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "hover:text-zinc-900 transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
