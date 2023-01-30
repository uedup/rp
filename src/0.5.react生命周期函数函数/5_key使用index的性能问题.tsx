import * as React from 'react';
interface Props {

}

interface State {
    list: string[]
    checkList: string[]
}

class Demo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            list: [
                '新闻5',
                '新闻4',
                '新闻3',
                '新闻2',
                '新闻1',
                '新闻0',
            ],
            checkList: []
        };
    }
    handleAddBefore = () => {
        const preList = this.state.list
        this.setState({
            list: ['新闻' + preList.length, ...preList]
        })
    }
    handleAddAfter = () => {
        const preList = this.state.list
        this.setState({
            list: [...preList, '新闻' + preList.length]
        })
    }
    handleDel = () => {
        console.log(this.state.list)
        const newList = this.state.list.filter((item, i) => {
            let flag = true;
            this.state.checkList.forEach((checkitem) => {
                // console.log(i, Number(checkitem), Number(checkitem) == i)
                if (Number(checkitem) === i) {
                    flag = false;
                }else {
                    flag = true;
                }
            })
            return flag;
        });
        console.log(newList)
        this.setState({
            list : newList
        })
    }
    // handleCheck = (e:React.MouseEvent<HTMLElement>) => {
    handleCheck = (e: React.MouseEvent<HTMLInputElement>) => {
        const checkElement = (e.target as HTMLInputElement);
        const index = checkElement.id;
        let checkList = [...this.state.checkList];
        if (checkElement.checked) {
            checkList.push(index)
        } else {
            checkList = checkList.filter(item => item !== index)
        }
        this.setState({
            checkList: checkList
        })
    }
    render() {
        return (<>
            <ul className='list'>
                {this.state.list.map((item, index) => {
                    return <li key={index}>
                        <input type="checkbox" name="" id={String(index)} onClick={this.handleCheck} />
                        <span>{item}</span>
                        <input type="text" />
                    </li>;
                })}
            </ul>
            <button onClick={this.handleAddBefore}>前加数据</button>
            <button onClick={this.handleAddAfter}>后加数据</button>
            <button onClick={this.handleDel}>删除数据</button>
            <ul className='list'>
                <li>新闻6</li>
                <li>新闻5</li>
                <li>新闻4</li>
                <li>新闻3</li>
                <li>新闻2</li>
                <li>新闻1</li>
            </ul>
        </>);
    }
}

export default Demo;