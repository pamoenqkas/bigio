import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LandingPage from "./LandingPage";
import Sidebar from "./Sidebar";
import { AiOutlineLeft, AiOutlineFileImage } from "react-icons/ai";

const AddProduct = () => {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    getChapters();
  }, []);

  const getChapters = async () => {
    try {
      const response = await axios.get("http://localhost:5000/chapters");
      const chapterData = response.data;
      console.log(chapterData);
      setChapters(chapterData);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    }
  };

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [category, setCategory] = useState("");

  const [selectedTag, setSelectedTag] = useState("");

  const [status, setStatus] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveProduct = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    formData.append("author", author);
    formData.append("synopsis", synopsis);
    formData.append("category", category);
    formData.append("tags", selectedTag);
    formData.append("status", status);
    try {
      await axios.post("http://localhost:5000/storys", formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const deleteStory = async (storyId) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/storys/${storyId}`);
  //     getStory();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <Sidebar />
      <div className="absolute h-full inset-y-0 right-0 mt-24 p-5 w-full xl:w-4/5 border-l-2">
        <div className="ml-4 mt-3">
          <div className="flex flex-row justify-start items-center gap-2 ">
            <AiOutlineLeft style={{ color: "purple-500" }} />
            <Link to="/">
              <button className="underline underline-offset-4 text-purple-500 hover:text-purple-800 transition duration-300 ease-in-out ">
                List Story
              </button>
            </Link>
          </div>
          <p className="text-4xl font-bold text-gray-700 mt-5">Add Story</p>
          <div className="bg-white border-2 w-full h-auto p-5 mt-5">
            <form onSubmit={saveProduct}>
              <div className="flex flex-col xl:flex-row jutify-center items-center gap-5">
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Title
                    </span>
                    <input
                      type="text"
                      className="input"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                    />
                  </label>
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Writer Name
                    </span>
                    <input
                      type="text"
                      className="input"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      placeholder="Writer Name"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                    />
                  </label>
                </div>
              </div>
              <div className="w-full mt-2">
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700">
                    Synopsis
                  </span>
                  <textarea
                    value={synopsis}
                    onChange={(e) => setSynopsis(e.target.value)}
                    placeholder="Synopsis"
                    className="w-full mt-1 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                    rows={4}
                    cols={40}
                  />
                </label>
              </div>
              <div className="flex flex-col xl:flex-row jutify-center items-center gap-5">
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Category
                    </span>
                    {/* <input
                      type="text"
                      className="input"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      placeholder="Title"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                    /> */}
                    <div className="bg-white border border-gray-300 rounded-md mt-1">
                      <select
                        value={category}
                        className="w-full py-1 px-3"
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="" className="text-gray-800">
                          ..
                        </option>
                        <option value="Financial">Financial</option>
                        <option value="Technology">Technology</option>
                        <option value="Health">Health</option>
                      </select>
                    </div>
                  </label>
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Tags/ Keyword Story
                    </span>
                    <div className="bg-white border border-gray-300 rounded-md mt-1">
                      <div className="flex justify-center items-center gap-4 px-2 py-1">
                        <div class="forced-color-adjust-none">
                          <div className="flex flex-row justify-center items-center gap-4">
                            <label>
                              <input
                                type="radio"
                                value="best"
                                checked={selectedTag === "best"}
                                onChange={() => setSelectedTag("best")}
                              />
                              Best
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="short"
                                checked={selectedTag === "short"}
                                onChange={() => setSelectedTag("short")}
                              />
                              Short
                            </label>
                            <label>
                              <input
                                type="radio"
                                value="mental illness"
                                checked={selectedTag === "mental illness"}
                                onChange={() =>
                                  setSelectedTag("mental illness")
                                }
                              />
                              Mental Illness
                            </label>
                            {/* {["Mental Illness", "Best", "Short"].map((tag) => (
                              <button
                                key={tag}
                                onClick={() => handleTagClick(tag)}
                                className={`px-2 py-1 w-auto h-auto ${
                                  selectedTag === tag
                                    ? "bg-gray-400 text-white"
                                    : "bg-white border border-gray-400 text-gray-700"
                                } rounded-xl transition duration-300 ease-in-out`}
                              >
                                <p className="">{tag}</p>
                              </button>
                            ))} */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col xl:flex-row mt-2 jutify-center items-center gap-5">
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Cover Image
                    </span>
                    <div className="bg-white border h-auto border-gray-300 rounded-md mt-1">
                      <div className="flex flex-row">
                        <div className="w-full">
                          <input
                            type="file"
                            onChange={loadImage}
                            style={{ display: "none" }}
                          />
                        </div>
                        <div className="flex justify-end">
                          <div className="bg-gray-300 w-auto h-auto px-3 py-2 relative">
                            <AiOutlineFileImage />
                          </div>
                        </div>
                      </div>
                      {preview ? (
                        <figure className="image is-128x128">
                          <img src={preview} alt="Preview Image" />
                        </figure>
                      ) : (
                        ""
                      )}
                    </div>
                  </label>
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Status
                    </span>
                    <div className="bg-white border border-gray-300 rounded-md mt-1">
                      <select
                        id="statusDropdown"
                        value={status}
                        className="w-full py-1 px-3"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="" className="text-gray-800">
                          ..
                        </option>
                        <option value="Publish">Publish</option>
                        <option value="Draft">Draft</option>
                      </select>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-end items-center gap-4 mt-7">
                <button className="px-3 py-1 w-auto h-auto bg-white border border-purple-500 hover:bg-purple-500 transition duration-300 ease-in-out rounded-lg">
                  <p className="text-purple-500 hover:text-white font-semibold">
                    Cancel
                  </p>
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 w-auto h-auto bg-[#6558F5] border border-purple-500 hover:bg-[#403a7c] transition duration-300 ease-in-out rounded-lg"
                >
                  <p className="text-white font-semibold">Save</p>
                </button>
              </div>
            </form>
            <div className="border-b-4 border-gray-400 mt-6 "></div>
            <div className="flex justify-end mt-4">
              <Link to="/AddChapter">
                <button className="px-5 py-2 w-auto h-auto bg-[#6558F5] border border-purple-500 hover:bg-[#403a7c] transition duration-300 ease-in-out rounded-lg">
                  <p className="text-white font-semibold">Add Chapter</p>
                </button>
              </Link>
            </div>
            <table className="min-w-full border-2 mt-4">
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
                </tr>
              </thead>
              <tbody>
                {chapters.map((story) => (
                  <tr key={product.id}>
                    <td className="border m-2 p-2">{story.title}</td>
                    <td className="border m-2 p-2">{story.author}</td>
                    <td className="border m-2 p-2">{story.category}</td>
                    <td className="border m-2 p-2  ">
                      <div className="flex justify-center">
                        <button className="px-4 py-1 bg-gray-500 rounded-2xl text-white font-bold">
                          {story.tags}
                        </button>
                      </div>
                    </td>
                    <td className="border m-2 p-2">
                      <div className="flex justify-center">
                        <button className="px-4 py-1 bg-gray-500 rounded-2xl text-white font-bold">
                          {story.status}
                        </button>
                      </div>
                    </td>
                    <td className="border m-2 p-2">
                      <div className="flex justify-center items-center"></div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
