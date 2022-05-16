import React from "react";
import Route from "./src/navigation/Route";
import Context from "./src/context/Context";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <Context>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </Context>
  );
};

export default App;
