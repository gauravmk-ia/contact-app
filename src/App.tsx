import React from "react";
import { Provider } from "react-redux";
import store from "redux/store";
import { Contacts } from "views";

function App() {
  return (
    <Provider store={store}>
      <Contacts />
    </Provider>
  );
}

export default App;
