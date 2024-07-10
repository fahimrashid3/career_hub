const Banner = () => {
  return (
    <div>
      {/* className="bg-blue-100 text-black" */}
      <div className="lg:flex lg:mt-10 md:mt-6 mt-4 lg:mb-20 md:mb-16 mb-10">
        <div className="my-auto">
          <h1 className="text-7xl font-extrabold">
            One Step <br></br> Closer To Your <br></br>{" "}
            <span className="text-blue-600">Dream Job</span>
          </h1>
          <p className="text-xl font-medium lg:mt-10 md:mt-6 mt-4 lg:max-w-3xl">
            Explore thousands of job opportunities with all the information you
            need. Its your future. Come find it. Manage all your job application
            from start to finish.
          </p>
          <button className="btn btn-outline btn-primary lg:mt-10 md:mt-6 mt-4">
            Get Started
          </button>
        </div>
        <div>
          <img src="../../../assets/images/user.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
