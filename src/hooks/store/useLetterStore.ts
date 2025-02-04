import { create } from "zustand";

interface IletterState {
  id: number;
  title: string;
  content: string;
}

interface IletterListState {
  letters: IletterState[];
  addLetter: (newLetter: { title: string; content: string }) => void;
}

// eslint-disable-next-line import/prefer-default-export
export const useLetterStore = create<IletterListState>((set) => ({
  letters: [
    {
      id: 1,
      title: "hi",
      content: "content",
    },
  ],
  addLetter: ({ title, content }) =>
    set((state) => ({
      letters: [
        ...state.letters,
        {
          id: state.letters.length + 1,
          title,
          content,
        },
      ],
    })),
}));
