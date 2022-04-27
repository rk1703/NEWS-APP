import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const pageSize=9;
  const apiKey = 'izoWEOsWKAck2UgttmTP9zI1fgfGk2E2D2p8zx56VLU';
  // const apiKey = process.env.NEWSCATCHER_NEWS_API;
  // const apiKey = process.env.NEWSCATCHER_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [btnText, setBtnText] = useState("Enable DarkMode");

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      setBtnText("Enable LightMode");
      document.body.style.backgroundColor = "#063956";
    } else {
      setMode("light");
      setBtnText("Enable DarkMode");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    <>
      <Router>
        <Navbar mode={mode} togglemode={togglemode} btnText={btnText} />
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Switch>
          <Route exact path="/">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="news"
              topic="news"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/NEWS-APP">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="news"
              topic="news"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/beauty">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="beauty"
              topic="beauty"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/business">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="business"
              topic="business"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/economics">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="economics"
              topic="economics"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/energy">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="energy"
              topic="energy"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/entertainment">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="entertainment"
              topic="entertainment"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/finance">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="finance"
              topic="finance"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/food">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="food"
              topic="food"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/gaming">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="gaming"
              topic="gaming"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/music">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="music"
              topic="music"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/politics">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="politics"
              topic="politics"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/science">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="science"
              topic="science"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/sport">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="sport"
              topic="sport"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/tech">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="tech"
              topic="tech"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/travel">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="travel"
              topic="travel"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/world">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="world"
              topic="world"
              pageSize={pageSize}
            />{" "}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
