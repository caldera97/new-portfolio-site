import { HiArrowNarrowRight } from "react-icons/hi";

import { Link } from "react-scroll";
function Home() {
  return (
    <div name="home" className="bg-slate-500 w-full h-screen">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-gray-900">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">David Caldera</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-900">
          I'm a fullstack developer
        </h2>
        <p className="py-4 max-w-[700px]">
          I'm a fullstack developer specializing in building robust digital
          experiences. Currently I am focused on building responsive fullstack
          web applications.{" "}
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group border-2 border-black px-6 py-3 my-2 flex items-center hover:bg-gray-900 duration-150 hover:text-gray-400">
              View Work
              <span className="group-hover:rotate-90 duration-300 group-hover:text-gray-400">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
