"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface LoggedinContextType {
  loggedin: boolean | null;
  setLoggedin: React.Dispatch<React.SetStateAction<boolean | null>>;
}

const LoggedinContext = createContext<LoggedinContextType | undefined>(
  undefined
);

export function LoggedinContextProvider({ children }: { children: ReactNode }) {
  const [loggedin, setLoggedin] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const storedloggedin = localStorage.getItem("preferredTheme");
      if (storedloggedin) {
        setLoggedin(JSON.parse(storedloggedin));
      }
    } catch (error) {
      console.error("Failed to load preferredTheme from localStorage", error);
    }
  }, []);

  useEffect(() => {
    if (loggedin !== null) {
      localStorage.setItem("preferredTheme", JSON.stringify(loggedin));
    }
  }, [loggedin]);

  return (
    <LoggedinContext.Provider value={{ loggedin, setLoggedin }}>
      {children}
    </LoggedinContext.Provider>
  );
}

export function useLoggedin() {
  const context = useContext(LoggedinContext);
  if (context === undefined) {
    throw new Error(
      "useLoggedin must be used within a LoggedinContextProvider"
    );
  }
  return context;
}
