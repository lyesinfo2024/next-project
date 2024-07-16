import prisma from "@/prisma/client";
import { Table } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import React from "react";
import delay from "delay";
import { number } from "zod";

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
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>title</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>description</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>created At</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>status</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{issue.title}</Table.Cell>
          <Table.Cell>{issue.description}</Table.Cell>
          <Table.Cell>{issue.createdAt.toDateString()}</Table.Cell>
          <Table.Cell>{issue.status}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default IssueDetailPage;
