import { useEffect, useState } from "react";
// import module uuid pour créer key unique facilement
import { v4 as uuidv4 } from "uuid";
// import components
import DeleteMessage from "./DeleteMessage";

export default function GetMessages(props) {
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(true);

  useEffect(
    function () {
      fetch(
        window.location.hostname === "localhost"
          ? "http://localhost:4200/api/messages/"
          : "https://todo-list-theo.herokuapp.com/api/messages/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then(function (res) {
          return res.json();
        })
        .then(function (data) {
          setList(data);
        })
        .catch(function (error) {
          return error;
        });
    },
    [props.refresh, toggle]
  );

  return (
    <div>
      <h2 className="mb-4 text-center">Liste des choses à faires :</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {list.map(function (message) {
          return (
            <div className="card m-3 col-10 col-sm-10 col-lg-3" key={uuidv4()}>
              <h3 className="card-header">{message.jour}</h3>
              <div className="card-body">
                <p>{message.message}</p>
              </div>
              <div className="card-footer d-flex justify-content-end">
                <DeleteMessage
                  id={message._id}
                  toggle={toggle}
                  setToggle={setToggle}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
