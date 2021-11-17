import React from "react";
import Filters from "./Filters";
import Item from "../Home/Item";

function Catalog({data}) {
    const filter = {
        sort: new URLSearchParams(window.location.search).get("sort"),
        animal: new URLSearchParams(window.location.search).get("animal") ? new URLSearchParams(window.location.search).get("animal") : "",
        search: new URLSearchParams(window.location.search).get("search") ? new URLSearchParams(window.location.search).get("search"): ""
    }
    return (
        <div>
            <Filters/>
            <div className="text-center ">
                <div className="row justify-content-center ">
                    <div className="row col-11 justify-content-center align-self-center mt-5 " >
                        {
                            data.sort((a, b) => {return filter.sort ? (filter.sort === 'asc' ? a.price - b.price : b.price-a.price ) : 0;})
                                .filter((element) => element.type.includes(filter.animal))
                                .filter((element) => element.title.toLowerCase().includes(filter.search.toLowerCase()) || element.text.toLowerCase().includes(filter.search.toLowerCase()))
                                .map((element) => <Item element={element} catalog={true} key={element.id}/>
                            )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Catalog;