// "use client";
import React from "react";

import { Button, Table } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import delay from "delay";
import "react-loading-skeleton/dist/skeleton.css";
import IssueStatusPage from "../components/issueStatusPage";
import IssueActions from "./IssueActions";
import Link from "next/link";

const IssuesPage = async () => {
  const issues = await prisma.issue.findMany();
  await delay(2000);
  return (
    <div>
      <IssueActions />
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>issue</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              update
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>show</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {issues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>
                <Link href={`/issues/${issue.id}`}>{issue.title}</Link>
                <div className="md:hidden block">
                  <IssueStatusPage status={issue.status} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell ">
                <IssueStatusPage status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
              <Table.Cell>
                <Button>
                  <Link
                    href={`/issues/${issue.id}`}
                    className=" cursor-pointer"
                  >
                    Show Details
                  </Link>
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesPage;
