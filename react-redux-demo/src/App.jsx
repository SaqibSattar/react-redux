import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
