import React, { useState } from "react";

function ListingCard({
  description, 
  image, 
  location, 
  id,
  handleDelete
}) {
  const [liked, setLiked] = useState(false)

  function handleLike(){
    setLiked(!liked)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button 
            className="emoji-button favorite active"
            onClick={handleLike}
          >★</button>
        ) : (
          <button 
            className="emoji-button favorite"
            onClick={handleLike}
          >☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button 
          className="emoji-button delete"
          onClick={() => handleDelete(id)}
        >🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
