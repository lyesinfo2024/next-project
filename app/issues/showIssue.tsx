import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  id: string;
}

const showIssue = ({ id }: Props) => {
  return (
    <Button>
      <Link href={`/issues/${id}`} className="text-blue-500 cursor-pointer">
        Open
      </Link>
    </Button>
  );
};

export default showIssue;
