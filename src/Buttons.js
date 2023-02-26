function Buttons({filteredClothes}) {
    return (
        <div className="cont">
            <button className="change" onClick={() => filteredClothes("dress")}>Dresses</button>
            <button className="change" onClick={() => filteredClothes("skirts")}>Skirts</button>
            <button className="change" onClick={() => filteredClothes("pants")}>Pants</button>
            <button className="change" onClick={() => filteredClothes("shoes")}>Shoes</button>
            <button className="change" onClick={() => filteredClothes("shirts")}>Shirts</button>
        </div>
    )
}

export default Buttons