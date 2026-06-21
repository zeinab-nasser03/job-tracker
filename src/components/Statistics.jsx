function Statistics({ jobs }) {

  const applied =
    jobs.filter(job => job.status === "Applied").length;

  const interview =
    jobs.filter(job => job.status === "Interview").length;

  const accepted =
    jobs.filter(job => job.status === "Accepted").length;

  const rejected =
    jobs.filter(job => job.status === "Rejected").length;

  return (

    <div className="stats">

      <div className="stat-card">
        <h2>{jobs.length}</h2>
        <p>Total</p>
      </div>

      <div className="stat-card">
        <h2>{applied}</h2>
        <p>Applied</p>
      </div>

      <div className="stat-card">
        <h2>{interview}</h2>
        <p>Interview</p>
      </div>

      <div className="stat-card">
        <h2>{accepted}</h2>
        <p>Accepted</p>
      </div>

      <div className="stat-card">
        <h2>{rejected}</h2>
        <p>Rejected</p>
      </div>

    </div>
  );
}

export default Statistics;