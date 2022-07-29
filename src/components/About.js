function About() {
  return (
    <div name="about" className="w-full h-screen bg-slate-500">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-slate-800">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
            <div className="sm:text-right text-4xl font-bold ">
              <p>Hi, I'm David. Feel free to take a look around.</p>
            </div>
            <div>
                <p>I'm passionate about building functional software that people can use and have fun. I'm always looking for new ways to expand my knowledge and take my coding to the next level. My current goal is to find a company that will challenge my knowledge and push me to my limits. Learning is my favorite past-time and being pushed is the way I learn. </p>
            </div>
          </div>
      </div>
    </div>
  );
}

export default About;
