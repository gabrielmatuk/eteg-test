import React, { useState } from "react";
import UserForm from "./components/UserForm";
import { ColorResult } from 'react-color';
import { ToastContainer, toast } from "react-toastify";
import { useAxios } from './hooks/useAxios';
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import "./App.css";
import { METHODS_HTML, URL } from './constants/api';

const App: React.FC = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    cpf: "",
    color: "#f17013",
    observations: "",
  });
  const { data, error, loading, request } = useAxios();
  // const { loading, makeRequest, error } = useRequest();

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
    await request(URL, METHODS_HTML.POST, formData)
    // await makeRequest(URL, METHODS_HTML.POST, formData)
    console.log(JSON.stringify(data))
    if (!error) {
      toast.success("Dados enviados com sucesso!");
      setFormData(initialFormData);
    } else if (error === 'email') {
      toast.error("Email já cadastrado!");
    } else if (error === 'cpf') {
      toast.error("CPF já cadastrado!");
    } else {
      toast.error("Erro ao salvar usuário!");
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
