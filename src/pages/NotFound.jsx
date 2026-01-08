import { useNavigate } from "react-router-dom";
import error from "../img/notFound.jpg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="errorWrapper">
      <img src={error} alt="" />
      <div className="btnWrapper">
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/personnel")}>Go Back</button>
      </div>
    </div>
  );
};

export default NotFound;
