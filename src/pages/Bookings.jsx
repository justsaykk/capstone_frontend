import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function Bookings() {
  const [bookings, setBookings] = useState([]);

  // URLs
  // const BACKEND = process.env.REACT_APP_BACKEND;
  const BACKEND = process.env.REACT_APP_LOCAL_BACKEND;
  const navigate = useNavigate();

  // API Call
  const URL = BACKEND + "/api/bookings";
  useEffect(() => {
    fetch(URL, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("booking data:", data);
        setBookings(data);
      });
  }, []);

  // // Update API Call
  // function updateTrek(event) {
  //   fetch(URL + "/update", {
  //     method: "PUT",
  //     credentials: "include",
  //     body: JSON.stringify({
  //       id: event.id,
  //       trekDate: "01-Jan-2023", // to update to field
  //     }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }).catch((error) => {
  //     console.log({ Error: error });
  //   });
  // }

  // Delete API Call
  function deleteTrek(event) {
    fetch(URL + "/delete", {
      method: "DELETE",
      credentials: "include",
      body: JSON.stringify({
        id: event.id,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("deleted!");
      });
  }

  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>My Bookings</h1>
      </div>
      <div>
        <table>
          <tr>
            <th>Trek</th>
            <th>Date of Adventure</th>
            <th>Update Details</th>
            <th>Delete Adventure</th>
          </tr>
          {bookings.map((el) => {
            const product = el.product.pName;
            const trekDate = el.trekDate;
            console.log("event.id", )
            console.log("product", product);
            console.log("trekDate", trekDate);
            return (
              <tr>
                <td>{product}</td>
                <td>{trekDate}</td>
                <td>
                  <button /*onClick={updateTrek}*/>Update</button>
                </td>
                <td>
                  <button onClick={deleteTrek}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
