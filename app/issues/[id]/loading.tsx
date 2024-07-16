import { Box, Card, Flex } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";

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
