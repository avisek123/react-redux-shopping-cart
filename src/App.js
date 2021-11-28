import React from "react";
import { Provider } from "react-redux";
import Router from "../src/Router";
import store from "./redux/store";
import Form from "./components/Form";

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Form /> */}
        <Router />
      </div>
    </Provider>
  );
}

export default App;
