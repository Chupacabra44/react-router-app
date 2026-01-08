import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Personnel = () => {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  const getPeople = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setPeople(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div className="personnelWrapper">
      <h1>Personnel List</h1>
      <div className="cardWrapper">
        {people.map((person) => {
          const { id, name, address } = person;
          return (
            <div className="personnelCard" key={id}>
              <p>{name}</p>
              <p>{address.city}</p>
              <button onClick={() => navigate(`/personnel/${id}`)}>
                Detail
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Personnel;
