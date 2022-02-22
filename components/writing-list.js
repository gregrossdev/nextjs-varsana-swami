import React from "react";
import Writing from "./writing-item";


export default function Writings(props) {
  const { items } = props;
  console.log(items)

  return (
    <section style={{backgroundColor: `#fbfaf9`}} className="inner">
      
        {items.map((writing) => {
          return <Writing key={writing.title} {...writing} />;
        })}
     
    </section>
  );
};
