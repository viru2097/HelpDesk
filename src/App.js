import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Complains from "./components/Complains";
import Contact from "./components/Contact";
import Navbar from "./components/Nav";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Register from "./Register";
import Login from "./components/Login";
import AdminRegister from "./components/Admin_registration";
import RegisterUser from "./components/UserRegistration";
import MyComplain from "./components/MyComplain";
import AdminComplains from "./components/AdminComplains";
import ErrorScreen from "./components/_404";

const GlobalStyle = createGlobalStyle`
body{
  background-color:${(props) =>
    props.theme.mode == "dark" ? '#ebf4f9' : "#fff"};
  color:${(props) => (props.theme.mode === "dark" ? "#000" : "#111")};
}
`;

const App = () => {
  const [theme, setTheme] = useState({ mode: "dark" });
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Navbar />
        <Switch>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/complains" component={Complains}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/UserRegistration" component={RegisterUser}></Route>
          <Route path="/Admin_registration" component={AdminRegister}></Route>
          <Route path="/myComplain" component={MyComplain}></Route>
          <Route path="/adminComplain" component={AdminComplains}></Route>
          <Route path="/error" component={ErrorScreen}></Route>
          <Redirect to="/error" component={ErrorScreen}></Redirect>
        </Switch>
      </>
    </ThemeProvider>
  );
};

export default App;
