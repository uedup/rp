import React from "react"
import Parent from './Parent'
import { DemoContextProvider} from './context'

type AppProps = {
}

export const App: React.FC<AppProps> = () => {
    return (
        <DemoContextProvider>
            <Parent />
        </DemoContextProvider>
    )
}
export default App