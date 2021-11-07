import React, {useState} from "react";
import Item from "./Item";
import Heading from "../Header/Heading";

function Home({data}) {
    const [count, setCount] = useState(3)

    return (
        <div>
            <Heading/>
            <div className="text-center ">
                <div className="row justify-content-center">
                    <div className="row col-11 justify-content-center align-self-center mt-5">
                        {data.slice(0, count).map((element) =>
                            <Item element={element} key={element.id}/>
                        )}
                    </div>
                </div>
                {count < data.length ?
                    <button type="button" className="btn btn-outline-secondary" onClick={() => setCount(count + 3)}>View
                        more</button> : null
                }
            </div>
        </div>

    );
}

export default Home;