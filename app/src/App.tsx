import React from "react";
import "react-toastify/dist/ReactToastify.css";

import UserForm from "./components/UserForm";

import { ColorResult } from 'react-color';
import { ToastContainer, toast } from "react-toastify";
import { CPFValidation } from './validators'
import ReactLoading from "react-loading";
import AxiosRequests from './api';

import "./App.css";
import { ERRORS_API } from './constants/api';

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    cpf: "",
    color: "#f17013",
    observations: "",
  });

  const initialFormData = {
    name: "",
    email: "",
    cpf: "",
    color: "#f17013",
    observations: "",
  }

  const updateFieldHandler = (fieldName: keyof typeof formData, value: string) => {
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleColorChange = (color: ColorResult) => {
    const newColor = color.hex || '#f17013';
    setFormData((prevData) => ({
      ...prevData,
      color: newColor,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!CPFValidation(formData.cpf)) return toast.error("CPF inválido!");

    try {
      setLoading(true);
      await AxiosRequests.createUser(formData)
      toast.success("Usuário cadastrado com sucesso!");
      setFormData(initialFormData);
      setLoading(false);
      /* eslint-disable-next-line */
    } catch (err: any) {
      console.log(JSON.stringify(err.response.data.error))
      const responseErrorMessage = String(err.response.data.error)
      if (responseErrorMessage === ERRORS_API.EMAIL) toast.error("Email já cadastrado!");
      if (responseErrorMessage === ERRORS_API.CPF) toast.error("CPF já cadastrado!");
      setLoading(false);
    }
  }

  return (

    <div className="app">
      <div className="header">
        <h2> Formulário John Doe</h2>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="inputs-container"> {loading ? <ReactLoading type="spin" color="#cfcfcf" height={50} width={50} /> :
            (<UserForm data={formData} updateFieldHandler={updateFieldHandler} onColorChange={handleColorChange} />)
          }
          </div>
          <div className="actions">
            <button type="submit" disabled={loading} className='submit-button'>
              {loading ? <span>Enviando...</span> : <span>Enviar</span>}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default App;
