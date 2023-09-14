import React, { useContext } from "react";
import { Store } from "../contextapi/Store";
import { use } from "../contextapi/Store";

function Home() {
  const [data] = useContext(Store);
  console.log(data);
  return (
    <>
      <div className="homeContainer">
        {/* {
            data.filter((item))
        } */}






        {/* Name */}

        {data
          .filter((item) => item.category === "Bollywood")
          .map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        <h1>This is Home Page</h1>
      </div>
    </>
  );
}

export default Home;
