import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function Bookings() {
  const [bookings, setBookings] = useState();

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
      .then((res) => {
        res.json();
        console.log("booking server response:", res);
      })
      .then((data) => {
        console.log("booking data:", data);
        setBookings(data);
      });
  }, []);

  return (
    <div>
      <NavBar />
      <div id="header">
        <h1>My Bookings</h1>
      </div>
      <div>
        <table>
          <tr>
            <th></th>
          </tr>
        </table>
      </div>
    </div>
  );
}
