import React from "react";
import {Header} from './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from "./routes/Router";

function App() {
  return (
    <section className="App">
      <Header/>
       <Router/>
    </section>
  );
}

export default App;
