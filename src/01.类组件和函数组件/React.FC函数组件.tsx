import { ReactNode } from "react"

type AppProps = {
  message: string,
  children:ReactNode
}

export const App: React.FC<AppProps> = ({ message, children }) => (
  <div>
    {message}
    {children}
  </div>
)