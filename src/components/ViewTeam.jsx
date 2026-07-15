import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";

function ViewTeam() {

  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const response = await axios.get("http://localhost:3000/view");
      setTeams(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  return (
    <>
      <Navbar />

      <div className="container py-5">

        <div className="card shadow-lg border-0 rounded-4">

          <div className="card-header bg-primary text-white">

            <h2 className="mb-0">
              <i className="bi bi-table me-2"></i>
              Registered Teams
            </h2>

          </div>

          <div className="card-body">

            {teams.length === 0 ? (

              <h4 className="text-center text-secondary">
                No Teams Registered
              </h4>

            ) : (

              <div className="table-responsive">

                <table className="table table-hover align-middle">

                  <thead className="table-dark">

                    <tr>
                      <th>#</th>
                      <th>Team ID</th>
                      <th>Team Name</th>
                      <th>Leader</th>
                      <th>College</th>
                      <th>Members</th>
                      <th>Track</th>
                      <th>Technology</th>
                      <th>Table</th>
                    </tr>

                  </thead>

                  <tbody>

                    {teams.map((team, index) => (

                      <tr key={team._id}>

                        <td>{index + 1}</td>

                        <td>{team.teamId}</td>

                        <td>{team.teamName}</td>

                        <td>{team.teamLeaderName}</td>

                        <td>{team.collegeName}</td>

                        <td>{team.numberOfMembers}</td>

                        <td>{team.problemStatementTrack}</td>

                        <td>{team.technologyStack}</td>

                        <td>{team.tableStationNumber}</td>

                      </tr>

                    ))}

                  </tbody>

                </table>

              </div>

            )}

          </div>

        </div>

      </div>
    </>
  );
}

export default ViewTeam;