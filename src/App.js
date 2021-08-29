import axios from "axios";

export default function App() {
  const options = {
    method: "GET",
    url: "https://dad-jokes.p.rapidapi.com/random/joke/png",
    headers: {
      "x-rapidapi-host": "dad-jokes.p.rapidapi.com",
      "x-rapidapi-key": process.env.REACT_APP_API_KEY,
    },
  };

  const call = () => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.body.setup);
        console.log(response.data.body.punchline);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={() => call()}>call</button>
    </div>
  );
}
