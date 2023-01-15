import {nanoid} from 'nanoid'
type IProps = {
    addItem: Function
}

function Header(props: IProps) {

    const handleAdd = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const input = (e.target as HTMLInputElement)
        const val = input.value.trim();
        if (e.code === 'Enter' && val.length > 0) {
            props.addItem({
                id: nanoid(),
                txt: val,
                checked: false
            })
            input.value = ''
        }
    }
    return (<div>
        <input type="text" className="search"
            defaultValue='Please,input your new task ...'
            onKeyUp={handleAdd}
            onFocus={(e) => { e.target.value = '' }}
            onBlur={(e) => { e.target.value = 'Please,input your new task ...' }}
        />
    </div>);
}

export default Header;