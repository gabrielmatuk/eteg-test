import React, { useState } from "react";
import UserForm from "./components/UserForm";
import { ColorResult } from 'react-color';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import "./App.css";
import { METHODS_HTML, URL } from './constants/api';
import AxiosRequests from './api';

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
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
    try {
      setLoading(true);
      const res = await AxiosRequests.getAllUsers()
      console.log(res)
      toast.success("Dados enviados com sucesso!");
      setFormData(initialFormData);
      setLoading(false);
    } catch (err: any) {
      const errMsg = String(err.response.data.error)
      if (errMsg.includes('email')) toast.error("Email já cadastrado!");
      if (errMsg.includes('cpf')) toast.error("CPF já cadastrado!");
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
