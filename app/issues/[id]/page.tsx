import prisma from "@/prisma/client";
import { Card, Flex, Heading, Table, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import delay from "delay";
import { number } from "zod";
import IssueStatusPage from "@/app/components/issueStatusPage";
import ReactMarkdown from "react-markdown";

interface Props {
  params: {
    id: string;
  };
}

const IssueDetailPage = async ({ params: { id } }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  if (!issue) notFound();

  await delay(2000);
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" m="2">
        <IssueStatusPage status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="max-w-xl prose" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </div>
  );
};

export default IssueDetailPage;
