import React, { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import "./App.css";
import api from "./apis/api";
import DataTable from "./components/DataTable";

function App() {
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
        console.log(response.data.accounts);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <h2>Bank Accounts</h2>
      {isError && <div>Oops! Something went wrong...</div>}
      {isLoading ? <div>Loading...</div> : <DataTable data={data} />}
    </div>
  );
}

export default App;
