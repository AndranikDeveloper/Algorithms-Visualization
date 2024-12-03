import {
  AlgorithmTypes,
  SelectedArrayType,
  SortingAlgorithms,
} from "@/types/algorithms";
import {
  Dialog,
  DialogTitle,
  Select,
  MenuItem,
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import "./index.css";

type Props = {
  open: boolean;
  onClose(): void;
  algorithm: AlgorithmTypes | null;
};

export const Modal: FC<Props> = ({ open, onClose, algorithm }) => {
  const [selectedType, setSelectedType] = useState<SelectedArrayType>(
    SelectedArrayType.NUMBER
  );
  const [inputValue, setInputValue] = useState("[]");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (!inputValue) setInputValue("[]");
  }, [inputValue]);

  const validateInput = (value: string) => {
    try {
      const parsedArray = JSON.parse(value);

      if (!Array.isArray(parsedArray)) {
        setError("Input must be an array.");
        return false;
      }

      if (selectedType === SelectedArrayType.NUMBER) {
        const isValid = parsedArray.every((item) => typeof item === "number");
        if (!isValid) {
          setError("All elements in the array must be numbers.");
          return false;
        }
      }

      if (selectedType === SelectedArrayType.STRING) {
        const isValid = parsedArray.every((item) => typeof item === "string");
        if (!isValid) {
          setError("All elements in the array must be strings.");
          return false;
        }
      }

      setError("");
      return true;
    } catch (err) {
      setError("Invalid JSON format.");
      console.error(err);
      return false;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (validateInput(value)) {
      setInputValue(value);
    } else {
      setInputValue(value);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth={"xs"}>
      <Box className="modal">
        <DialogTitle sx={{ padding: 0 }}>{algorithm?.title}</DialogTitle>
        <Select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value as SelectedArrayType)}
          disabled={algorithm?.type === SortingAlgorithms.RADIX_SORT}
        >
          <MenuItem value={SelectedArrayType.NUMBER}>Number</MenuItem>
          <MenuItem value={SelectedArrayType.STRING}>String</MenuItem>
        </Select>

        <Box className="modal-content">
          <Typography variant="h6" sx={{ fontSize: "13px" }}>
            «Comma the selected type to run the sorting algorithm based on the
            data: »
          </Typography>

          <TextField
            fullWidth
            value={inputValue}
            onChange={handleInputChange}
            error={!!error}
            helperText={
              error || "Enter elements in JSON array format (e.g., [1, 2, 3])."
            }
          />

          <Button variant="contained">Start Sorting</Button>
        </Box>
      </Box>
    </Dialog>
  );
};
