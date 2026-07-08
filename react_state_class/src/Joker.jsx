import { useState, useEffect } from "react";

export default function Joker() {
  let [joke, setJoke] = useState({});

  let getJoke = async () => {
    let url = "https://official-joke-api.appspot.com/random_joke";
    let res = fetch(url);
    let jsonResp = res.json();
    setJoke({ setup: jsonResp.setup, punchline: jsonResp.punchline });
  };

  useEffect(() => {
    let res = fetch(url);
    let jsonResp = res.json();
    setJoke({ setup: jsonResp.setup, punchline: jsonResp.punchline });
  }, []);

  return (
    <div>
      <h3>Joker!</h3>
      <h2>{joke.setup}</h2>
      <h2>{joke.punchline}</h2>
      <button onClick={getJoke}> Get new Joke</button>
    </div>
  );
}
