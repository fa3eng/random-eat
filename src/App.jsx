import { hot } from "react-hot-loader/root";
import React from "react";
import { Provider } from "react-redux";

import { LubanRouter } from "luban-router";
import { config } from "@/route/config";

import { store } from "@/models";

const App = () => {
  return (
    <Provider store={store}>
      <LubanRouter config={config} />
    </Provider>
  );
};

export default hot(App);
