import { Routes, Route, useLocation } from "react-router-dom";
import { Main } from "@pages/Main";
import { Algorithms } from "@pages/Algorithms";
import { paths } from "@utils/paths";
import { useTransition, animated } from "react-spring";
import { Box } from "@mui/material";

function App() {
  const location = useLocation();

  const transitions = useTransition(location, {
    initial: { opacity: 1 },
    from: { opacity: 0, transform: "translate3d(100vw, 0, 0)" },
    enter: { opacity: 1, transform: "translate3d(0, 0, 0)" },
    leave: { opacity: 0, transform: "translate3d(-100vw, 0, 0)" },
    config: { duration: 150 },
    exitBeforeEnter: true,
  });

  return (
    <Box
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "black",
      }}
    >
      {transitions((style, location) => (
        <animated.div
          style={{
            ...style,
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "black",
          }}
        >
          <Routes location={location}>
            <Route index element={<Main />} />
            <Route path={paths.algorithms} element={<Algorithms />} />
            <Route path={paths.algorithmsDescription} element={<div />} />
          </Routes>
        </animated.div>
      ))}
    </Box>
  );
}

export default App;
