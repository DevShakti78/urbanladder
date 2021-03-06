import React from "react";
import "./orderSummary.css";
export const OrderSummary = () => {
  const tPrice = 10;
  let data = JSON.parse(localStorage.getItem("totalPr")) || null;
  let item = JSON.parse(localStorage.getItem("cart_section")) || null;
  let pData = item;
  return (
    <div>
      <div className="paySummary wSummary">
        <p className="sumBord newSumBoard">Order Summary</p>
        {pData.map((elem) => {
          return (
            <div className="priceDatacont">
              <div>
                <img src={elem.image} alt="" height="60px" width="90px" />
              </div>
              <div className="orderTitleSum">
                <p>{elem.name}</p>
                <p>₹{elem.MRP_price}</p>
              </div>
            </div>
          );
        })}

        <div className="priceDatacont">
          <div>Cart Total </div>
          <div>₹{data}</div>
        </div>
        <div className="priceDatacont">
          <div>Discounts </div>
          <div>-₹{0}</div>
        </div>
        <div className="priceDatacont">
          <div>Delivery Charges </div>
          <div
            style={{
              color: "#359d40",
              fontWeight: "bold",
            }}
          >
            FREE
          </div>
        </div>
        <div className="priceDatacont">
          <div>Total Payable Amount </div>
          <div>₹{data}</div>
        </div>
        <div className="priceDatacont">
          <div className="makeBold">Total Payable Amount </div>

          <div className="makeBold" color="black">
            ₹{data}
          </div>
        </div>
      </div>
    </div>
  );
};
