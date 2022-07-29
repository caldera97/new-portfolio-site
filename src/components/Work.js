function Work() {
  return (
    <div className="w-full md:h-screen bg-slate-500">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800">Work</p>
          <p className="py-6">Heres some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg group container rounded-md flex justify-center items-center mx-auto content-div">
            <div>
                {/* add the portfolio screenshots now */}
              <span></span>
              <div>
                <a href="/">
                  <button></button>
                </a>
                <a href="/">
                  <button></button>
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
