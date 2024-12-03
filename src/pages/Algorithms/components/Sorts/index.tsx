import { AlgorithmTypes, SortingAlgorithms } from "@/types/algorithms";
import { Box, Paper, Stack } from "@mui/material";
import "./index.css";
import { FC } from "react";

type Props = {
  onAlgorithmSelect(val: AlgorithmTypes): void;
};

const sortingAlgorithms: AlgorithmTypes[] = [
  { title: "Bubble Sort", type: SortingAlgorithms.BUBBLE_SORT },
  { title: "Selection Sort", type: SortingAlgorithms.SELECTION_SORT },
  { title: "Insertion Sort", type: SortingAlgorithms.INSERTION_SORT },
  { title: "Merge Sort", type: SortingAlgorithms.MERGE_SORT },
  { title: "Quick Sort", type: SortingAlgorithms.QUICK_SORT },
  { title: "Radix Sort", type: SortingAlgorithms.RADIX_SORT },
];

export const Sorts: FC<Props> = ({ onAlgorithmSelect }) => {
  return (
    <Box className="sorts">
      <Stack spacing={2}>
        {sortingAlgorithms.map(({ title, type }) => (
          <Paper
            key={type}
            className="algorithm"
            onClick={() => onAlgorithmSelect({ title, type })}
          >
            <Box className="algorithm-title">{title}</Box>
            <Box className="algorithm-block" />
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};
