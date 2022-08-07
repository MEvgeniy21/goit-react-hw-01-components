import { Statistics } from 'taskTwo/components/Statistics';
import data from 'taskTwo/data.json';
import { Box } from 'common/Box';

export function TaskTwo() {
  return (
    <Box width="100%" pt={5} pb={5} bg="bgTwo">
      <Statistics title="Upload stats" stats={data} />
    </Box>
  );
}
