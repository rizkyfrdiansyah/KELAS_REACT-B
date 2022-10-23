import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@apollo/client";

/** Sweet Alert */
import Swal from "sweetalert2";

/** Bootstrap Components */
import { Spinner } from "react-bootstrap";

/** Styles */
import styles from "./style.module.css";

/** Queries */
import { DELETE_MEMBER_BY_ID, DELETE_MEMBERS_BY_ID_TEAM, GET_TEAM_AND_MEMBERS_BY_ID } from "../../GraphQL/Members/queries";
import { DELETE_TEAM_BY_ID, UPDATE_TEAM_FILES_BY_ID } from "../../GraphQL/Teams/queries";

/** Components */
import Header from "../../components/Header";
import FileInput from "../../components/FileInput";

const TeamData = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const { id } = useParams();

  const navigate = useNavigate();

  const [files, setFiles] = useState({
    ktm: null,
    buktiPembayaran: null,
  });

  const { data, loading, refetch } = useQuery(GET_TEAM_AND_MEMBERS_BY_ID, {
    variables: {
      id,
    },
  });

  const [deleteTeamById, { loading: loadingDeleteTeam }] = useMutation(DELETE_TEAM_BY_ID, {
    onCompleted: () => {
      Swal.fire("Berhasil!", "Tim berhasil dihapus.", "success");

      navigate("/dashboard");
    },
    onError: (error) => {
      console.log(error);

      Swal.fire("Ada Error!", "", "error");
    },
  });

  const [deleteMemberById, { loading: loadingDeleteMember }] = useMutation(DELETE_MEMBER_BY_ID, {
    onCompleted: (data) => {
      refetch();

      Swal.fire("Berhasil!", "Anggota tim berhasil dihapus.", "success");
    },
    onError: (error) => {
      console.log(error);

      Swal.fire("Ada Error!", "", "error");
    },
  });

  const [deleteMembersByIdTeam] = useMutation(DELETE_MEMBERS_BY_ID_TEAM, {
    onCompleted: () => {
      refetch();

      deleteTeamById({
        variables: {
          id,
        },
      });
    },
    onError: (error) => {
      console.log(error);

      Swal.fire("Ada Error!", "", "error");
    },
  });

  const [updateTeamFilesById, { loading: loadingUploadFiles }] = useMutation(UPDATE_TEAM_FILES_BY_ID, {
    onCompleted: () => {
      refetch();

      Swal.fire("Berhasil!", "File berhasil diupload.", "success");
    },
    onError: (error) => {
      console.log(error);

      Swal.fire("Ada Error!", "", "error");
    },
  });

  useEffect(() => {
    if (token !== null) {
      refetch();
    } else {
      navigate("/login");
    }
  }, []);

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleDeleteTeam = (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Tidak dapat kembali setelah menghapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMembersByIdTeam({
          variables: {
            id,
          },
        });
      }
    });
  };

  const handleDeleteMember = (id) => {
    Swal.fire({
      title: "Apakah anda yakin?",
      text: "Tidak dapat kembali setelah menghapus!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya, hapus!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteMemberById({
          variables: {
            id,
          },
        });
      }
    });
  };

  const handleUploadKTM = () => {
    if (files.ktm != null) {
      getBase64(files.ktm).then((ktm) => {
        updateTeamFilesById({
          variables: {
            id,
            ktm,
            buktiPembayaran: data.teams[0].buktiPembayaran,
          },
        });
      });
    }
  };

  const handleUploadBuktiPembayaran = () => {
    if (files.buktiPembayaran != null) {
      getBase64(files.buktiPembayaran).then((buktiPembayaran) => {
        updateTeamFilesById({
          variables: {
            id,
            ktm: data.teams[0].ktm,
            buktiPembayaran,
          },
        });
      });
    }
  };

  return (
    <>
      <Header />
      <div className={styles.team_data_container}>
        <Link to="/dashboard" className={styles.back}>
          &lt; Back to Team List
        </Link>

        {loading || loadingDeleteTeam || loadingDeleteMember || loadingUploadFiles ? (
          <Spinner animation="border" variant="light" className={styles.spinner} />
        ) : !loading && data ? (
          <div className={styles.content_wrapper}>
            <div className={styles.team_data}>
              <h4>
                <span>{data.teams[0].teamName}</span> Team
              </h4>

              <p>{data.teams[0].university}</p>

              <p className={styles.status}>Status: {data.teams[0].status ? "Sudah" : "Belum"} Terverifikasi</p>

              <p className={styles.title}>Anggota Tim</p>

              {data.members.length === 0 ? (
                <p className={styles.no_team}>Belum ada anggota tim...</p>
              ) : (
                data.members.map((member, memberIdx) => (
                  <div className={styles.member_container} key={memberIdx}>
                    <p className={styles.sub_title}>Anggota {memberIdx + 1}</p>
                    <p>Nama : {member.name}</p>
                    <p>NIM : {member.nim}</p>
                    <p>Email : {member.email}</p>
                    <p>No HP : {member.noHandphone}</p>
                    <button type="button" onClick={() => navigate(`edit-member/${member.id}`)}>
                      Edit
                    </button>
                    <button type="button" className={styles.btn_delete} onClick={() => handleDeleteMember(member.id)}>
                      Hapus Anggota
                    </button>
                  </div>
                ))
              )}

              <FileInput name="ktm" title="Upload KTM (.rar/.zip)" accept=".rar,.zip" files={files} setFiles={setFiles} handleClick={handleUploadKTM} />

              {data.teams[0].ktm !== null ? (
                <p>
                  <span>KTM sudah diupload</span>
                </p>
              ) : (
                <></>
              )}

              <FileInput name="buktiPembayaran" title="Upload Bukti Pembayaran (.pdf)" accept=".pdf" files={files} setFiles={setFiles} handleClick={handleUploadBuktiPembayaran} />

              {data.teams[0].buktiPembayaran !== null ? (
                <p>
                  <span>Bukti Pembayaran sudah diupload</span>
                </p>
              ) : (
                <></>
              )}
            </div>

            <button type="button" className={data.members.length === 2 ? styles.hidden : null} onClick={() => navigate("add-member")}>
              Tambah Anggota
            </button>
            <button type="button" className={styles.btn_delete} onClick={() => handleDeleteTeam(id)}>
              Hapus Tim
            </button>
          </div>
        ) : (
          <p>Terdapat Error</p>
        )}
      </div>
    </>
  );
};

export default TeamData;
