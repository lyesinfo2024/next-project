import NextLink from "next/link";
import { Link as RaduixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  children: string;
}

const Link = ({ href, children }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RaduixLink>{children}</RaduixLink>
    </NextLink>
  );
};

export default Link;
