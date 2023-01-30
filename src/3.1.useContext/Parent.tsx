import { useContext} from "react"
import Child from './Child'
import { DemoContext } from './context'

type AppProps = {
}

const Parent: React.FC<AppProps> = () => {
    const { model } = useContext(DemoContext)
    const vtext = model.text
    const vcolor = model.color
    const vstyle = { color: vcolor }

    return (
        <div style={vstyle}>
            {vtext}
            <Child />
        </div>
    )
}
export default Parent