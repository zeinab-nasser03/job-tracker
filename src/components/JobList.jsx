import JobCard from "./JobCard";

function JobList({ jobs, deleteJob }) {

  if(jobs.length === 0){

    return (

      <div className="empty-state">

        <h3>No applications found</h3>

        <p>
          Start by adding your first
          application.
        </p>

      </div>

    );
  }

  return (

    <div className="jobs-grid">

      {jobs.map(job => (

        <JobCard
          key={job.id}
          job={job}
          deleteJob={deleteJob}
        />

      ))}

    </div>

  );
}

export default JobList;