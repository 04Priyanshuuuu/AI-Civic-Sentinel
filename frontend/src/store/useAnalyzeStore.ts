// src/store/useAnalyzeStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

type AnalyzeResult = {
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
  image_url?: string;
};


type Store = {
  result: AnalyzeResult | null;
  setResult: (r: AnalyzeResult) => void;
  clear: () => void;
};

export const useAnalyzeStore = create<Store>()(
  persist(
    (set) => ({
      result: null,
      setResult: (r) => set({ result: r }),
      clear: () => set({ result: null }),
    }),
    {
      name: "ai-civic-analysis",
      skipHydration: false,
    }
  )
);
