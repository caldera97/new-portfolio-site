function Contact() {
  return (
    <div
      name="contact"
      className="bg-slate-500 w-full h-screen flex justify-center items-center p-4"
    >
      <form method="POST" action="https://getform.io/f/6cd11906-20af-44e9-889c-007115cc0f5e" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-800">Contact</p>
          <p>Submit the form below or email me - david.a.caldera97@gmail.com</p>
        </div>
        <input className="p-2"type="text" placeholder="Name" name="name"></input>
        <input className="my-4 p-2"type="email" placeholder="Email" name="name"></input>
        <textarea className="p-2"name="message" rows="10" placeholder="Message"></textarea>
        <button className="border-2  border-black px-4 py-3 my-8 mx-auto flex items-center hover:bg-gray-900 duration-150 hover:text-gray-400 ">Contact Me</button>
      </form>
    </div>
  );
}

export default Contact;
