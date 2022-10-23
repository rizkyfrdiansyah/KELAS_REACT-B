import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

/** Styles */
import styles from "./style.module.css";

/** Components */
import Form from "../../components/Form";
import Header from "../../components/Header";

/** Actions */
import { editTimeline } from "../../store/Timeline";

const EditTimeline = () => {
  const token = JSON.parse(localStorage.getItem("token"));

  const navigate = useNavigate();

  const timeline = useSelector((state) => state.timeline.timeline);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState([
    {
      label: "Pendaftaran",
      name: "pendaftaran",
      type: "text",
      value: timeline[0].date,
      placeholder: "Masukkan tanggal pendaftaran",
    },
    {
      label: "Penyisihan",
      name: "penyisihan",
      type: "text",
      value: timeline[1].date,
      placeholder: "Masukkan tanggal penyisihan",
    },
    {
      label: "Pengumuman Finalis",
      name: "pengumumanFinalis",
      type: "text",
      value: timeline[2].date,
      placeholder: "Masukkan tanggal pengumuman finalis",
    },
    {
      label: "Final",
      name: "final",
      type: "text",
      value: timeline[3].date,
      placeholder: "Masukkan tanggal final",
    },
    {
      label: "Pengumuman Pemenang",
      name: "pengumumanPemenang",
      type: "text",
      value: timeline[4].date,
      placeholder: "Masukkan tanggal pengumuman pemenang",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editTimeline([
        {
          title: inputs[0].label,
          date: inputs[0].value,
        },
        {
          title: inputs[1].label,
          date: inputs[1].value,
        },
        {
          title: inputs[2].label,
          date: inputs[2].value,
        },
        {
          title: inputs[3].label,
          date: inputs[3].value,
        },
        {
          title: inputs[4].label,
          date: inputs[4].value,
        },
      ])
    );

    navigate("/");
  };

  useEffect(() => {
    if (token === null || token?.role === "coach") {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Header />
      <Link to="/" className={styles.back}>
        &lt; Back to Home
      </Link>

      <div className={styles.edit_timeline_container}>
        <h2>Edit Timeline</h2>
        <Form inputs={inputs} setInputs={setInputs} buttonText="Save" handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default EditTimeline;
