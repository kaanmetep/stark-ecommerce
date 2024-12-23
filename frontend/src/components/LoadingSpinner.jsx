import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="w-8 h-8 border-4 border-black border-t-4 border-t-white rounded-full animate-spin"></div>
    </div>
  );
};

export default LoadingSpinner;
