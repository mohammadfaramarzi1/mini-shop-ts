import { useRoutes } from "react-router-dom";
import Header from "./components/Header";
import routes from "./routes";
import "./App.css";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <Header />
      {router}
    </>
  );
}

export default App;
