import { Button, TextArea, TextField } from "@radix-ui/themes";

import { CiSearch } from "react-icons/ci";
const NewIssuePage = () => {
  return (
    <div className="space-y-3 max-w-xl">
      <TextField.Root placeholder="Search the docs…" />
      <TextArea placeholder="Description" size="3" />
      <Button>Submit Issue</Button>
    </div>
  );
};

export default NewIssuePage;
