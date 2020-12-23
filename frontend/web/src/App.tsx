import { Layout } from "antd";

import "./App.css";

const App = () => {
  return (
    <Layout className="bg">
      <Layout.Header className="hdr"></Layout.Header>
      <Layout.Content className="cnt"></Layout.Content>
      <Layout.Footer className="ftr"></Layout.Footer>
    </Layout>
  );
};

export default App;
