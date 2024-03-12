import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import ItemContainer from "./components/ItemContainer";
import UsersContainer from "./components/UsersContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <CakeContainer />
        <HooksCakeContainer />
        <IceCreamContainer />
        <ItemContainer cake />
        <ItemContainer />
        <UsersContainer />
      </div>
    </Provider>
  );
}

export default App;
