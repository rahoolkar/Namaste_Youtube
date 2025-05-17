import "./App.css";
import Header from "./components/Header";
import reduxStore from "./utils/reduxStore";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <Provider store={reduxStore}>
        <Header></Header>
        <Outlet></Outlet>
      </Provider>
    </div>
  );
}

export default App;
