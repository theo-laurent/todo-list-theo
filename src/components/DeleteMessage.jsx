export default function DeleteMessage(props) {
  const deleteMessage = function (e) {
    e.preventDefault();

    fetch(
      "http://localhost:4200/api/messages/" ||
        "https://todo-list-theo.herokuapp.com/api/messages/",
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: props.id }),
      }
    )
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        alert(data.message);
        props.setToggle(!props.toggle);
      })
      .catch(function (error) {
        alert(error);
      });
  };

  return (
    <button onClick={deleteMessage} className="btn btn-danger">
      Supprimer
    </button>
  );
}
