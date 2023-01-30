import * as React from 'react';
import './index.css';
// import ReactDOM from 'react-dom/client';

interface Props {

}

interface State {
    list: string[]
}

class Demo extends React.Component<Props, State> {
    constructor(props: Props) {
        console.log('Demo-constructor')
        super(props);
        this.state = {
            list: [
                // '新闻08',
                // '新闻07',
                '新闻06',
                '新闻05',
                '新闻04',
                '新闻03',
                '新闻02',
                '新闻01',
            ]
        };
    }
    componentDidMount(): void {
        console.log('Demo-componentDidMount')
        setInterval(() => {
            const { list } = this.state;
            const news = 'news' + (list.length + 1)
            this.setState({
                list: [news, ...list]
            })
        }, 1000)
    }
    componentWillUnmount(): void {
        console.log('Demo-componentWillUnmount')
    }
    shouldComponentUpdate(): boolean {
        console.log('Demo-shouldComponentUpdate')
        return true;
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('Demo-componentDidUpdate', snapshot);
        const sh = (this.refs.list as HTMLDivElement)?.scrollHeight;
        (this.refs.list as HTMLDivElement).scrollTop += (sh - snapshot);
    }
    getSnapshotBeforeUpdate = (prevProps: Readonly<Props>, prevState: Readonly<State>) => {
        console.log('Demo-getSnapshotBeforeUpdate')
        // return null;
        // return this.refs.list?.scrollHeight
        return (this.refs.list as HTMLDivElement)?.scrollHeight;
    }
    render() {
        console.log('Demo-render')
        return (<ul className='list' ref='list'>
            {this.state.list.map((item, index) => {
                return <li key={index}>{item}</li>;
            })}
            {/* <li>新闻9</li>
            <li>新闻8</li>
            <li>新闻7</li>
            <li>新闻6</li>
            <li>新闻5</li>
            <li>新闻4</li>
            <li>新闻3</li>
            <li>新闻2</li>
            <li>新闻1</li> */}
        </ul>);
    }
}

export default Demo;