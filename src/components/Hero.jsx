import React from "react";

// getting the props
// const Hero = (props) => {
//   return (
//     <>
//       {/* <!-- Hero --> */}
//       <section className="bg-indigo-700 py-20 mb-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
//               {props.title} <br />
//               Become a React Dev
//             </h1>

//             <p className="my-4 text-xl text-white">
//               {props.subtitle} <br />
//               Find the React job that fits your skills and needs
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// destructuring props
// const Hero = ({
//   title = "default props getting override by passed props",
//   subtitle,
// }) => {
//   return (
//     <>
//       {/* <!-- Hero --> */}
//       <section className="bg-indigo-700 py-20 mb-4">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
//           <div className="text-center">
//             <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
//               {title} <br />
//               Become a React Dev
//             </h1>

//             <p className="my-4 text-xl text-white">
//               {subtitle} <br />
//               Find the React job that fits your skills and needs
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// normal
const Hero = () => {
  return (
    <>
      {/* <!-- Hero --> */}
      <section className="bg-indigo-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Become a React Dev
            </h1>

            <p className="my-4 text-xl text-white">
              Find the React job that fits your skills and needs
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
