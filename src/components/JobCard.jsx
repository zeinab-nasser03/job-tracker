function JobCard({ job, deleteJob }) {

  return (

    <div className="job-card">

      <h3>{job.company}</h3>

      <p>{job.position}</p>

      <span
        className={
          `status ${job.status.toLowerCase()}`
        }
      >
        {job.status}
      </span>

      <br />

      <button
        className="delete-btn"
        onClick={() =>
          deleteJob(job.id)}
      >
        Delete
      </button>

    </div>
  );
}

export default JobCard;