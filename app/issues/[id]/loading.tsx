import IssueStatusPage from "@/app/components/issueStatusPage";
import { Box, Card, Flex, Heading, Table } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loadingIssueDetaiPage = () => {
  return (
    <Box className="max-w-xl">
      <Skeleton />
      <Flex gap="3" m="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="max-w-xl prose" mt="4">
        <Skeleton count={5} />
      </Card>
    </Box>
  );
};

export default loadingIssueDetaiPage;
