import React from "react";
import axios from "axios";
import SEO from "../components/SEO";

export default function Home() {
  function handleSubmit(event) {
    event.preventDefault();
    const text = (document.querySelector("#char-input") as HTMLInputElement).value;
    console.log(`input - ${text}`);

    axios
      .get(`/char_count/?text=${text}`)
      .then(({ data }) => {
        (document.querySelector(
          "#char-count"
        ) as HTMLInputElement).textContent = `${data.count} characters!`;
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <SEO
        title="Front-end"
        description="A starter template for building Next.js + Django RF + Docker web apps."
      />
      <main id="top" className='flex flex-col justify-center items-center h-screen w-screen bg-gray-800 text-white text-2xl space-y-12'>
        <img src="/logo.svg" className="h-96" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <label htmlFor="char-input">How many characters does </label>
          <input id="char-input" type="text" placeholder="my string" />
          <span> </span>
          <button className='button' onClick={handleSubmit}>have?</button>
          <div>
            <h3 id="char-count" data-testid="char-count">
              {" "}
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}
