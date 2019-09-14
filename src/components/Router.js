import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import EduPage from '../pages/EduPage.js';
import ExpPage from '../pages/ExpPage.js';
import TechPage from "../pages/TechPage.js";
import ProjPage from "../pages/ProjPage.js";
import NotFound from "./NotFound";
// import Style from '../styles.js'



const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/Education" component={EduPage}/>
      <Route path="/Experience" component={ExpPage}/>
      <Route path="/Technology" component={TechPage}/>
      <Route path="/Projects" component={ProjPage}/>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
