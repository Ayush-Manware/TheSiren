import React, { useContext } from "react";
import { Store } from "../contextapi/Store";
import { Link , NavLink } from "react-router-dom";
import Footer from "../footer/Footer";

function Home() {
  const [data] = useContext(Store);
  console.log(data);
  return (
    <>
      <div className="homeContainer">
        <div className="bannerDivContainer">
          <div className="imageOne"></div>
          <div className="bannerImgTwo">
            <div className="imageTwo"></div>
            <div className="imageThree"></div>
          </div>
        </div>

        {
          <div className="homeLatestContainer">
            <h2 className="theLatest">The Latest</h2>
            <div className="LatestDiv">
              {data
                .filter((item) => item.id >= 1 && item.id <= 3)
                .map((item, index) => {
                  return (
                    <div key={index} className="latestCard">
                      <NavLink to={`/Navigate/${item.id}`}>
                        <img
                          className="latestCardImage"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="latestCardText">
                          <h2>{item.name}</h2>
                          <p>{item.text.slice(0, 50)}</p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          </div>
        }

        <div className="homeLatestArticle">
          <h1 className="homeLatest">Latest Article</h1>
          <div className="homeLatestDivContainer">
            <div className="homeLatestDiv bollywoodLeftCard">
              {data
                .filter((item) => item.id >= 11 && item.id <= 15)
                .map((item, index) => {
                  return (
                    <div key={index}>
                      <NavLink
                        to={`/Navigate/${item.id}`}
                        className={"HomeLatestCard"}
                      >
                        <img
                          className="latestArticleCardImage"
                          src={item.image}
                          alt="Not Found"
                        />
                        <div className="latestArticleText">
                          <h2 className="latestArticleheading">{item.name}</h2>
                          <p className="latestArticlepara">
                            {item.text.slice(0, 120)}
                          </p>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
            <div className="homeAdvertisement">
              <h2>Advertisement</h2>
            </div>
          </div>
        </div>

        <div className="homeTopPost">
          <div className="homeTopPostContainer">
            <h1 className="topPostHeading">Top Post</h1>
            <div className="homeTopPostDivContainer">
              <div className="topPostFristDiv">&nbsp;</div>
              <div className="topPostBelowContainer bollywoodLeftCard">
                {data
                  .filter((item) => item.id >= 41 && item.id <= 44)
                  .map((item, index) => {
                    return (
                      <div key={index}>
                        <NavLink
                          to={`/Navigate/${item.id}`}
                          className={"HomeLatestCard"}
                        >
                          <img
                            className="latestArticleCardImage"
                            src={item.image}
                            alt="Not Found"
                          />
                          <div className="latestArticleText">
                            <h2 className="latestArticleheading">
                              {item.name}
                            </h2>
                            <p className="latestArticlepara">
                              {item.text.slice(0, 100)}
                            </p>
                          </div>
                          <div className="topPostNumber">
                            <h1>{index + 1}</h1>
                          </div>
                        </NavLink>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>

        <Footer />

      </div>
    </>
  );
}

export default Home;
