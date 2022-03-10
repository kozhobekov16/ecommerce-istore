import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {About, Contacts, Home, Products, NotFound} from "../pages";
import {CardPhoneDetail} from "../components";
import Basket from "../pages/basket/Basket";

function Router() {
    return (
        <div style={{marginTop: '100px'}}>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/products' element={<Products/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                <Route path='/basket' element={<Basket/>}/>
                <Route path='/cardPhone/:id' element={<CardPhoneDetail/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </div>
    )
}

export default Router