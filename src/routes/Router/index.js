import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import TripDetailsPage from "../../pages/TripDetailsPage";
import CreateTripPage from "../../pages/CreateTripPage";
import LoginPage from "../../pages/LoginPage";
import AdminHomePage from "../../pages/AdminHomePage";
import FormAppPage from "../../pages/FormAppPage";
import ErrorPage from "../../pages/ErrorPage";
import ListTripPage from "../../pages/ListTripPage";

export default function Router() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/viagens" exact component={ListTripPage} />
        <Route path="/viagens/inscrever" exact component={FormAppPage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/admin" exact component={AdminHomePage} />
        <Route
          path="/admin/viagens/criarviagem"
          exact
          component={CreateTripPage}
        />
        <Route path="/admin/viagens/:id" exact component={TripDetailsPage} />
        <Route>
          {" "}
          <ErrorPage />
        </Route>
      </Switch>
    </div>
  );
}
