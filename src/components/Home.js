import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <>
      <Link to="/form">
        <button>Create</button>
      </Link>
    </>
  );
};
