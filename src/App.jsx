import { useState, useEffect } from "react";
import "./App.css";

import JobForm from "./components/JobForm";
import JobList from "./components/JobList";
import Statistics from "./components/Statistics";
import FilterButtons from "./components/FilterButtons";

function App() {

  const [jobs, setJobs] = useState(() => {

    const savedJobs =
      localStorage.getItem("jobs");

    return savedJobs
      ? JSON.parse(savedJobs)
      : [];

  });
  const [filter, setFilter] = useState("All");

  useEffect(() => {

    console.log("Saving jobs:", jobs);

    localStorage.setItem(
      "jobs",
      JSON.stringify(jobs)
    );

  }, [jobs]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };

  const deleteJob = (id) => {
    setJobs(
      jobs.filter(job => job.id !== id)
    );
  };

  const filteredJobs =
  filter === "All"
    ? jobs
    : jobs.filter(
        job => job.status === filter
      );

  return (
  <div className="app">

    <div className="hero">

      <h1 className="title">
        Job Application Tracker
      </h1>

      <p className="subtitle">
        Organize and monitor your internship and job applications.
      </p>

    </div>

    {/* <Statistics totalJobs={jobs.length} /> */}

    <Statistics jobs={jobs} />

    <JobForm addJob={addJob} />

    <FilterButtons
      filter={filter}
      setFilter={setFilter}
    />

    <JobList
      jobs={filteredJobs}
      deleteJob={deleteJob}
    />

  </div>
);
}

export default App;