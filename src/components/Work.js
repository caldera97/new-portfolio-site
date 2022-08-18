import FlatBook from "../assets/flatbook.png";
import Archive from "../assets/the_archive.png";
import Forum from "../assets/TheForum.png";
function Work() {
  return (
    <div className="w-full md:h-screen bg-slate-500">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800">
            Work
          </p>
          <p className="py-6">Heres some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${FlatBook})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text 2xl font-bold text-white tracking-wider">
                React Js and Ruby on Rails Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Archive})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text 2xl font-bold text-white tracking-wider">
                Vanilla JS art viewer
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Forum})` }}
            className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text 2xl font-bold text-white tracking-wider">
                React Js and Ruby on Rails Application
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-800 font-bold text-lg">
                    code{" "}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
