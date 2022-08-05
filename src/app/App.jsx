import { TaskOne } from "taskOne/TaskOne";
import { GlobalStyle } from "GlobalStyle"
import { Box } from "common/Box"

export const App = () => {
  return (
    <>
    <GlobalStyle />
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <TaskOne />
      
      </Box>
    </>
  );
};
