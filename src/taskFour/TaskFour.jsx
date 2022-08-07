import { TransactionHistory } from 'taskFour/components/TransactionHistory';
import transactions from 'taskFour/transactions.json';
import { Box } from 'common/Box';

export function TaskFour() {
  return (
    <Box width="100%" pt={5} pb={5} bg="white">
      <TransactionHistory transactions={transactions} />
    </Box>
  );
}
