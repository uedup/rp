import { ReactNode, useEffect, useState, ChangeEvent, useRef } from "react";

interface IProps {
  search?: string;
  onChange?: Function;
}

interface IState {
  search: string;
}

export const SomeSearchableComponent: React.FC<IProps> = (props) => {
  const [search, setSearch] = useState(props.search);
  const getSearch = () => {
    if (typeof props.search === "string") {
      return props.search;
    }
    return search;
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = props;

    if (onChange) {
      onChange(e.target.value);
    } else {
      setSearch(e.target.value);
    }
  };
  return <input value={getSearch()} onChange={onChange} />;
};

export default SomeSearchableComponent;