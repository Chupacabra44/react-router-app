import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const PersonnelDetail = () => {
  const [person, setPerson] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();
  // const { state: person } = useLocation();
  // console.log(person.name);

  const getPerson = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setPerson(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPerson();
  }, []);

  console.log(person);

  return (
    <div className="personWrapper">
      <h3>{person.name}</h3>
      <p>{person.address?.city}</p>
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/personnel")}>Go Back</button>
      </div>
    </div>
  );
};

export default PersonnelDetail;
