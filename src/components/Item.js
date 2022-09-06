import React from "react";

function Item({ item, onUpdateItem, onDeleteItem }) {

  function toggleCart(event) {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method:"PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        isInCart:!item.isInCart
      })
    }).then(r=>r.json()).then(data=>onUpdateItem(data))
  }

  function yeet() {
    fetch(`http://localhost:4000/items/${item.id}`, {
      method: "DELETE"
    }).then(r=>r.json()).then((()=>{onDeleteItem(item)}))
  }

  return (
    <li className={item.isInCart ? "in-cart" : ""}>
      <span>{item.name}</span>
      <span className="category">{item.category}</span>
      <button className={item.isInCart ? "remove" : "add"} onClick={toggleCart}>
        {item.isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button className="remove" onClick={yeet}>Delete</button>
    </li>
  );
}

export default Item;
