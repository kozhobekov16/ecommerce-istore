import React from "react";
import {Routes, Route} from 'react-router-dom'
import {Header} from './components'
import {Home, About, Contacts, Products} from "./pages";
function App() {
  return (
    <section className="App">
      <Header/>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
    </section>
  );
}

export default App;
