import React from "react";
import Tabs, { TabPannel } from './components/Tabs'

type AppProps = {};

export const App: React.FC<AppProps> = () => {

  return (
    <div>
      <Tabs initActiveTabKey="tab2">
        <TabPannel tabKey="tab1" label="基础页">
          tab1-基础页 <span>BAC</span>
        </TabPannel>
        <TabPannel tabKey="tab2" label="增强页">
          tab2-增强页
        </TabPannel>
        <TabPannel tabKey="tab3" label="扩展页">
          tab3-扩展页
        </TabPannel>
      </Tabs>
    </div>
  );
};
export default App;
