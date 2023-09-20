import React, { useContext } from "react";
import { Store } from "../contextapi/Store";
import { NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

function Bollywood() {
  const [data] = useContext(Store);
  console.log(data);
  return (
    <>
      <div className="bollywoodContainer">
        <div className="bollywoodLeft">
          <h1 className="bollywoodRightTitle">Bollywood</h1>
          {data
            .filter((item) => item.id >= 1 && item.id <= 9)
            .map((item, index) => {
              return (
                <div key={index} className="bollywoodLeftCard">
                  <NavLink to={`/Navigate/${item.id}`}>
                    <img
                      className="bollywoodLeftCardImage"
                      src={item.image}
                      alt="Not Found"
                    />
                    <div className="bollywoodLeftCardText">
                      <h2>{item.name}</h2>
                      <p>{item.text.slice(0, 155) + "....."}</p>
                    </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
        <div className="bollywoodRight">
          <h2 className="bollywoodRightTitle">Top Post</h2>
          {data
            .filter((item) => item.id >= 5 && item.id <= 9)
            .map((item, index) => {
              return (
                <>
                  <div key={index} className="bollywoodRightCard">
                    <NavLink to={`/Navigate/${item.id}`}>
                      <img
                        className="bollywoodRightCardImage"
                        src={item.image}
                        alt="Not Found"
                      />
                      <div className="bollywoodRightCardText">
                        <h2>{item.name}</h2>
                        <p>{item.text.slice(0, 155) + "....."}</p>
                      </div>
                    </NavLink>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Bollywood;
