import { useState } from "react";
import "./App.css";
import Day1 from "./art/Day1";
import Day2 from "./art/Day2";
import Day3 from "./art/Day3";
import Day4 from "./art/Day4";
import Day5 from "./art/Day5";
import Day6 from "./art/Day6";
import Day7 from "./art/Day7";
import Day8 from "./art/Day8";
import Day9 from "./art/Day9";
import Day10 from "./art/Day10";
import Day11 from "./art/Day11";


function App() {
  const [index, setIndex] = useState(0);
  const [isClicked, setIsClicked] = useState(true);

  function incrementIndex() {
    if (index != artArray.length - 1) setIndex((prev) => prev + 1);
    else setIndex(0);
  }

  function decrementIndex() {
    if (index != 0) setIndex((prev) => prev - 1);
    else setIndex(artArray.length - 1);
  }

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    setTimeout(() => {
      setIsClicked((prev) => !prev);
    }, "100");
  };

  function refreshArt() {
    setArtArray([
      <Day1 />,
      <Day2 />,
      <Day3 />,
      <Day4 />,
      <Day5 />,
      <Day6 />,
      <Day7 />,
      <Day8 />,
      <Day9 />,
      <Day10 />,
      <Day11 />,
    ]);
  }

  const [artArray, setArtArray] = useState([
    <Day10 />,
    <Day1 />,
    <Day2 />,
    <Day3 />,
    <Day4 />,
    <Day5 />,
    <Day6 />,
    <Day7 />,
    <Day8 />,
    <Day9 />,
    <Day11 />,
  ]);

  return (
    <div className="flex h-screen justify-center items-center flex-col">
      {isClicked && artArray[index]}
      <div className="flex flex-row justify-between mt-10 navigation-container">
        <button onClick={decrementIndex}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>
        </button>
        <button onClick={handleClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
        <button onClick={incrementIndex}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default App;
