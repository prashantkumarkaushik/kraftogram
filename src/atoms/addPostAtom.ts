import { atom } from "recoil";

export interface AddPostModalState {
  open: boolean;
}

const defaultModalState: AddPostModalState = {
  open: false,
};

export const addPostAtom = atom<AddPostModalState>({
  key: "addPostAtom",
  default: defaultModalState,
});
