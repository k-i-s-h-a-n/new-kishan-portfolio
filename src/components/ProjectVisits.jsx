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
            title="CRM System Overview"
          ></div>
          <div className="max-w-3xl mx-auto">
            <div className="mt-3 bg-gray-900 rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div className="bg-black text-white relative top-0 -mt-32 p-5 sm:p-10">
                <h1 className="text-white font-bold text-3xl mb-2">
                  Visits: The OKCL Center Visits Application (Dashboards & API)
                </h1>
                <p className="text-gray-400 text-xs mt-2">
                  Developed By:
                  <span className="text-white"> Kishan Kumar</span>
                </p>
                <p className="text-slate-300 text-base leading-8 my-5">
                  Due to company guidelines and the sensitive nature of the data
                  recorded within the system, we cannot provide public access to
                  the dashboard without proper authorization. However, to give
                  you an overview of its functionality, we have attached a guide
                  that provides a detailed preview and explanation. This guide
                  offers insights into the system’s features and operations,
                  ensuring a clear understanding of its capabilities.
                </p>
                <span>
                  Website:{" "}
                  <button
                    onClick={() => openLink("https://visits.okcl.co.in/")}
                    className="text-xs text-gray-500 font-medium hover:text-gray-300 transition duration-500 ease-in-out"
                  >
                    OKCL Visits
                  </button>
                </span>
                <h3 className="text-xl font-bold text-white my-5"># My Role</h3>
                <p className="text-slate-300 text-base leading-8 my-5">
                  Admin Panel Website and API Development for the Visits Android
                  App
                </p>
                <p p className = "text-gray-500">The admin panel serves as a comprehensive backend system enabling seamless management and control of the Visits Android app. It is designed to streamline processes across various roles while ensuring efficiency and user-friendliness.</p>
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                  <strong>User Management:</strong> From the RM login, admins can
                  create and manage users such as ALC, DLC, and other RMs either
                  individually or in bulk using Excel. Admins can also edit or
                  delete user accounts.  
                </blockquote>
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                  <strong>Report Management:</strong> The admin panel allows RMs
                  to view reports submitted through the Visits Android app,
                  apply filters, export data to Excel, and approve or reject
                  reports submitted by users.  
                </blockquote>
                <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-gray-500 border-gray-700">
                  <strong>Event Management:</strong> Admins can create custom
                  events, control their visibility in the app, and allocate or
                  deallocate events to specific users, providing full control
                  over event operations.  
                </blockquote>
                
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default CrmsDetails;
  