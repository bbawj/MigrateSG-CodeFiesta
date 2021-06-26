import React from "react";
import { useState } from "react";
import { useContext } from "react";

const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}

export default function AppProvider({ children }) {
  const [questionPath, setQuestionPath] = useState({});

  const value = { questionPath, setQuestionPath };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
