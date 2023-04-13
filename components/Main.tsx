import { ReactNode } from "react";

interface MainProps {
  children: ReactNode;
}
export const Main = ({children}: MainProps) => {
  return (
    <main className="flex-grow max-w-2xl mx-auto grid  sm:grid-cols-2 p-6 gap-6 mt-2">
      {children}
    </main>
    )
}