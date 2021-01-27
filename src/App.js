import React from "react";
import { Provider } from "react-redux";
import Lista from "./component/Lista";
import store from "./store";

const App = () => (
  <Provider store={store}>
    <main>
      <Lista />
    </main>
  </Provider>
);

export default App;
