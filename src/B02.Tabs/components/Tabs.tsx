import React, { useState, useEffect, ReactNode, cloneElement, ReactElement } from "react";
import styled from 'styled-components';

const TabsWrapper = styled.div`
  ul{
    height: 32px;
    margin: 0;
    padding: 0;
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
    <div key={tabKey}>
      {children}
    </div>
  );
}

type TabsProps = {
  initActiveTabKey: string
  children?: ReactElement[]
};
const Tabs: React.FC<TabsProps> = (props) => {
  const { initActiveTabKey, children } = props
  const [actived, setActived] = useState<string>(initActiveTabKey)
  const openTabs = (keyId: string) => {
    setActived(keyId)
  }
  return (
    <TabsWrapper>
      <ul>
        {!!children && children.map((item: ReactElement, index: number) => {
          return (<li key={item.props.tabKey} onClick={() => { openTabs(item.props.tabKey) }}>
            <button className={actived === item.props.tabKey ? 'cur' : ''} >
              {item.props.label}
            </button>
          </li>)
        })}
      </ul>
      {/* {children?.map((item: any) => {
        return (actived === item.props.tabKey ? item : '')
      })} */}
      {children?.map((item: ReactElement) => cloneElement(item, {
        ...item.props,
        actived,
        key:item.props.tabKey
      }))}

    </TabsWrapper>
  );
};
export default Tabs;
