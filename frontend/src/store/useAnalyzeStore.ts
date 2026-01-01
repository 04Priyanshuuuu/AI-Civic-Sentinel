import { create } from "zustand";

type AnalyzeResult = {
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
};

type Store = {
  result: AnalyzeResult | null;
  setResult: (r: AnalyzeResult) => void;
  clear: () => void;
};

export const useAnalyzeStore = create<Store>((set) => ({
  result: null,
  setResult: (r) => set({ result: r }),
  clear: () => set({ result: null }),
}));
