import React, { ChangeEvent, Component } from "react";

interface IProps {
  value: string;
  onChange: Function;
}

interface IState {
  prevProps?:IProps
  value: string;
}

class SpecialInput extends Component<IProps, IState> {
  state = {
    prevProps: this.props,
    value: this.props.value,
  };

  onChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
  };

  onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(e.target.value);
  };

  static getDerivedStateFromProps(nextProps: IProps, { prevProps }:IState) {
    if (nextProps !== prevProps) {
      return {
        prevProps: nextProps,
        value: nextProps.value,
      };
    } else {
      console.log("props 没有更新");
      return null;
    }
  }
  render() {
    const { value } = this.state;

    return (
      <>
        <input value={value} onChange={this.onChange} onBlur={this.onBlur} />
        <p>
          而上层组件更新和组件本身 setState都会触发
          getDerivedStateFromProps，我们可以通过比较
          props是不是同一个对象来知道这次更新是由上层触发的还是组件本身触发的，当
          props不是同一个对象时，说明这次更新来自上层组件，例如：
        </p>
      </>
    );
  }
}

export default SpecialInput;
