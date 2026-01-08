import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const PersonnelDetail = () => {
  const [person, setPerson] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { id } = useParams();
  // const { state: person } = useLocation();
  // console.log(person.name);

  const getPerson = () => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        if (!response.ok) {
          setError(true);
          setLoading(false);
          throw new Error("Something went wrong!");
        }
        return response.json();
      })

      .then((data) => {
        setLoading(false);
        setPerson(data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getPerson();
  }, []);

  // console.log(person);

  if (error) {
    return <NotFound />;
  }

  if (loading) {
    return (
      <div>
        <h3>Data Loading ...</h3>
      </div>
    );
  }

  if (!error && !loading) {
    return (
      <div className="personWrapper">
        <h3>{person?.name}</h3>
        <p>{person?.address.city}</p>
        <div className="btnWrapper">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/personnel")}>Go Back</button>
        </div>
      </div>
    );
  }
};

export default PersonnelDetail;
