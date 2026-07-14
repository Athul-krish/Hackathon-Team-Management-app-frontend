import { useState } from "react";
import Navbar from "./Navbar";

function AddTeam() {
  const [team, setTeam] =useState({
    teamId: "",
    teamName: "",
    teamLeaderName: "",
    leaderEmail: "",
    leaderPhone: "",
    collegeName: "",
    numberOfMembers: "",
    projectTitle: "",
    problemStatementTrack: "",
    technologyStack: "",
    mentorName: "",
    registrationDate: "",
    tableStationNumber: "",
  });

  const handleChange = (event) => {
    setTeam({...team,[event.target.name]:event.target.value,});
  };

  const handleSubmit = () => {
    console.log(team);
    axios
      .post("http://localhost:3000/add", team)
      .then((res) => {
        console.log(res.data);
        alert("Entry Added Succuessfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="card shadow-lg border-0 rounded-4 p-5">

          <div className="text-center mb-5">

            <i className="bi bi-people-fill display-4 text-primary"></i>

            <h2 className="fw-bold mt-3">
              Register Hackathon Team
            </h2>

            <p className="text-muted">
              Fill in the details below to register a new hackathon team.
            </p>

          </div>

          <form onSubmit={handleSubmit}>

            <div className="row">

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-hash me-2 text-primary"></i>
                  Team ID
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Team ID"
                  name="teamId"
                  value={team.teamId}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-people-fill me-2 text-primary"></i>
                  Team Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Team Name"
                  name="teamName"
                  value={team.teamName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-person-fill me-2 text-primary"></i>
                  Team Leader
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Leader Name"
                  name="teamLeaderName"
                  value={team.teamLeaderName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-envelope-fill me-2 text-primary"></i>
                  Leader Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                  name="leaderEmail"
                  value={team.leaderEmail}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-telephone-fill me-2 text-primary"></i>
                  Leader Phone
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Phone Number"
                  name="leaderPhone"
                  value={team.leaderPhone}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-building me-2 text-primary"></i>
                  College Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter College Name"
                  name="collegeName"
                  value={team.collegeName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-people me-2 text-primary"></i>
                  Number of Members
                </label>

                <input
                  type="number"
                  className="form-control"
                  placeholder="Enter Number of Members"
                  name="numberOfMembers"
                  value={team.numberOfMembers}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-lightbulb-fill me-2 text-primary"></i>
                  Project Title
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Project Title"
                  name="projectTitle"
                  value={team.projectTitle}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-diagram-3-fill me-2 text-primary"></i>
                  Problem Statement Track
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Problem Statement"
                  name="problemStatementTrack"
                  value={team.problemStatementTrack}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-cpu-fill me-2 text-primary"></i>
                  Technology Stack
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Technology Stack"
                  name="technologyStack"
                  value={team.technologyStack}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-person-workspace me-2 text-primary"></i>
                  Mentor Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Mentor Name"
                  name="mentorName"
                  value={team.mentorName}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-calendar-event-fill me-2 text-primary"></i>
                  Registration Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  name="registrationDate"
                  value={team.registrationDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-12 mb-4">
                <label className="form-label fw-semibold">
                  <i className="bi bi-geo-alt-fill me-2 text-primary"></i>
                  Table / Station Number
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Station Number"
                  name="tableStationNumber"
                  value={team.tableStationNumber}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="text-center mt-4">

              <button className="btn btn-success btn-lg px-5 rounded-pill">
                <i className="bi bi-check-circle-fill me-2"></i>
                Register Team
              </button>

            </div>

          </form>

        </div>

      </div>
    </>
  );
}

export default AddTeam;