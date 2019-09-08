import React, { useState, useEffect } from "react";
import api from "../apis/api";
import { Table } from "semantic-ui-react";

const Transactions = props => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const id = props.match.params.id;
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await api.get(`/${id}/transactions`);
        setData(response.data.transactions);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, [props.match.params.id]);

  return (
    <div>
      {isError && <div>Oops! Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table unstackable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Information</Table.HeaderCell>
              <Table.HeaderCell>Debit</Table.HeaderCell>
              <Table.HeaderCell>Credit</Table.HeaderCell>
              <Table.HeaderCell>Balance</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {data.map((rowData, idx) => {
              if (rowData.status === "BOOKED") {
                return (
                  <Table.Row key={idx}>
                    <Table.Cell>{rowData.ledgerDate}</Table.Cell>
                    <Table.Cell>{rowData.remittanceInformation}</Table.Cell>
                    <Table.Cell>
                      {rowData.creditDebit === "DEBITED" &&
                        `-${rowData.amount.content}`}
                    </Table.Cell>
                    <Table.Cell>
                      {rowData.creditDebit === "CREDITED" &&
                        rowData.amount.content}
                    </Table.Cell>
                    <Table.Cell>{rowData.balance.amount.content}</Table.Cell>
                  </Table.Row>
                );
              } else return null;
            })}
          </Table.Body>
        </Table>
      )}
    </div>
  );
};

export default Transactions;
