import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { AiOutlineLeft, AiOutlineFileImage } from "react-icons/ai";

const ViewStory = () => {
  const [story, setStory] = useState({
    id_story: 0,
    title: "",
    author: "",
    synopsis: "",
    category: "",
    status: "",
    tags: "",
    file: "",
  });

  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getStoryById(id);
    console.log("pepep", story);
  }, []);

  //   Berhasil
  //   const getStoryById = async (id) => {
  //     const response = await axios.get("http://localhost:5000/storys/" + id);
  //     const storyData = response.data;
  //     setStory(storyData);
  //   };

  const getStoryById = async (id) => {
    try {
      const response = await axios.get("http://localhost:5000/storys/" + id);
      const storyData = response.data;
      setStory((prevStory) => ({ ...prevStory, ...storyData }));
    } catch (error) {
      console.error("Error fetching story:", error);
    }
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateStory = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", story.title);
    formData.append("author", story.author);
    formData.append("synopsis", story.synopsis);
    formData.append("category", story.category);
    formData.append("status", story.status);
    formData.append("tags", story.tags);

    try {
      await axios.patch(`http://localhost:5000/storys/${id}`, formData, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      navigate("/");
    } catch (error) {
      console.error("Error updating story:", error);
    }
  };

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
          <p className="text-4xl font-bold text-gray-700 mt-5">Detail Story</p>
          <div className="bg-white border-2 w-full h-auto p-5 mt-5">
            <form onSubmit={updateStory}>
              <div className="flex flex-row jutify-center items-center gap-5">
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Title
                    </span>
                    <input
                      type="text"
                      disabled
                      value={story.title}
                      onChange={(e) =>
                        setStory({ ...story, title: e.target.value })
                      }
                      placeholder="Title"
                      className="mt-1 block w-full px-3 py-2 bg-gray-400 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                    ></input>
                  </label>
                </div>
                <div className="hidden xl:w-1/2 xl:block ">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Writer Name
                    </span>
                    <input
                      type="text"
                      disabled
                      value={story.author}
                      onChange={(e) =>
                        setStory({ ...story, author: e.target.value })
                      }
                      placeholder="Writer Name"
                      className="mt-1 block w-full px-3 py-2 bg-gray-400 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                    />
                  </label>
                </div>
              </div>
              <div className="w-full mt-2 xl:hidden ">
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700">
                    Writer Name
                  </span>
                  <input
                    type="text"
                    disabled
                    value={story.author}
                    onChange={(e) =>
                      setStory({ ...story, author: e.target.value })
                    }
                    placeholder="Writer Name"
                    className="mt-1 block w-full px-3 py-2 bg-gray-400 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                  />
                </label>
              </div>
              <div className="w-full mt-2">
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700">
                    Synopsis
                  </span>
                  <textarea
                    disabled
                    value={story.synopsis}
                    onChange={(e) =>
                      setStory({ ...story, synopsis: e.target.value })
                    }
                    placeholder="Synopsis"
                    className="w-full mt-1 px-3 py-2 bg-gray-400 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
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
                    <input
                      disabled
                      type="text"
                      value={story.category}
                      onChange={(e) =>
                        setStory({ ...story, category: e.target.value })
                      }
                      placeholder="Title"
                      className="mt-1 block w-full px-3 py-2 bg-gray-400 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-purple-500 focus:ring-1 "
                    />
                  </label>
                </div>
                <div className="w-full xl:w-1/2">
                  <label className="block">
                    <span className="block text-sm font-bold text-slate-700">
                      Tags/ Keyword Story
                    </span>
                    <div className="bg-white border border-gray-300 rounded-md mt-1">
                      <div className="flex justify-center items-center gap-4 px-2 py-1 bg-gray-400">
                        <div class="forced-color-adjust-none">
                          <div className="flex flex-row justify-center items-center gap-4 ">
                            <label>
                              <input
                                disabled
                                type="radio"
                                value="best"
                                checked={story.tags === "best"}
                                onChange={() =>
                                  setStory({ ...story, tags: "best" })
                                }
                              />
                              Best
                            </label>
                            <label>
                              <input
                                disabled
                                type="radio"
                                value="short"
                                checked={story.tags === "short"}
                                onChange={() =>
                                  setStory({ ...story, tags: "short" })
                                }
                              />
                              Short
                            </label>
                            <label>
                              <input
                                disabled
                                type="radio"
                                value="mental ilness"
                                checked={story.tags === "mental ilness"}
                                onChange={() =>
                                  setStory({ ...story, tags: "mental ilness" })
                                }
                              />
                              Mental Ilness
                            </label>
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
                      <div className="flex flex-row bg-gray-400">
                        <div className="w-full">
                          <input
                            disabled
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
                    <span className="block text-sm font-bold text-slate-700 ">
                      Status
                    </span>
                    <div className="bg-gray-600 border border-gray-300 rounded-md mt-1 ">
                      <select
                        id="statusDropdown"
                        disabled
                        value={story.status}
                        onChange={(e) =>
                          setStory({ ...story, status: e.target.value })
                        }
                        className="w-full py-1 px-3"
                      >
                        <option value="" className="text-gray-800">
                          ..
                        </option>
                        <option value="publish">Publish</option>
                        <option value="draft">Draft</option>
                      </select>
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex justify-end items-center gap-4 mt-7"></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewStory;
