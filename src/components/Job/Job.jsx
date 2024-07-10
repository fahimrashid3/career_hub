import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    location,
    salary,
  } = job;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl max-w-xl lg:mt-32 md:mt-20 mt-10 mx-auto">
        <div>
          <figure>
            <img src={logo} alt="Shoes" />
          </figure>
        </div>
        <div className="card-body">
          <h2 className="card-title">
            {job_title}
            {/* <div className="badge badge-secondary">NEW</div> */}
          </h2>
          <p>{company_name}</p>
          <div className="flex gap-5">
            <button className="px-5 py-2 font-extrabold rounded border border-blue-500">
              {remote_or_onsite}
            </button>
            <button className="px-5 py-2 font-extrabold rounded border border-blue-500">
              {job_type}
            </button>
          </div>
          <div className="flex gap-5 mt-2">
            <button className=" font-bold flex gap-2">
              <FaLocationDot></FaLocationDot> {location}
            </button>
            <button className=" font-bold flex gap-2">
              <FaDollarSign></FaDollarSign>
              {salary}
            </button>
          </div>
          <Link to={`/job/${id}`}>
            <a className="btn btn-outline btn-primary w-[40%] mt-2">
              View details
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
