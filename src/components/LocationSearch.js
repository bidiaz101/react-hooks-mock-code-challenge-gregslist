import React, { useState } from "react"

function LocationSearch({setLocationSearch}) {
    const [input, setInput] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setLocationSearch(input)
    }

    return (
        <form className="searchbar" onSubmit={handleSubmit}>
            <input
                type="text"
                id="search"
                placeholder="search by location"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit">🔍</button>
        </form>
    )
}

export default LocationSearch