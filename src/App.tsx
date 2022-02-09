import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "redux/store";
import Contacts from "components/contacts/contacts";

function App() {
  return (
    <Provider store={store}>
      <Contacts/>
    </Provider>
  );
}

export default App;
