import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import ItemPage from "../ItemPage/IteamPage";
import Context from "../context";
import {collection, onSnapshot} from 'firebase/firestore';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import db from '../config';
import React, {useEffect, useState} from "react";
import Loader from "../Loader";
import Cart from "../Cart/Cart";
import {useSelector} from "react-redux";


function App() {
    let [data, setData] = useState([]);
    let [loader, setLoader] = useState(true);
    const cart = useSelector(state => state.cart)
    const [counter, setCounter] = useState(Object.values(cart).reduce((partial_sum, a) => partial_sum + a, 0))

    useEffect(() => {
        onSnapshot(collection(db, "animals"), (animalsDocs)=>{
            setData(animalsDocs.docs.map((doc)=>{ return {id: doc.id, ...doc.data()}}));
            setLoader(false);
        })

    }, [])

    function getData(id) {
        return data.filter((element) => element.id === id)[0]
    }

    return (
        <Context.Provider value={{getData, counter, setCounter, db}}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home data={ data }/>}/>
                    <Route path="/catalog" element={!loader && <Catalog data={ data }/>}/>
                    <Route path="/catalog/:id" element={ !loader && <ItemPage />}/>
                    <Route path="/cart" element={ !loader && <Cart cart={ cart } />}/>
                </Routes>
                {loader && <Loader />}
                <Footer/>
            </Router>
        </Context.Provider>
    );
}

export default App;
