import { atom } from "recoil";

export const isCheckUrlAtom = atom({
  key: "isCheck",
  default: true,
});

export const cElementAtom = atom({
  key: "cElement",
  default: null,
});
