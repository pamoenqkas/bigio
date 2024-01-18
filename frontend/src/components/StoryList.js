import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineEllipsis } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logo.svg";
import { AiTwotoneFilter } from "react-icons/ai";

const StoryList = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    getStories();
    document.title = "Storyku";
  }, []);

  const [dataStory, setDataStory] = useState({
    id_story: 0,
    title: "",
    author: "",
    synopsis: "",
    category: "",
    status: "",
    tags: "",
  });

  const navigate = useNavigate();

  const getStories = async () => {
    try {
      const response = await axios.get("http://localhost:5000/storys");
      const storyData = response.data;
      console.log(storyData);
      setStories(storyData);
    } catch (error) {
      console.error("Error fetching stories:", error);
    }
  };

  const editStory = (item) => {
    setDataStory({
      id_story: item.id_story,
      title: item.title,
      author: item.author,
      synopsis: item.synopsis,
      category: item.category,
      status: item.status,
      tags: item.tags,
    });
    navigate(`/edit/${item.id_story}`);
  };

  const deleteStory = async (storyId) => {
    try {
      await axios.delete(`http://localhost:5000/storys/${storyId}`);
      getStorys();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // show data using table
    <>
      <div className="absolute h-full inset-y-0 right-0 mt-24 p-3 w-full xl:w-4/5 ">
        <div className="flex-row xl:flex justify-between ">
          <div className="flex justify-start items-center">
            <p className="text-4xl font-semibold text-gray-700">List Story</p>
          </div>
          <div className="flex justify-end gap-4 mt-4 xl:mt-0 items-center pr-2">
            <button
              className="px-5 py-2 w-auto h-auto bg-white border border-purple-500 hover:bg-purple-500 hover:border-white hover:text-white text-purple-500 rounded-lg
                      transition duration-300 ease-in-out"
            >
              <p className="font-semibold">
                Search by writer's name/title story
              </p>
            </button>
            <button className="px-3 py-2 w-10 h-10 bg-white border border-gray-500 rounded-full hover:border-purple-500 hover:bg-purple-500 transition duration-300 ease-in-out">
              <AiTwotoneFilter />
            </button>
            <Link to="/add">
              <button className="px-5 py-2 w-auto h-auto bg-[#6558F5] border border-purple-500 hover:bg-[#403a7c] transition duration-300 ease-in-out rounded-lg">
                <p className="text-white font-semibold">Add Story</p>
              </button>
            </Link>
          </div>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full border-2">
            <thead>
              <tr>
                <th className="border m-2 p-2 text-gray-900 font-bold">
                  Title
                </th>
                <th className="border m-2 p-2 text-gray-900 font-bold">
                  Writes
                </th>
                <th className="border m-2 p-2 text-gray-900 font-bold">
                  Category
                </th>
                <th className="border m-2 p-2 text-gray-900 font-bold">Tags</th>
                <th className="border m-2 p-2 text-gray-900 font-bold">
                  Status
                </th>
                <th className="border m-2 p-2 text-gray-900 font-bold">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {stories.map((story) => (
                <tr key={story.id_story}>
                  <td className="border m-2 p-2">{story.title}</td>
                  <td className="border m-2 p-2">{story.author}</td>
                  <td className="border m-2 p-2">{story.category}</td>
                  <td className="border m-2 p-2">
                    <div className="flex justify-center">
                      {story.tags && (
                        <button className="px-4 py-1 bg-gray-500 rounded-2xl text-white font-bold">
                          {story.tags}
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="border m-2 p-2">
                    <div className="flex justify-center">
                      {story.status && (
                        <button className="px-4 py-1 bg-gray-500 rounded-2xl text-white font-bold">
                          {story.status}
                        </button>
                      )}
                    </div>
                  </td>
                  <td className="border m-2 p-2">
                    <div className="flex justify-center items-center">
                      <div className="flex items-center justify-center gap-3 ">
                        <button
                          color="warning"
                          onClick={() => editStory(story)}
                          className="px-3 py-1 w-auto h-auto bg-[#6558F5] border text-white border-purple-500 hover:bg-[#403a7c] transition duration-300 ease-in-out rounded-full"
                        >
                          Edit
                        </button>
                        <Link
                          to={`view/${story.id_story}`}
                          className="px-3 py-1 w-auto h-auto bg-[#6558F5] border text-white border-purple-500 hover:bg-[#403a7c] transition duration-300 ease-in-out rounded-full"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StoryList;
