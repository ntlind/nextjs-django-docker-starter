import Head from "next/head";

import React, { useEffect } from "react";
import axios from "axios";

require("dotenv").config();

export default function Home() {
  function handleSubmit(event) {
    event.preventDefault();
    const text = document.querySelector("#char-input").value;
    console.log(`input - ${text}`);

    axios
      .get(`/char_count/?text=${text}`)
      .then(({ data }) => {
        document.querySelector(
          "#char-count"
        ).textContent = `${data.count} characters!`;
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <Head>
        <title>Next.js React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="/logo.svg" className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <label htmlFor="char-input">How many characters does </label>
          <input id="char-input" type="text" placeholder="my string" />
          <span> </span>
          <button onClick={handleSubmit}>have?</button>
          <div>
            <h3 id="char-count" data-testid="char-count">
              {" "}
            </h3>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
