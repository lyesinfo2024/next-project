import { IssueStatusPage } from "@/app/components";
import { Issue } from "@prisma/client";
import { Text, Heading, Flex, Card } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  issue: Issue;
}

const IssueDetails = ({ issue }: Props) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" m="2">
        <IssueStatusPage status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="max-w-xl prose" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
