import Layout from "./components/layout/Layout";
import List from "./components/todos/List";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Layout>
      <List />
      <Footer />
    </Layout>
  );
}

export default App;
