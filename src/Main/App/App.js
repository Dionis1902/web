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


function App() {
    let [data, setData] = useState([]);
    let [loader, setLoader] = useState(true);


    useEffect(() => {
        onSnapshot(collection(db, "animals"), (animalsDocs)=>{
            setData(animalsDocs.docs.map((doc)=>{ return {id: doc.id, ...doc.data()}}));
            setLoader(false);
        })

    }, [])

    function getData(id) {
        return data.filter((element) => element.id == id)[0]
    }

    return (
        <Context.Provider value={{getData}}>
            <Router>
                <Navbar activate={0}/>

                <Routes>
                    <Route path="/" element={<Home data={data}/>}/>
                    <Route path="/catalog" element={<Catalog data={data}/>}/>
                    <Route path="/catalog/:id" element={ !loader && <ItemPage />}/>
                </Routes>
                {loader && <Loader />}
                <Footer/>
            </Router>
        </Context.Provider>
    );
}

export default App;
