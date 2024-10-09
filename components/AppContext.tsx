import { ReactNode, createContext } from "react";

const AppContext = createContext({});
interface AppContextProviderProps {
  children: ReactNode; // Define the type for children
}

// Create AppContextProvider component with typed children
export default function AppContextProvider({
  children,
}: AppContextProviderProps) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
