import React from "react";
import { atom } from "recoil";

export const Cart = atom({
  key: "Cart", // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
