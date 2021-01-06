import React, { useState, useEffect } from "react";
import Beerbtn from "./components/Beerbtn";
import Listbeer from "./components/Listbeer";
import Beerlistcard from "./components/Beerlistcard";
import Gotosearchbtn from "./components/Gotosearchbtn";
import { motion } from 'framer-motion'
import "./Beer.css";

function Beerapp() {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [beerfind, setBeerfind] = useState([]);
  const [allbeers, setAllbeers] = useState([]);

  useEffect(() => {
    getBeers();
  }, [page]); // eslint-disable-line react-hooks/exhaustive-deps

  async function getBeers() {
    const res = await fetch(
      `https://api.punkapi.com/v2/beers?page=${page}&per_page=10`
    );
    const data = await res.json();

    setBeers(data);
    setAllbeers(allbeers.concat(data));
    setBeerfind(data); // Last 10 beers!!!!!!!!!
  }
  useEffect(() => {
    // console.clear()
    // console.log(allbeers);
  }, [allbeers]);

  const footer = () => {
    return (
      <h3
        style={{
          margin: "10px 20px",
        }}
      >
        <a
          style={{
            textShadow: "3px 3px 5px black",
            textDecoration: "none",
            color: "white",
            fontSize: "20px",
          }}
          href='https://www.google.com'
        >
          Made by: Elad bar 2020{" "}
          <span role='img' aria-label='smile'>
            😆
          </span>
        </a>
      </h3>
    );
  };

  const beerFilter = (e) => {
    e.preventDefault();
    // console.log(search)
    // console.log(allbeers)
    if (search !== "") {
      const filteredArry = allbeers.filter((beer) =>
        beer.name.toLowerCase().includes(search.toLowerCase())
      );
      // console.log(filteredArry);
      setBeers(filteredArry);
      window.location.href = "#beerbtn";
    }
    setSearch("");
  };
  const newRender = () => {
    setBeers(beerfind);
    // console.log("beerfind:", beerfind);
    window.location.href = "#beerbtn";
  };
  const showallbeers = () => {
    setBeers(allbeers);
    window.location.href = "#beerbtn";
  };

  return (
    <motion.div className='beerapp'
      initial={{
        y:-100,
        opacity:0,
      }}
      animate={{
        y:0,
        opacity:1,
        
      }}
      transition={{
        type:"spring",
        stiffness:800,
        delay:1,
        ease: "easeOut"
      }}
    >
      <div className='btn-cont'>
        <div className="upper-btn">
          <div
            id='beerbtn'
            onClick={() => {
              window.location.href = "#beerbtn";
              if (page === 33) {
                // LAST PAGE OF BEERS
                setPage(1);
                setBeers([]);
                setAllbeers([]);
                window.location.href = "#beerbtn";
              } else {
                setPage(page + 1);
              }
              // console.log(page);
            }}
          >
            <Beerbtn />
          </div>
        </div>
        <div
          className='beerbtn'
          onClick={() => {
            window.location.href = "#searchbar";
          }}
        >
          <Gotosearchbtn />
        </div>
      </div>
      <h1 style={{ marginBottom: '5px' }}>
        Displayed Beers in the page:{" "}
        <span style={{ borderBottom: " 5px solid lime" }}>{beers.length}</span>{" "}
      </h1>
      <h1>
        Total beers viewed so far:{" "}
        <span style={{ borderBottom: " 5px solid lime" }}>
          {allbeers.length}
        </span>{" "}
      </h1>
      <img src={require('../src/img01.gif')} alt="beer" style={{ height: '100px', width: '100px' }} />
      <Listbeer beers={beers} />
      <div id='searchbar'>
        <form onSubmit={beerFilter} className='form'>
          <input
            className='input-beer'
            id='inputbeer'
            type='text'
            placeholder='Type in a Beer name...🍻'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          ></input>
          <button className='search-btn'>Search</button>
          <button
            className='search-btn'
            style={{ marginLeft: "10px" }}
            onClick={newRender}
          >
            Go to last 10 Beer's!
          </button>
          <button
            style={{ marginLeft: "10px" }}
            className='search-btn'
            onClick={showallbeers}
          >
            Show All beers
          </button>
          <button
            className='search-btn'
            style={{ marginLeft: "10px" }}
            onClick={() => {
              if (page !== 1) {
                setPage(1);
                setBeers([]);
                setAllbeers([]);
                window.location.href = "#beerbtn";
              }
              // console.log(page);
            }}
          >
            Clear Screen
          </button>
        </form>
      </div>
      <Beerlistcard allbeers={allbeers} />
      <a className='search-a' href='#beerbtn' style={{ marginTop: "10px" }}>
        Go to top
      </a>

      {footer()}
    </motion.div>
  );
}

export default Beerapp;
