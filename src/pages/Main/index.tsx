import { Box, Button } from "@mui/material";
import "./index.css";
import backgroundVideo from "@assets/videos/video.mp4";
import { useNavigate } from "react-router-dom";
import { paths } from "@utils/paths";
import { useEffect } from "react";

export const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("mount");

    return () => {
      console.log("unmount");
    };
  }, []);
  return (
    <main className="main">
      <video className="background-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
      </video>
      <Box className="main-container">
        <h1>Sorting Algorithms Visualization!</h1>
        <h3>Learn, experiment and understand sorting algorithms in practice</h3>
        <Button
          sx={{
            borderColor: "white",
            color: "white",
            marginTop: "40px",
            width: 250,
          }}
          variant="outlined"
          onClick={() => {
            navigate(paths.algorithms);
            console.log("loooogggggg");
          }}
        >
          Visualize Sorting
        </Button>
      </Box>
    </main>
  );
};
