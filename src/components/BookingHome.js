import '../styles/BookingHome.css'
import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyCytXhCQ2QBNVpvFj18wqfzXmwYHPofoAw",
  authDomain: "mykoffee-shop.firebaseapp.com",
  databaseURL: "https://mykoffee-shop-default-rtdb.firebaseio.com",
  projectId: "mykoffee-shop",
  storageBucket: "mykoffee-shop.appspot.com",
  messagingSenderId: "845295821213",
  appId: "1:845295821213:web:5260bb824845895407cf74",
  measurementId: "G-W28FNW1MF1"
  };
  const uid=uuid();
const app = initializeApp(firebaseConfig);
const database = getDatabase();
export default function BookingHome() {
    const [valid, setvalid] = useState(true)
    const [hide, sethide] = useState(true)
    const handleSubmit = (e) => {
        e.preventDefault();
        const book_date = document.getElementById('book-date');
        const book_time = document.getElementById('book-time');
        const book_name = document.getElementById('book-name');

        if(!book_date.value || !book_time.value || !book_name.value){
            alert('Please fill all the fields');
        }else{
            writeUserData();
            // const uid=uuid();
        function writeUserData() {
            // const db = getDatabase();
            set(ref(database, 'data/'), {
            bookingdate: book_date.value,
            bookingtime: book_time.value,
            bookingname:book_name.value,
            uniqueID:uid,
            });
        }
            alert('Your booking has been made and your unique id is : '+uid+" Save the uid");
            const BookPageDiv = document.querySelector('.box');
            const container = document.querySelector('.container');
            setvalid(!valid + BookPageDiv.classList.add("show"));
            sethide(!hide + container.classList.add("hide"));
        }
    }
  return (
    <div className='whole'>    
    <div className="container">
      <div className="content">
        <div className="text">Book Now</div>
        <div className="form2">
          <div className="txt">"Date, Time & Booking Name" you would like to Book</div>
          <form action="" onSubmit={handleSubmit}>
            <div className="inputData">
              <input type="date" name="" id="book-date"/>
            </div>
            <div className="inputData">
              <input type="time" name="" id="book-time" />
            </div>
            <div className="inputData">
              <input type="text" name="" autocomplete="off" placeholder='Enter Booking Name' id="book-name" />
            </div>
            <div className="book">
                <button type="submit">Book</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
}
