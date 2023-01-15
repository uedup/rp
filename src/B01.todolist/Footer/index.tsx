type IProps = {
    changeAllItem: Function,
    getDoneNum: Function,
}

function Header(props: IProps) {
    const {
        changeAllItem,
        getDoneNum,
    } = props;
    const [n,total] = getDoneNum();
    const handleDoneAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeAllItem(e.target.checked)
    }
    return (<div className="result">
        <input type="checkbox" name="" id="" onChange={handleDoneAll} />
        <label htmlFor="">已完成{n}/全部{total}</label>
    </div>);
}

export default Header;