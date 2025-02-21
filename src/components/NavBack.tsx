import { ArrowLeft } from "iconoir-react";
import { useNavigate } from "react-router-dom";

const NavBack = () => {
  const navigate = useNavigate();
  console.log(navigate)
  return (
    <button onClick={() => navigate(-1)}>
      <ArrowLeft></ArrowLeft>
    </button>
  );
};

export default NavBack;
