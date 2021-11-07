import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import Catalog from "../Catalog/Catalog";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    const data = [
        {
            id: 1,
            title: "Scooter",
            img: "cat1",
            type: "cat",
            price: 12.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 2,
            title: "Leroy",
            img: "cat2",
            type: "cat",
            price: 100.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 3,
            title: "Gus",
            img: "cat3",
            type: "cat",
            price: 3456.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 4,
            title: "Teddy",
            img: "dog1",
            type: "dog",
            price: 23.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 5,
            title: "Shira",
            img: "dog2",
            type: "dog",
            price: 456.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 6,
            title: "Cluster",
            img: "dog3",
            type: "dog",
            price: 234.0,
            text: "Led m nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 7,
            title: "Hoagie",
            img: "parrot1",
            type: "parrot",
            price: 67.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 8,
            title: "Neon",
            img: "parrot2",
            type: "parrot",
            price: 12.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        },
        {
            id: 9,
            title: "Bongo",
            img: "turtle1",
            type: "turtle",
            price: 567.0,
            text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"
        }
    ]


    return (
        <Router>
            <Navbar activate={0}/>
            <Routes>
                <Route path="/" element={<Home data={data}/>}/>
                <Route path="/catalog" element={<Catalog data={data}/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
