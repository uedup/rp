import { Component } from "react";

interface IProps {}

interface IState {
  name: string;
  age: number;
}

class NavBar extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: "Tom",
      age: 12,
    };
  }
  UNSAFE_componentWillMount(): void {
    console.log("Demo-componentWillMount");
  }
  componentDidMount(): void {
    console.log("Demo-componentDidMount");
  }
  componentWillUnmount(): void {
    console.log("Demo-componentWillUnmount");
  }
  UNSAFE_componentWillReceiveProps(): void {
    console.log("Demo-componentWillReceiveProps");
  }
  shouldComponentUpdate(): boolean {
    console.log("Demo-shouldComponentUpdate");
    return true;
  }
  UNSAFE_componentWillUpdate(
    nextProps: Readonly<IProps>,
    nextState: Readonly<IState>,
    nextContext: any
  ): void {
    console.log("Demo-componentWillUpdate");
  }
  componentDidUpdate(
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>,
    snapshot?: any
  ): void {
    console.log("Demo-componentDidUpdate");
  }

  //新生命周期
  static getDerivedStateFromProps = (
    props: Readonly<IProps>,
    state: Readonly<IState>
  ) => {
    console.log("getDerivedStateFromProps", props, state);
    // return null;
    return {
      age: 109,
    };
  };

  getSnapshotBeforeUpdate = (
    prevProps: Readonly<IProps>,
    prevState: Readonly<IState>
  ) => {
    console.log("Demo-getSnapshotBeforeUpdate");
    // return null;
    return {
      name: 'Jery',
    };
  };

  render() {
    return (
      <div>
        {this.state.name}:{this.state.age}
      </div>
    );
  }
}

export default NavBar;
