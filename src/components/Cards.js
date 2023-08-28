import React from "react";

export default function Cards(props) {
  let options = props.options;
  let optionprice = Object.keys(options);
  return (
    <div>
      <div className="card mt-3" style={{ width: "18rem" }}>
        <img src={props.imgsrc} className="card-img-top" alt="..." style={{height:"150px",objectFit:"fill"}} />
        <div className="card-body">
          <h5 className="card-title">{props.foodname}</h5>
          <p className="card-text">Some important content here.</p>
          <div className="container">
            <select className="m-2 h-100  bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select className="m-2 h-100  bg-success">
              {optionprice.map((data) => {
                return (
                  <option key={data} value={data}>
                    {data}
                  </option>
                );
              })}
            </select>
            <div className="d-inline h-100 fs-5">Total Price</div>
          </div>
        </div>
      </div>
    </div>
  );
}
