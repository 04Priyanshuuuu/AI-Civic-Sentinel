import { create } from "zustand";
import { persist } from "zustand/middleware";

type AnalyzeResult = {
  issue_type: string;
  severity: string;
  department: string;
  summary: string;
  image_url?: string;
};

type Location = {
  lat: number;
  lng: number;
};

type Store = {
  result: AnalyzeResult | null;
  imageFile: File | null;
  location: Location | null;

  setResult: (r: AnalyzeResult, img: File) => void;
  setLocation: (loc: Location) => void;
  clear: () => void;
};

export const useAnalyzeStore = create<Store>()(
  persist(
    (set) => ({
      result: null,
      imageFile: null,
      location: null,

      setResult: (r, img) =>
        set({
          result: r,
          imageFile: img,
        }),

      setLocation: (loc) =>
        set({
          location: loc,
        }),

      clear: () =>
        set({
          result: null,
          imageFile: null,
          location: null,
        }),
    }),
    {
      name: "ai-civic-analysis",
    }
  )
);
