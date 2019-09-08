import React from "react";
import { Table } from "semantic-ui-react";

const DataTable = ({ data }) => {
  if (!data.length) return null;

  return (
    <Table unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Account Id</Table.HeaderCell>
          <Table.HeaderCell>IBAN</Table.HeaderCell>
          <Table.HeaderCell>BBAN</Table.HeaderCell>
          <Table.HeaderCell>Currency</Table.HeaderCell>
          <Table.HeaderCell>Account Type</Table.HeaderCell>
          <Table.HeaderCell>BIC</Table.HeaderCell>
          <Table.HeaderCell>Clearing Number</Table.HeaderCell>
          <Table.HeaderCell>Owner Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map((rowData, idx) => {
          return (
            <Table.Row key={idx}>
              <Table.Cell>{rowData.accountId}</Table.Cell>
              <Table.Cell>{rowData.iban}</Table.Cell>
              <Table.Cell>{rowData.bban}</Table.Cell>
              <Table.Cell>{rowData.currency}</Table.Cell>
              <Table.Cell>{rowData.accountType}</Table.Cell>
              <Table.Cell>{rowData.bic}</Table.Cell>
              <Table.Cell>{rowData.clearingNumber}</Table.Cell>
              <Table.Cell>{rowData.ownerName}</Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
};

export default DataTable;
