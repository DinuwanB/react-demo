import ProductPage from "./components/grid list view/Product.page";
import { Layout, Typography } from "antd";
import React from "react";

const { Header, Content } = Layout;
const { Title } = Typography;
function App() {
  return (
    <>
      <Layout>
        <Header className="header">
          <Title
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "15px",
            }}
            level={3}
          >
            React Demo
          </Title>
        </Header>
        <Layout style={{ padding: "0 24px 24px",  }}>
          <Content>
            <ProductPage />
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
