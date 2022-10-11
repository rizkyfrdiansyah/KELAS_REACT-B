import { useRef, useState } from "react";

/** Components */
import Form from "./components/Form";

const App = () => {
  const [inputs, setInputs] = useState({
    nama: "",
    email: "",
    noHandphone: "",
    pendidikan: {
      it: false,
      nonIt: false,
    },
    kelas: "",
    harapan: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nama: "",
    email: "",
    noHandphone: "",
  });

  const suratKesungguhan = useRef(null);

  return <Form inputs={inputs} setInputs={setInputs} errorMessage={errorMessage} setErrorMessage={setErrorMessage} suratKesungguhan={suratKesungguhan} />;
};

export default App;
