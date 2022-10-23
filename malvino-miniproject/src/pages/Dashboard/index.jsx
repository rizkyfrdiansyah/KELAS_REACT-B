import { useLazyQuery, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

/** Sweet Alert */
import Swal from "sweetalert2";

/** Bootstrap Components */
import { Spinner } from "react-bootstrap";

/** Components */
import Header from "../../components/Header";
import Team from "../../components/Team";

/** Styles */
import styles from "./style.module.css";

/** Queries */
import { GET_TEAMS_FOR_COACH, GET_TEAMS_FOR_ADMIN, UPDATE_TEAM_STATUS } from "../../GraphQL/Teams/queries";
import { useEffect } from "react";

const Dashboard = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

  const [getTeamsForCoach, { data, loading, refetch }] = useLazyQuery(GET_TEAMS_FOR_COACH);

  const [getTeamsForAdmin, { data: dataTeamsAdmin, loading: loadingTeamsAdmin, refetch: refetchTeamsAdmin }] = useLazyQuery(GET_TEAMS_FOR_ADMIN);

  const [updateTeamStatus, { loading: loadingUpdateStatus }] = useMutation(UPDATE_TEAM_STATUS, {
    onCompleted: () => {
      Swal.fire("Update Berhasil", "Status berhasil diupdate.", "success");
    },
    onError: (error) => {
      console.log(error);

      Swal.fire("Ada Error!", "", "error");
    },
  });

  if (token?.role === "coach") {
    refetch();
  } else {
    refetchTeamsAdmin();
  }

  useEffect(() => {
    if (token !== null) {
      if (token.role === "coach") {
        getTeamsForCoach({
          variables: {
            id: token.id,
          },
        });
      } else {
        getTeamsForAdmin();
      }
    } else {
      navigate("/login");
    }
  }, []);

  const handleClickTeam = (id) => {
    navigate(`${id}`);
  };

  const handleStatus = (id, status) => {
    updateTeamStatus({
      variables: {
        id,
        status,
      },
    });
  };

  return (
    <>
      <Header />
      {token !== null ? (
        <div className={styles.dashboard_container}>
          <div className={styles.profile}>
            <h3>{token.username}</h3>
            <p>Role : {token.role}</p>
            <p>Email : {token.email}</p>
            <p>No Handphone : {token.noHandphone}</p>
          </div>

          <h2>Team List</h2>
          {loading || loadingTeamsAdmin || loadingUpdateStatus ? (
            <Spinner animation="border" variant="light" className={styles.spinner} />
          ) : !loading && data && token.role === "coach" ? (
            data.teams.length !== 0 ? (
              data.teams.map((team) => <Team team={team} handleClick={handleClickTeam} key={team.id} />)
            ) : (
              <p>Belum ada tim yang terdaftar...</p>
            )
          ) : !loadingTeamsAdmin && dataTeamsAdmin && token.role === "admin" ? (
            dataTeamsAdmin.teams.length !== 0 ? (
              dataTeamsAdmin.teams.map((team) => (
                <div key={team.id}>
                  <Team team={team} handleClick={handleClickTeam} />
                  <div className={styles.btn_verif_group}>
                    <button type="button" onClick={() => handleStatus(team.id, true)}>
                      Verifikasi
                    </button>
                    <button type="button" onClick={() => handleStatus(team.id, false)}>
                      Unverifikasi
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>Belum ada tim yang terdaftar...</p>
            )
          ) : (
            <p>Terdapat Error</p>
          )}

          {token.role === "coach" ? (
            <button type="button" onClick={() => navigate("add-team")} className={styles.btn_add}>
              Tambah Tim
            </button>
          ) : (
            <></>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Dashboard;
