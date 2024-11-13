import React from "react";

const Blog = () => {
  const openLink = (url) => {
    window.open(url, "_blank");
  };
  return (
    <>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div
          className="bg-cover bg-center text-center overflow-hidden grayscale"
          style={{
            minHeight: 500,
            backgroundImage:
              'url("https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          }}
          title="Woman holding a mug"
        ></div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-3 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="bg-black text-white relative top-0 -mt-32 p-5 sm:p-10">
              <h1 className="text-white font-bold text-3xl mb-2">
                My Bootcamp & Internship Journey
              </h1>
              <p className="text-gray-400 text-xs mt-2">
                Written By:
                <span className="text-white"> Kishan Kumar</span>
              </p>
              <p className="text-slate-300 text-base leading-8 my-5">
                When I started my Bootcamp, I was just a curious learner with a
                simple HTML file and a basic CSS stylesheet open on my screen. I
                remember those early days, struggling to align divs and
                experimenting with colors and fonts. As the weeks went by, my
                curiosity transformed into passion, and soon I was diving into
                React.js, creating dynamic interfaces that felt alive.
              </p>
              <h3 className="text-xl font-bold text-white my-5">
                #. The Fun Part
              </h3>
              <p className="text-slate-300 text-base leading-8 my-5">
                The real excitement began when I touched the backend—connecting
                frontend to a Node.js server, managing databases with MongoDB,
                and understanding how everything clicked together. My journey
                from building a simple static page to mastering the MERN stack
                has been a rollercoaster of challenges, late-night debugging,
                and countless 'aha!' moments. Looking back, every struggle and
                success made me the confident developer I am today. like Aldus
                PageMaker including versions of Lorem Ipsum.
              </p>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                A special thanks to Angela Yu, an amazing teacher, instructor,
                and mentor. I am truly grateful to Udemy for providing such a
                remarkable educator.
              </blockquote>
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                I appreciate the Brothers for seeing potential in me and
                bringing me on as an intern. To be honest, I’ve learned a lot
                thanks to Vasoya Brothers.
              </blockquote>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => openLink("https://www.vasoyabrothers.com/")}
                  className="text-xs text-gray-500 font-medium hover:text-gray-300 transition duration-500 ease-in-out"
                >
                  Vasoyabrothers Infotech
                </button>
                <span className="text-xs text-gray-500">|</span>
                <button
                  onClick={() => openLink("https://www.udemy.com/")}
                  className="text-xs text-gray-500 font-medium hover:text-gray-300 transition duration-500 ease-in-out"
                >
                  Udemy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
