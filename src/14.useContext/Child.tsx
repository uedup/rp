import { useContext ,ChangeEvent} from "react"
import { DemoContext } from './context'

type IProps = {
}

const Child: React.FC<IProps> = () => {
    const { model, setColor, setText } = useContext(DemoContext)
    const vtext = model.text

    const handerChange = (e:ChangeEvent<HTMLInputElement>) => {
        setText(e.target?.value)
    }
    return (
        <div>
            <input defaultValue={vtext} type="text" name="" id="" onChange={handerChange} />
            <button onClick={() => { setColor('red') }}>red</button>
            <button onClick={() => { setColor('blue') }}>blue</button>
            <button onClick={() => { setColor('green') }}>green</button>
        </div>
    )
}
export default Child