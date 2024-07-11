"use client";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

import { CiSearch } from "react-icons/ci";
const NewIssuePage = () => {
  return (
    <div className="space-y-3 max-w-xl">
      <TextField.Root placeholder="Search the docs…" />
      <SimpleMDE placeholder="Description" />
      <Button>Submit Issue</Button>
    </div>
  );
};

export default NewIssuePage;
