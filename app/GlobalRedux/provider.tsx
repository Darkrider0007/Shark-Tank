"use client";
import { Provider } from "react-redux";
import store from "./store";
import Navbar from "@/components/Navbar";

export default function GlobalReduxProvider({ children }: any) {
  return <Provider store={store}>
    <Navbar />
    {children}
  </Provider>;
}
