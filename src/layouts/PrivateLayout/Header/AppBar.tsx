import { useState } from 'react';

declare const window: any;

function AppBar() {
  const [isMaximize, setMaximize] = useState(false);

  const handleToggle = () => {
    if (isMaximize) {
      setMaximize(false);
    } else {
      setMaximize(true);
    }

    window.Main.Maximize();
  };

  return (
    <>
      <div className="py-0.5 flex justify-between draggable bg-gray-900">
        <div className="flex px-1">
          <p className="text-white">Stock App</p>
        </div>
        <div className="inline-flex -mt-1">
          <button
            onClick={window.Main.Minimize}
            className="undraggable md:px-4 lg:px-3 pt-1 hover:bg-gray-300 bg-white"
          >
            &#8211;
          </button>
          <button onClick={handleToggle} className="undraggable px-6 lg:px-5 pt-1 hover:bg-gray-300 bg-white">
            {isMaximize ? '\u2752' : '⃞'}
          </button>
          <button
            onClick={window.Main.Close}
            className="undraggable px-4 pt-1 hover:bg-red-500 hover:text-white bg-white"
          >
            &#10005;
          </button>
        </div>
      </div>
      {/* <div className="bg-gray-900 text-white undraggable">
        <div className="flex items-center gap-3">
          <div className="text-sm w-8  hover:bg-gray-700 hover:cursor-pointer">File</div>
          <div className="text-sm w-8   hover:bg-gray-700">Edit</div>
          <div className="text-sm w-10  hover:bg-gray-700">View</div>
          <div className="text-sm w-14  hover:bg-gray-700 ">Window</div>
          <div className="text-sm w-9  hover:bg-gray-700 ">Help</div>
        </div>
      </div> */}
    </>
  );
}

export default AppBar;
