import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({search}) {
  const [listingCards, setListingCards] = useState([])

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
    .then(() => setListingCards(listingCards.filter(listingObj => listingObj.id !== id)))
  }

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => {
      setListingCards(data)
    })
  }, [])

  const listingsToDisplay = listingCards.filter(listingObj => {
    if(search === "") {
      return true
    } else {
      return listingObj.description.toLowerCase().includes(search.toLowerCase())
    }
  }).map(listingObj => {
    return (
      <ListingCard 
        description={listingObj.description} 
        image={listingObj.image}
        location={listingObj.location} 
        id={listingObj.id}
        key={listingObj.id}
        handleDelete={handleDelete}
      />
    )
  })

  return (
    <main>
      <ul className="cards">
        {listingsToDisplay}
      </ul>
    </main>
  );
}

export default ListingsContainer;
