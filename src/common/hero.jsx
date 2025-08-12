// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPaperPlane, faBriefcase } from '@fortawesome/free-solid-svg-icons';

// const Hero = () => {
//     return (
//         <section id="portfolio" className="bg-gray-50 text-gray-900 py-24" style={{ padding: '4rem 2rem 3rem 4rem' }}>
//             <div className="max-w-full mx-0 px-6 flex justify-between flex-col-reverse md:flex-row items-center gap-20">

//                 {/* Text Content */}
//                 <div className="text-center md:text-left space-y-6 ">
//                     <p className="text-[28px] text-gray-600 font-extrabold mb-0">Hi</p>
//                     <h1 className="md:text-6xl font-extrabold mt-0 tracking-tight leading-tight text-gray-900">
//                         <p className="text-[28px] text-gray-600 font-extrabold">I'm <span className="text-fuchsia-600">Haniya</span></p>
//                         <p className="text-[28px] text-gray-600 font-extrabold">a frontend developer</p>
//                     </h1>
//                     <br />
//                     <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto md:mx-0">
//                         I design and build beautiful, fast, and accessible web experiences using <strong>React</strong>, <strong>Angular</strong>, and cutting-edge tools. Let's create something great!
//                     </p>
//                     <br />

//                     {/* Buttons */}
//                     {/* Buttons */}
//                     <div className="flex flex-row flex-wrap gap-4 justify-center md:justify-start mt-6">
//                         {/* <div className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-6 py-3 rounded-[8px] text-sm font-semibold shadow-md transition duration-200 flex items-center gap-2">
//                             <button style={{ padding: '8px', cursor: 'pointer' }}>
//                                 <FontAwesomeIcon icon={faPaperPlane} />
//                                 <span style={{ paddingLeft: '6px' }}>Hire Me</span>
//                             </button>
//                         </div> */}
//                         <a
//                             href="https://mail.google.com/mail/?view=cm&fs=1&to=taskeensadiq49@gmail.com&su=Freelance%20Inquiry"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-2 rounded-[8px] text-sm font-semibold shadow-md transition duration-200 flex items-center h-[2.5rem] gap-2"
//                         >
//                             <FontAwesomeIcon icon={faPaperPlane} />
//                             <span>Hire Me</span>
//                         </a>

//                         <div className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-[8px] text-sm font-semibold shadow-md transition duration-200 flex items-center gap-2 h-[2.5rem]">
//                             <button style={{ padding: '8px', cursor: 'pointer' }}>
//                                 <FontAwesomeIcon icon={faBriefcase} />
//                                 <span style={{ paddingLeft: '6px' }}>View Projects</span>
//                             </button>
//                         </div>
//                     </div>

//                 </div>

//                 {/* Profile Image */}
//                 <div className="flex justify-center">
//                     <img
//                         src="src\assets\portfolio.jpg"
//                         alt="Profile"
//                         className=" w-100 h-100 md:w-80 md:h-80 object-cover shadow-xl"
//                         style={{ height: '20rem', width: '35rem' }}
//                     />
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Hero;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom"; // Make sure this is at the top

const Hero = () => {
    return (
        <section id="portfolio" className="bg-gray-50 text-gray-900 py-24 px-6 md:px-12 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

                {/* Text Content - 2/5 */}
                <div className="lg:col-span-2 space-y-6 text-center lg:text-left">
                    <p className="text-[28px] text-gray-600 font-extrabold mb-0">Hi</p>

                    <h1 className="text-[28px] text-gray-600 font-extrabold">
                        I'm <span className="text-fuchsia-600">Taskeen</span><br />
                        a frontend developer
                    </h1>

                    <p className="text-gray-700 text-base md:text-lg max-w-xl mx-auto lg:mx-0">
                        I design and build beautiful, fast, and accessible web experiences using <strong>React</strong>, <strong>Angular</strong>, and cutting-edge tools. Let's create something great!
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6">
                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=taskeensadiq49@gmail.com&su=Freelance%20Inquiry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-5 py-3 rounded-[8px] text-sm font-semibold shadow-md transition duration-200 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span>Hire Me</span>
                        </a>

                        {/* <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-[8px] text-sm font-semibold shadow-md transition duration-200 flex items-center gap-2">
              <FontAwesomeIcon icon={faBriefcase} />
              <span>View Projects</span>
            </button> */}



                        <Link
                            to="/projects"
                            className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-[8px] text-sm font-semibold shadow-md transition duration-200 flex items-center gap-2"
                        >
                            <FontAwesomeIcon icon={faBriefcase} />
                            <span>View Projects</span>
                        </Link>

                    </div>
                </div>

                {/* Image - 3/5 */}
                <div className="lg:col-span-3 flex justify-center">
                <img
  src={`${import.meta.env.BASE_URL}assets/portfolio-new.jpg`}
  alt="Abstract Portfolio Illustration"
  className="w-full max-w-3xl rounded-xl shadow-xl object-cover"
  style={{ height: '20rem' }}
/>



                </div>
            </div>
        </section>
    );
};

export default Hero;
