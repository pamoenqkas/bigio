import logo from "../logo.svg"; 
import "../App.css";
import StoryList from "./StoryList.js";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar.js";

function LandingPage() {
  return (
    <>
    <Sidebar/>
    <StoryList/>
    </>
  );
}

export default LandingPage;
