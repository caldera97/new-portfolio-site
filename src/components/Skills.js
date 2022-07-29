import CSS from "../assets/css.png";
import HTML from "../assets/html5.png";
import JS from "../assets/js.png";
import NET from "../assets/net.png";
import Rails from "../assets/rails.png";
import React from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import C from "../assets/c.png";

function Skills() {
  return (
    <div name="skills" className="bg-slate-500">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-gray-800">
              Experience
            </p>
            <p className="py-4">These are the technologies I work with</p>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={HTML} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={CSS} alt="CSS icon" className="w-20 mx-auto" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={JS} alt="JS icon" className="w-20 mx-auto" />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={React} alt="React icon" className="w-20 mx-auto" />
            <p className="my-4">React.js</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={Tailwind} alt="Tailwind icon" className="w-20 mx-auto" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={Rails} alt="rails icon" className="w-20 mx-auto" />
            <p className="my-4">Ruby on Rails</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={C} alt="HTML icon" className="w-20 mx-auto" />
            <p className="my-4">C#</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-500">
            <img src={NET} alt=".NET icon" className="w-20 mx-auto" />
            <p className="my-4">.NET framework</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
