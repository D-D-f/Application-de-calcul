/* eslint-disable no-unused-vars */
// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
import { useForm } from "react-hook-form";
import "./Home.css";
import Path from "../../Path/Path.jsx";
import Navigation from "../../Component/Navigation/Navigation.jsx";

const Home = () => {
  return (
    <div className="home">
        <Navigation />
      <Path />
    </div>
  );
};

export default Home;
