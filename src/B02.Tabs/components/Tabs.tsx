import React, { useState, useEffect, ReactNode, cloneElement } from "react";
import styled from 'styled-components';

const TabsWrapper = styled.div`
  ul{
    height: 32px;
  }
  li{
    list-style: none;
    float: left;
  }
  .cur{
    color:red
  }
`;

type PannelPops = {
  actived?: string
  tabKey: string
  label: string
  children?: ReactNode
};

export const TabPannel: React.FC<PannelPops> = (props) => {
  const { tabKey, actived, children } = props
  return (
    (actived !== tabKey)?null:
    <div>
      {children}
    </div>
  );
}

type TabsProps = {
  initActiveTabKey: string
  children?: ReactNode[]
};
const Tabs: React.FC<TabsProps> = (props) => {
  const { initActiveTabKey, children } = props
  const [actived, setActived] = useState<string>(initActiveTabKey)
  const openTabs = (keyId: string) => {
    setActived(keyId)
  }
  console.log(children)
  return (
    <TabsWrapper>
      <ul>
        {!!children && children.map((item: any, index: number) => {
          return (<li key={index} onClick={() => { openTabs(item.props.tabKey) }}>
            <button className={actived === item.props.tabKey ? 'cur' : ''} >
              {item.props.label}
            </button>
          </li>)
        })}
      </ul>
      {/* {children?.map((item: any) => {
        return (actived === item.props.tabKey ? item : '')
      })} */}
      {children?.map((item: any) => cloneElement(item, {
        ...item.props,
        actived
      }))}

    </TabsWrapper>
  );
};
export default Tabs;
