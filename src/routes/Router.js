import React from 'react'
import './Router.scss'
import { Routes, Route } from 'react-router-dom'
import {
    About,
    Contacts,
    Home,
    NotFound,
    Catalog,
    Credit,
    Macbooks,
    MacbookDetail,
    Iphone,
    Basket,
    Watches,
    WatchesDetail
} from "../pages";
import { CardPhoneDetail } from "../components";

function Router() {
    return (
        <div className="router">
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contacts' element={<Contacts />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/catalog/Mac' element={<Macbooks />} />
                <Route path='/catalog/:macbooks/:name' element={<MacbookDetail />} />
                <Route path='/catalog/iphone' element={<Iphone />} />
                <Route path='/basket' element={<Basket />} />
                <Route path='/catalog/Watch' element={<Watches/>}/>
                <Route path='/catalog/Watch/:name' element={<WatchesDetail/>}/>
                <Route path='/credit' element={<Credit />} />
                <Route path='/cardPhone/:id' element={<CardPhoneDetail />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default Router