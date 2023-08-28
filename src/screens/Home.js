import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Cards from '../components/Cards';

export default function Home() {
  const [fooditem, setfooditem] = useState([]);
  const [foodcategory, setfoodcategory] = useState([]);
  const [search,setsearch] = useState("");

  const loaddata = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/displaydata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      setfooditem(response[0]);
      setfoodcategory(response[1]);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  useEffect(() => {
    loaddata();
  }, []);

  return (
    <div>
      <Navbar />
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
       
      >
        <div className="carousel-inner" id="carosal">
          <div className="carousel-caption" style={{"zIndex":"10"}}>
            <div className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={search}
                onChange={(e)=>setsearch(e.target.value)}
              />
              
            </div>
          </div>
          <div className="carousel-item active">
            <img
              src="https://source.unsplash.com/random/300×300/?burger"
              className="d-block w-100 "
              alt="..."
              style={{"filter" :"brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?pizza"
              className="d-block w-100"
              alt="..."
              style={{"filter" :"brightness(30%)" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://source.unsplash.com/random/300×300/?pasta"
              className="d-block w-100"
              alt="..."
              style={{"filter" :"brightness(30%)" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      <div className="container">
        {foodcategory.length !== 0 ? (
          foodcategory.map((category) => (
            <div className="fs-3 m-3 row mb-3" key={category._id}>
              {category.CategoryName}
              <hr></hr>
              {fooditem !== [] ? (
                fooditem
                  .filter((item) => item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search.toLocaleLowerCase()))
                  .map((item) => {
                    return (
                      <div className="col-12 col-md-6 col-lg-3"><Cards foodname = {item.name} options={item.options[0]}
                      imgsrc = {item.img}></Cards></div>
                    )
                  })
              ) : (
                <div>No items in this category</div>
              )}
            </div>
          ))
        ) : (
          <div>
            <hr />
            {fooditem.length !== 0 ? (
              fooditem.map((item) => (
                <div className="fs-3 m-3" key={item._id}>
                  {item.ItemName}
                </div>
              ))
            ) : (
              <div>No items available</div>
            )}
          </div>
        )}
      </div>
      {/* <div> <Cards></Cards></div> */}
      <Footer />
    </div>
  );
}
