import React, { Component } from "react";

interface IProps {
  search?: string;
  onChange?: Function;
}

interface IState {
  search: string;
}

class SomeSearchableComponent extends Component<IProps, IState> {
  state = {
    search: this.props.search || "",
  };

  // getSearch() {
  //   if (typeof this.props.search === "string") {
  //     return this.props.search;
  //   }

  //   return this.state.search;
  // }
  static getDerivedStateFromProps(nextProps:IProps) {
    if (typeof nextProps.search === "string") {
      return {
        search: nextProps.search,
      };
    }
    return null;
  }
  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;

    if (onChange) {
      onChange(e.target.value);
    } else {
      this.setState({
        search: e.target.value,
      });
    }
  };

  render() {
    return <input value={this.state.search} onChange={this.onChange} />;
  }
}
export default SomeSearchableComponent;
