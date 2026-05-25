import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./store/appStore";

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
        <Header></Header>
        <Body></Body>
      </Provider>
    </div>
  );
}

export default App;
