import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "🚵": "Person Mountain Biking",
  "🤼‍♂️": "Men Wrestling",
  "🤽‍♀️": "Woman Playing Water Polo",
  "🏂": "Snowboarder",
  "🏌️‍♀️": "Woman Golfing",
  "🏋️‍♂️": "Man Lifting Weights",
  "⛷️": "Skier",
  "🚴": "Person Biking"
};

export default function App() {
  var emojies = Object.keys(emojiDictionary);
  const [userInput, setUserInput] = useState("");

  function inputHandler(event) {
    var input = event.target.value;
    if (input in emojiDictionary) {
      setUserInput(emojiDictionary[input]);
    } else if (input === "") {
      setUserInput("");
    } else {
      setUserInput("Emojie not present in the database");
    }
  }

  function clickInputHandler(emoji) {
    setUserInput(emojiDictionary[emoji]);
  }
  return (
    <div className="App">
      <header className="header">
        <h1> Emoji Translator </h1>
      </header>
      <input
        onChange={inputHandler}
        placeholder="Paste emoji to know it's meaning"
      ></input>
      <h3> {userInput} </h3>
      <h2> Emojies We Know </h2>
      <div className="container-emoji">
        {emojies.map((emoji) => {
          return (
            <span onClick={() => clickInputHandler(emoji)} key={emoji}>
              {" "}
              {emoji}{" "}
            </span>
          );
        })}

        <footer>
          <ul className="list-inline">
            <li>
              <a
                href="https://github.com/Mananjot/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mananjot-singh-kohli-b349a4185/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/singh_mananjot"
                target="_blank"
                rel="noreferrer"
              >
                <i class="fab fa-twitter-square"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
}
