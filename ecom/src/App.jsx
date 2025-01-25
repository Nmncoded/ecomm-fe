import {  useState } from "react";
import "./App.scss";
import AppRouter from "./routes";
import { ConfigProvider } from "antd";

const defaultData = {
  borderRadius: 6,
  colorPrimary: '#1677ff',
  Button: {
    colorPrimary: '#00B96B',
  },
  header: {
    primary: '#7047EB',
  },
  sidebar: {
    primary: '#fff',
  }
};

function App() {
  const [theme] = useState(defaultData);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.colorPrimary,
          borderRadius: theme.borderRadius,
          globalHeaderColor: theme?.header?.primary,
          globalSidebarColor: theme?.sidebar?.primary,
        },
        components: {
          Button: {
            borderRadius:'4px',
          },
          Form:{
            labelColor:'#2D2939',
            labelFontSize:'16px',
          },
          Collapse:{
            contentPadding:'30px'
          },
          Typography: {
            titleMarginBottom: '0px',
            color: `#2D2939`,
            fontFamily: `Roboto Flex`,
            fontStyle: `normal`,
            fontWeight: `200`,
            lineHeight: `normal`,

          }
        },
      }}
    >
      <AppRouter />
    </ConfigProvider>
  )
}

export default App;