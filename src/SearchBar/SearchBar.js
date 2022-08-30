import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [userInput, setUserInput] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    console.log(userInput);
    setUserInput("");
    navigate('/cardVisual', {state: {input: userInput}});
  };

  return (
    <div className={styles.searchContainer}>
        <form className={styles.searchBarForm} onSubmit={handleClick}>
          <input
            type={"text"}
            placeholder="Enter a card name"
            className={styles.searchBar}
            value={userInput}
            onChange={handleChange}
          />
          <button type="submit" className={styles.searchBtn}>
            Search
          </button>
        </form>
    </div>
  );
};

export default SearchBar;
