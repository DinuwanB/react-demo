import { Layout, Typography } from "antd";
import GridListView from "./components/Grid List View/GridListView";
import SpeedTestPage from "./components/speedtest/SpeedTestPage";
const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
  return (
    <>
      <Layout>
        {/* <Header className="header">
          <Title
            level={3}
            style={{ color: "white", textAlign: "center", marginTop: "15px" }}
          >
            React Demo
          </Title>
        </Header> */}
        <Layout style={{ padding: "0 24px 24px", marginTop:100, height: "100vh" }}>
          <Content>
            <SpeedTestPage/>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
