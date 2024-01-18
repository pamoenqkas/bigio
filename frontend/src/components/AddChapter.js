import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLeft, AiOutlineFileImage } from "react-icons/ai";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddChapter = () => {
  const [title, setTitle] = useState("");
  const handleChange = (event, editor) => {
    const data = editor.getData();
    console.log(data);
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
            <AiOutlineLeft style={{ color: "purple-500" }} />
            <Link to="/add">
              <button className="underline underline-offset-4 text-purple-500 hover:text-purple-800 transition duration-300 ease-in-out ">
                Add Story
              </button>
            </Link>
          </div>
          <p className="text-4xl font-bold text-gray-700 mt-5">Add Chapter</p>
          <div className="bg-white border-2 w-full h-auto p-5 mt-5">
            <div className="flex flex-row jutify-center items-center gap-5">
              <div className="w-full">
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
                <label className="block">
                  <span className="block text-sm font-bold text-slate-700 mt-2">
                    Story
                  </span>
                  <CKEditor
                    editor={ClassicEditor}
                    data="<p></p>"
                    onReady={(editor) => {
                      // You can store the "editor" and use when it is needed.
                      console.log("Editor is ready to use!", editor);
                    }}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center gap-4 mt-4">
          <button className="px-5 py-2 w-auto h-auto bg-white border border-purple-500 hover:bg-[#403a7c] transition duration-300 ease-in-out rounded-lg">
            <p className="text-purple-500 font-semibold">Cancel</p>
          </button>
          <button className="px-5 py-2 w-auto h-auto bg-[#6558F5] border border-purple-500 hover:bg-[#403a7c] transition duration-300 ease-in-out rounded-lg">
            <p className="text-white font-semibold">Save</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default AddChapter;
