import { PageWrapper } from "@layout/PageWrapper";
import "./index.css";
import { Link } from "react-router-dom";
import { paths } from "@utils/paths";
import { useState } from "react";
import { Modal } from "./components/Modal";
import { Box } from "@mui/material";
import { Sorts } from "./components/Sorts";
import { AlgorithmTypes } from "@/types/algorithms";

export const Algorithms = () => {
  const [isAlgorithmsModalOpen, setIsAlgorithmsModalOpen] = useState(false);
  const [selectedSortingAlgorithm, setSelectedSortingAlgorithm] =
    useState<AlgorithmTypes | null>(null);

  const toggleAlgorithmsModalOpen = () =>
    setIsAlgorithmsModalOpen((prev) => !prev);

  const onAlgorithmSelect = (algorithm: AlgorithmTypes) => {
    toggleAlgorithmsModalOpen();
    setSelectedSortingAlgorithm(algorithm);
  };

  return (
    <PageWrapper>
      <Box className="algorithms">
        <header>
          <Link to={paths.algorithms}>Sorting</Link>
          <Link to={paths.algorithmsDescription}>Sorting Description</Link>
        </header>
        <Box className="algorithms-content">
          <Sorts onAlgorithmSelect={onAlgorithmSelect} />
        </Box>
        <Modal
          open={isAlgorithmsModalOpen}
          onClose={toggleAlgorithmsModalOpen}
          algorithm={selectedSortingAlgorithm}
        />
      </Box>
    </PageWrapper>
  );
};
