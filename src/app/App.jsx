import { TaskOne } from "taskOne/TaskOne";
import { TaskTwo } from "taskTwo/TaskTwo";
import { TaskThree } from "taskThree/TaskThree";
import { GlobalStyle } from "GlobalStyle"
import { Box } from "common/Box"

export const App = () => {
  return (
    <>
    <GlobalStyle />
      <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column">
        <TaskOne />
        <TaskTwo />
        <TaskThree />
      </Box>
    </>
  );
};
