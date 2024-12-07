import React, { useState } from "react";
import { TabButton, Header, Content, TabListItem } from "./styles";

function Tabs({ tabs = [], maxContentHeiht }) {
  const [selectIndex, setSelectIndex] = useState(0);
  return (
    <>
      <div>
        <Header>
          {tabs.map((tab, index) => (
            <TabListItem key={`tab${index * 10}`}>
              <TabButton
                $isSelect={selectIndex === index}
                {...(selectIndex === index
                  ? { as: "span" }
                  : {
                      onClick: () => {
                        setSelectIndex(index);
                      },
                    })}
              >
                {tab.title}
              </TabButton>
            </TabListItem>
          ))}
        </Header>
        <Content $maxContentHeiht={maxContentHeiht}>
          {tabs[selectIndex].content}
        </Content>
      </div>
    </>
  );
}

export default Tabs;
