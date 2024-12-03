export enum SortingAlgorithms {
  BUBBLE_SORT = "bubbleSort",
  SELECTION_SORT = "selectionSort",
  INSERTION_SORT = "insertionSort",
  MERGE_SORT = "mergeSort",
  QUICK_SORT = "quickSort",
  RADIX_SORT = "radixSort",
}

export enum SelectedArrayType {
  NUMBER = "number",
  STRING = "string",
}

export type AlgorithmTypes = {
  title: string;
  type: SortingAlgorithms;
};
