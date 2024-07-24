"use client";

import Link from "next/link";
import classNames from "classnames";

import { FaBug } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Box, Container, Flex } from "@radix-ui/themes";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();
  const links = [
    { label: "dashboard", href: "/" },
    { label: "issues", href: "/issues/list" },
  ];
  return (
    <nav className="h-14 mb-5 px-5 border-b flex items-center">
      <Container>
        <Flex align="center" justify="between">
          <Flex gap="3" align="center">
            <Link href="/">
              <FaBug />
            </Link>
            <ul className="flex space-x-6">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={classNames({
                      "text-red-700": link.href === currentPath,
                      "text-zinc-500": link.href !== currentPath,
                      "hover:text-zinc-900 transition-colors": true,
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Flex>
          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">logout</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">login</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;
