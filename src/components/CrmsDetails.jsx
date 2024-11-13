
const CrmsDetails = () => {
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
                'url("https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
            }}
            title="Woman holding a mug"
          ></div>
          <div className="max-w-3xl mx-auto">
            <div className="mt-3 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="bg-black text-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 className="text-white font-bold text-3xl mb-2">
                CRMs: The Game Changers (Dashboards)
                </h1>
                <p className="text-gray-400 text-xs mt-2">
                  Written By:
                  <span className="text-white"> Abhishek Kumar</span>
                </p>
                <p className="text-slate-300 text-base leading-8 my-5">
                Due to company guidelines, I cannot showcase the dashboard. However, it is a comprehensive health insurance CRM, where various groups onboard and manage complex insurance claims.
                </p>
                <span>
                    Some Famous Groups:  <button
                    onClick={() => openLink("https://www.brookshirebrothers.com/")}
                    className="text-xs text-gray-500 font-medium hover:text-gray-300 transition duration-500 ease-in-out"
                  >
                    Brookshirebrothers
                  </button>
                </span>
                <h3 className="text-xl font-bold text-white my-5">
                  #. The Fun Part
                </h3>
                <p className="text-slate-300 text-base leading-8 my-5">
                 ONPROCESS
                </p>
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                  
                ONPROCESS
                </blockquote>
                {/* <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                  I appreciate the Brothers for seeing potential in me and
                  bringing me on as an intern. To be honest, I’ve learned a lot
                  thanks to Vasoya Brothers.
                </blockquote> */}
                {/* <div className="flex items-center space-x-2">
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default CrmsDetails;
  