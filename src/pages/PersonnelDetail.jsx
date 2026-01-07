import { useParams, useLocation } from "react-router-dom";

const PersonnelDetail = () => {
  const { id } = useParams();
  const { state } = useLocation();
  console.log(id);
  console.log(state);
  return <div>PersonnelDetail</div>;
};

export default PersonnelDetail;
