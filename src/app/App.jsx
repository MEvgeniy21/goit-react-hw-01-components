import { Task1 } from "../task1/Task1";
import { GlobalStyle } from "GlobalStyle"
import { Box } from "common/Box"

export const App = () => {
  return (
    <>
    <GlobalStyle />
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <Task1 />
      
      </Box>
    </>
  );
};
