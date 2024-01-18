import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./components/LandingPage"; 
import AddStory from "./components/AddStory";
import EditStory from "./components/EditStory";
import AddChapter from "./components/AddChapter";
import ViewStory from "./components/ViewStory";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="add" element={<AddStory/>}/>
        <Route path="addChapter" element={<AddChapter/>}/>
        <Route path="edit/:id" element={<EditStory/>}/>
        <Route path="view/:id" element={<ViewStory/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;