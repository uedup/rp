import { ReactNode, useEffect, useState, ChangeEvent, useRef } from "react";

interface IProps {
  value: string;
  onChange: Function;
}

interface IState {
  value: string;
}

export const SpecialInput: React.FC<IProps> = (props) => {
  const [value, setValue] = useState(props.value);
  const propsRef = useRef(props);
  if (props !== propsRef.current) {
    setValue(props.value);
    propsRef.current = props;
  }
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target?.value);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <input value={value} onChange={onChange} onBlur={onBlur} />
    </>
  );
};

export default SpecialInput;
