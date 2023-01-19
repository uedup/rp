import { createContext, ReactNode, useState } from "react";

const delay = (ms: number) =>
  new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });

interface ContextModel {
  color: string;
  text: string;
}
const MODEL_ORIGION: ContextModel = {
  color: "#61dafd",
  text: "useContext",
};

export const DemoContext = createContext<any>({});

type AppProps = {
  children: ReactNode;
};

export const DemoContextProvider: React.FC<AppProps> = ({ children }) => {
  const [model, setModel] = useState<ContextModel>({ ...MODEL_ORIGION });
  // const [model, setModel] = useState<ContextModel>(MODEL_ORIGION)
  const setColor = (color: string) => {
    setModel({ ...model, color });
  };
  const setText = async (text: string) => {
    if (!text?.length) return;
    await delay(2000);
    setModel({ ...model, text });
  };
  // const setText = (text:string) => {
  //     setModel({...model,text})
  // }
  return (
    <DemoContext.Provider
      value={{
        model,
        setColor,
        setText,
      }}
    >
      {children}
    </DemoContext.Provider>
  );
};
