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
              key="general"
              category="general"
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
              category="business"
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
              category="entertainment"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/health">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="health"
              category="health"
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
              category="science"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/sports">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="sports"
              category="sports"
              pageSize={pageSize}
            />{" "}
          </Route>
          <Route exact path="/technology">
            {" "}
            <News
              setProgress={setProgress}
              mode={mode}
              apiKey={apiKey}
              key="technology"
              category="technology"
              pageSize={pageSize}
            />{" "}
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
