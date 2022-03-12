import React, { useState } from "react";
import { Header, Footer } from './components'
import 'bootstrap/dist/css/bootstrap.min.css'
import Router from "./routes/Router";
import './App.scss'
import {FaSun, FaMoon} from 'react-icons/fa'

function App() {
  const [change, setChange] = useState(true)
  const changeTheme = () => {
    setChange(prev => !prev)
  }
  return (
    <section className={change ? 'sun' : 'black'}>
      <Header changeTheme={changeTheme} Moon={FaMoon} change={change} Sun={FaSun}/>
      <Router />
      <Footer />
    </section>
  );
}

export default App;
