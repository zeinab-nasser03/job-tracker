import { useState } from "react";

function JobForm({ addJob }) {

  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");

  const handleSubmit = (e) => {

    e.preventDefault();

    if (!company || !position) return;

    const newJob = {
      id: Date.now(),
      company,
      position,
      status
    };

    addJob(newJob);

    setCompany("");
    setPosition("");
    setStatus("Applied");
  };

  return (

    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) =>
          setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Position"
        value={position}
        onChange={(e) =>
          setPosition(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) =>
          setStatus(e.target.value)}
      >

        <option>Applied</option>
        <option>Interview</option>
        <option>Accepted</option>
        <option>Rejected</option>

      </select>

      <button type="submit" className="add-btn">
        Add Job
      </button>

    </form>
  );
}

export default JobForm;