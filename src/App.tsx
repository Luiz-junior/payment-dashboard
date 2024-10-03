import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { transactionStore } from "./store/transactionStore";
import TransactionList from "./components/TransactionList";
import Filter from "./components/Filter";
import { Container, Header, ErrorMessage } from "./styles";
import { transactionsMock } from "./api";

const App: React.FC = () => {
  useEffect(() => {
    transactionStore.setTransactions(transactionsMock);
  }, []);

  const handleFilter = (startDate: string, endDate: string) => {
    transactionStore.filterTransactions(startDate, endDate);
  };

  return (
    <Container>
      <Header>Payment Transaction Dashboard</Header>
      <Filter onFilter={handleFilter} />
      {transactionStore.error && (
        <ErrorMessage>{transactionStore.error}</ErrorMessage>
      )}
      <TransactionList transactions={transactionStore.filteredTransactions} />
    </Container>
  );
};

export default observer(App);
