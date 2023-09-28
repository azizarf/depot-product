import React from "react";
import Oneproduct from "./OneProduct.jsx"

const List = ({ items, getUpdate, handleDelete }) => {
  return (
    <div className="container">


      {items.map((e, i) => {
        return <Oneproduct e={e} key={i} getUpdate={getUpdate} index={i} handleDelete={handleDelete} />
      })}









    </div>
  )
};

export default List;
