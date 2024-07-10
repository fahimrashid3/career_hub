import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-center font-extrabold lg:text-5xl md:text-3xl text-2xl">
          Featured Jobs: {jobs.length}
        </h1>
        <p className="text-center text-base font-medium lg:mt-5 md:mt-4 mt-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 mx-auto">
        {jobs.slice(0, dataLength).map((job) => (
          <Job key={job.id} job={job}></Job>
        ))}
      </div>
      <div className={dataLength === jobs.length && "hidden"}>
        <button
          onClick={() => setDataLength(jobs.length)}
          className="btn btn-outline btn-primary lg:mt-10 md:mt-6 mt-4"
        >
          See all jobs
        </button>
      </div>
    </div>
  );
};

export default FeaturedJobs;
