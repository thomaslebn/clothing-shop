import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

import Header from "./components/header/header";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);

      console.log(user);

      return () => {
        unsubscribeFromAuth();
      };
    });
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
