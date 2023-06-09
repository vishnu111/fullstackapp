import React from "react";
import { useState, useEffect } from "react";
function Tweet() {
  useEffect(() => {
    fetchItems();
  }, []);
  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch("https://vishnuapp-node.onrender.com/tweets");
    const items = await data.json();
    setItems(items);
  };
  return (
    <section>
      {items.map((item) => {
        return (
          <div>
            <p>{item.name}</p>
            <p>{item.msg}</p>
            <p>{item.username}</p>
          </div>
        );
      })}
    </section>
  );
}
export default Tweet;
