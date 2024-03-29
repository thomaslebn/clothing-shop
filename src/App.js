import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import "./App.css";

import Header from "./components/header/header";

import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInSignUp from "./pages/sign-in-sign-up/sign-in-sign-up";
import CheckoutPage from "./pages/checkout/checkout";

function App(props) {
  const { setCurrentUser } = props;
  useEffect(() => {
    let unsubscribeFromAuth = null;

    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShop) => {
          setCurrentUser({
            id: snapShop.id,
            ...snapShop.data(),
          });
        });
      }

      setCurrentUser(userAuth);

      return () => {
        unsubscribeFromAuth();
      };
    });
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            props.currentUser ? <Redirect to="/" /> : <SignInSignUp />
          }
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
