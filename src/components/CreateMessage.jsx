import { useState } from "react";

export default function CreateMessage(props) {
  const [jour, setJour] = useState("");
  const [message, setMessage] = useState("");

  const submit = function (e) {
    e.preventDefault();

    fetch(
      "http://localhost:4200/api/messages/" ||
        "https://todo-list-theo.herokuapp.com/api/messages/",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ jour: jour, message: message }),
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        alert(data.message);
        setJour("");
        setMessage("");
        props.setRefresh(!props.refresh);
      })
      .catch(function (error) {
        return error;
      });
  };

  return (
    <div className="mx-auto col-10 col-sm-6 col-lg-4">
      <form onSubmit={submit}>
        <div className="form-group">
          <label htmlFor="inputJour">
            <h4>Titre ou jour :</h4>
          </label>
          <input
            required
            className="form-control mt-2"
            id="inputJour"
            value={jour}
            onChange={function (e) {
              setJour(e.target.value);
            }}
          />
        </div>
        <div className="form-group mt-2">
          <label htmlFor="inputMessage">
            <h4>Message :</h4>
          </label>
          <textarea
            required
            rows="4"
            className="form-control mt-2"
            id="inputMessage"
            value={message}
            onChange={function (e) {
              setMessage(e.target.value);
            }}
          />
        </div>
        <button className="btn btn-primary mt-3 mb-4">
          Ajouter à la liste
        </button>
      </form>
    </div>
  );
}
