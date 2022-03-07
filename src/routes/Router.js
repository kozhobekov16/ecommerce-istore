import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {About, Contacts, Home, Products, NotFound} from "../pages";
import {CardPhoneDetail} from "../components";

function Router({data}) {
    console.log(data)
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/contacts' element={<Contacts/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='/:title' element={<CardPhoneDetail/>}/>
        </Routes>
    )
}
export default Router