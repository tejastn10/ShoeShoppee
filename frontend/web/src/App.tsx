import { Layout } from "antd";

import "./App.css";

import { Header } from "./components/Header";

const App = () => {
  return (
    <Layout className="bg">
      <Layout.Header className="hdr">
        <Header />
      </Layout.Header>
      <Layout.Content className="cnt"></Layout.Content>
      <Layout.Footer className="ftr"></Layout.Footer>
    </Layout>
  );
};

export default App;
