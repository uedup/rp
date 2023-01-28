import React, { ChangeEvent, Component } from "react";

interface IProps {
  value: string;
  onChange: Function;
}

interface IState {
  value: string;
}

class SpecialInput extends Component<IProps, IState> {
  state = {
    value: this.props.value,
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(this.props.onChange);
    this.props.onChange(e.target.value);
  };

  componentWillReceiveProps(nextProps: IProps) {
    this.setState({
      value: nextProps.value,
    });
  }

  render() {
    const { value } = this.state;

    return (
      <>
        <input value={value} onChange={this.onChange} onBlur={this.onBlur} />
        <p>
          组件需要在用户输入时有一个中间状态，当触发某个操作时再把中间结果提交给上层。以一个
          input为例，在过去我们通过
          componentWillReceiveProps在上层组件触发重绘时把数据同步到 state：
        </p>
      </>
    );
  }
}

export default SpecialInput;
