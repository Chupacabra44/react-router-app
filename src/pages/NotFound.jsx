import error from "../img/notFound.jpg";

const NotFound = () => {
  return (
    <div className="errorWrapper">
      <img src={error} alt="" />
    </div>
  );
};

export default NotFound;
