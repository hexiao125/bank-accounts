import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Table } from "semantic-ui-react";
import api from "../apis/api";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await api.get();
        setData(response.data.accounts);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      {isError && <div>Oops! Something went wrong...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>IBAN</Table.HeaderCell>
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
                  <Table.Cell>
                    <Link to={`/${rowData.accountId}/transactions`}>
                      {rowData.iban}
                    </Link>
                  </Table.Cell>
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
      )}
    </div>
  );
};

export default DataTable;
