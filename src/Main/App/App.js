import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import ItemPage from "../ItemPage/IteamPage";
import Context from "../context";
import {collection, onSnapshot, getDocs} from 'firebase/firestore';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {auth, db} from '../firebase';
import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux";
import Login from "../Autch/Login"
import Register from "../Autch/Register";
import LoginRoute from "../LoginRoute";
import {onAuthStateChanged} from 'firebase/auth';
import NoFound from "../NoFound";
import RestorePassword from "../Autch/RestorePassword";


function App() {
    let [data, setData] = useState([]);
    let [loader, setLoader] = useState(true);
    const cart = useSelector(state => state.cart)
    const [counter, setCounter] = useState(Object.values(cart).reduce((partial_sum, a) => partial_sum + a, 0))
    const [login, setLogin] = useState(false)

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setLogin(user.displayName)
                getDocs(collection(db, "animals")).then((animalsDocs) => {
                    setData(animalsDocs.docs.map((doc) => {
                        return {id: doc.id, ...doc.data()}
                    }));
                    setLoader(false)
                })
            } else
                setLoader(false)
        })

    }, [])


    function getData(id) {
        return data.filter((element) => element.id === id)[0]
    }

    if (loader)
        return (
            <div className="d-flex justify-content-center align-items-center"
                 style={{position: 'fixed', width: '100%', height: '100%', background: 'white', zIndex: '10000'}}>
                <Loader/>
            </div>
        )

    return (
        <Context.Provider value={{getData, counter, setCounter, db, login, loader, setLogin}}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/restore" element={<RestorePassword/>}/>
                    <Route path='/' element={<LoginRoute/>}>
                        <Route path="/" element={<Home data={data}/>}/>
                        <Route path="/catalog" element={<Catalog data={data}/>}/>
                        <Route path="/catalog/:id" element={<ItemPage/>}/>
                        <Route path="/cart" element={<Cart cart={cart}/>}/>
                    </Route>
                    <Route path="*" element={<NoFound error="404" text="Not found!" />}/>
                </Routes>
                <Footer/>
            </Router>
        </Context.Provider>
    )
}

export default App;
