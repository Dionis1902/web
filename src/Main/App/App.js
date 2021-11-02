import Navbar from "../Header/Navbar";
import Heading from "../Header/Heading";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";

function App() {
    const data  = [
        {id: 1, title: "Scooter", img: "cat1", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 2, title: "Leroy", img: "cat2", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 3, title: "Gus", img: "cat3", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 4, title: "Teddy", img: "dog1", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 5, title: "Shira", img: "dog2", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 6, title: "Cluster", img: "dog3", text: "Led m nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 7, title: "Hoagie", img: "parrot1", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 8, title: "Neon", img: "parrot2", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"},
        {id: 9, title: "Bongo", img: "turtle1", text: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address. The its enable direct men depend highly. Ham windows sixteen who inquiry fortune demands"}
    ]


    return (
        <div>
            <Navbar activate={0}/>
            <Heading/>
            <Content data={data}/>
            <Footer/>
        </div>
    );
}

export default App;
