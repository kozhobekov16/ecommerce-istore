import React from 'react'
import { Routes, Route } from 'react-router-dom'
import {
    About,
    Contacts,
    Home,
    NotFound,
    Catalog,
    Credit,
    Macbooks,
    MacbookDetail
} from "../pages";
import { CardPhoneDetail } from "../components";
import Basket from "../pages/basket/Basket";

function Router() {
    return (
        <div style={{ marginTop: '7.9rem' }}>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/catalog/:macbooks' element={<Macbooks />} />
                <Route path='/catalog/:macbooks/:name' element={<MacbookDetail />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/credit' element={<Credit />} />
                <Route path='/cardPhone/:id' element={<CardPhoneDetail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Router