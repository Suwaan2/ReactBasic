// import { Fragment } from "react/jsx-runtime";
// import { MouseEvent } from "react";
//Using props to pass the data to our componets it uses 2 parameters 
//{ items: string[], heading: string}

interface Props{
  item: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

import { useState } from "react";

function ListGroup({item, heading, onSelectItem}: Props) {
  //   item = [];
//   let selectedIndex = 0;
  //Hook
  const [selectedIndex, newSelectedIndex] = useState(-1)

  //   const Message = i tems.length === 0 ? <p>No item Found</p> : null;
  //   EventHandler
  //   const handelClick = (event: MouseEvent)=> console.log(event)

  return (
    <>
      <h1>{heading}</h1>
      {/* {Message} */}
      {item.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {item.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              newSelectedIndex(index);
              onSelectItem(item)
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
