import { Table } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";

const loadingIssueDetaiPage = () => {
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
          <Table.Cell>
            <Skeleton highlightColor="red" baseColor="blue" />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
          <Table.Cell>
            <Skeleton />
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  );
};

export default loadingIssueDetaiPage;
