import React from "react";
import { Provider } from "react-redux";
import Home from "./features/home/presentation/screens/home_screen";
import { useStore } from "./commons/redux/store";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DetailScreen from "./features/home/presentation/screens/detail_screen";



function App() {
  const store = useStore({});
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/detail/:colorId" component={DetailScreen} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}
export default App;
