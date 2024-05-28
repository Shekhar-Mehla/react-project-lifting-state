import React from "react";

export const Display = ({ value }) => {
  return (
    <div className="  text-center  p-2 w-100">
      <div className="display border border-black w-50 h-100 m-auto  text-center ">
        {value}
      </div>
    </div>
  );
};
