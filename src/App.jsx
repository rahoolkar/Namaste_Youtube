import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import reduxStore from "./utils/reduxStore";
import { Provider } from "react-redux";

function App() {
  return (
    <div>
      <Provider store={reduxStore}>
        <Header></Header>
        <Body></Body>
      </Provider>
    </div>
  );
}

export default App;
