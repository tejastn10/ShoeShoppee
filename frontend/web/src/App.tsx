import { Layout } from "antd";

import "./App.css";

import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Routes } from "./routes/Routes";

const App = () => {
  return (
    <Layout className="bg">
      <Layout.Header className="hdr">
        <Header />
      </Layout.Header>
      <Layout.Content className="cnt">
        <Routes />
      </Layout.Content>
      <Layout.Footer className="ftr">
        <Footer />
      </Layout.Footer>
    </Layout>
  );
};

export default App;
