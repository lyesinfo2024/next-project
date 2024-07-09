import Link from "next/link";

import { FaBug } from "react-icons/fa";
const NavBar = () => {
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
            className="text-zinc-500 hover:text-zinc-800 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
