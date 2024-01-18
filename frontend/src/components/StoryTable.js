 
import React from "react";

const StoryTable = ( ) => {
  return (
    < >
      <div className="overflow-x-auto">
        <table className="min-w-full h-24 border-2 ">
          <thead>
            <tr>
              <th className="border m-2 p-2 text-gray-900 font-bold">Title </th>
              <th className="border m-2 p-2 text-gray-900 font-bold">
                Writer
              </th>
              <th className="border m-2 p-2 text-gray-900 font-bold">
                Category
              </th>
              <th className="border m-2 p-2 text-gray-900 font-bold">Tags</th>
              <th className="border m-2 p-2 text-gray-900 font-bold">Status</th>
              <th className="border m-2 p-2 text-gray-900 font-bold">Action</th>
            </tr>
          </thead>
          <tbody className="border-2">
            <tr>
              <td className="border m-2 p-2"></td>
              <td className="border m-2 p-2"></td>
              <td className="border m-2 p-2"> </td>
              <td className="border m-2 p-2"> </td>
              <td className="border m-2 p-2"> </td>
              <td className="border m-2 p-2"> </td>
            </tr>
          </tbody>
        </table>
      </div>
    </   >
  );
};

export default StoryTable;
