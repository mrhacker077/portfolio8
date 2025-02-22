import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <h1 className="text-4xl font-bold mb-10 text-center">About Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personal Info Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Personal Information
          </h2>
          <p className="text-gray-700">
            Hello everyone, my name is Ravindra M Keni and I am the Head of the Eelectrical and Electronics Engineering Department here at Karnataka Govt. Polytechnic.
          </p>
          
        </div>

        {/* Education Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Education & Training
          </h2>
          <p className="text-gray-700">
          I have completed my Bachelor of Engineering (B.E.) in Eelectrical and Electronics Engineering. <br /> Master of Engineering (M.E.) in Power and Engineering. 
          </p>
        </div>

        {/* Skills Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Skills & Expertise
          </h2>
          <p className="text-gray-700">  
          Proficient in Electrical and Electronics Engineering principles, with expertise in Solar Energy, Electric Vehicles (EV), and Hybrid Power Generation. Strong knowledge of Basic Electrical & Electronics Engineering, Power Systems, Renewable Energy Technologies, and Electrical Machines.
          </p>
        </div>

        {/* Experience Card */}
        <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Professional Experience
          </h2>
          <p className="text-gray-700"> 
          Experienced in 3rd Part Inspection, served as a CCTek Manager, and worked as an APO in the Community Polytechnic Scheme also serves as a Career Guidance Program Coordinator.
          </p>
        </div>

         {/* Mission Card */}
         <div
          className="bg-blue-100 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          <h2 className="text-2xl font-semibold mb-4 text-green-700">
            Mission Statement
          </h2>
          <p className="text-gray-700">
To drive innovation in renewable energy, electric vehicles, and hybrid power systems while promoting education, research, and sustainability.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
