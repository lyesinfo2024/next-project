"use client";
import { Button, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import axios from "axios";
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const router = useRouter();
  console.log(register("title"));
  return (
    <form
      className="space-y-3 max-w-xl"
      onSubmit={handleSubmit(async (data) => {
        // await axios.post("/api/issues", data);
        // router.push("/issues");

        await fetch("/api/issues", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        router.push("/");
      })}
    >
      <TextField.Root placeholder="title" {...register("title")} />
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="Description" {...field} />
        )}
      />
      <Button>Submit Issue</Button>
    </form>
  );
};

export default NewIssuePage;
