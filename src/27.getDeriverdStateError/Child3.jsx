import React from "react";

const Child3 = (props) => {
  const val = {
    books: [
      {
        id: "005",
        title: "Three.js",
      },
      {
        id: "006",
        title: "Next.js",
      },
    ],
  };
  React.useEffect(() => {
    console.log(1);
    // props.a.b;
    console.log(2);
  }, [props.a.b]);

  return (
    <>
      <h4>Child3 Component</h4>
      <ul>
        {val.book.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </>
  );
};


export default Child3 
