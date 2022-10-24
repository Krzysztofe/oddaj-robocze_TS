import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import NavBar from "./Home/NavBar/NavBar";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Register from "./Login/Register";
import Logout from "./Login/Logout";
import ProtectedRouteOddajMain from "./OddajRzeczy/ProtectedRoute";
import GlobalContextProv from "./OddajRzeczy/Context/GlobalContextProv";

function App() {
    return (
            <BrowserRouter basename='/oddam_w_dobre_rece'>
                <NavBar/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/rejestracja' element={<Register/>}/>
                    <Route path='/logowanie' element={<Login/>}/>
                    <Route path='/wylogowano' element={<Logout/>}/>
                    <Route path='/oddaj'
                           element={
                               <GlobalContextProv>
                                   <ProtectedRouteOddajMain/>
                               </GlobalContextProv>
                           }/>
                </Routes>
            </BrowserRouter>
    );
}

export default App;
