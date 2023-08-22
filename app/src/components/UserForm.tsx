import React from "react";
import FormField from './FormFields';
import ColorPicker from './ColorPicker';
import { ColorResult } from 'react-color';
import FixedHeightTextArea from './TextArea';

interface UserData {
  name: string;
  email: string;
  cpf: string;
  observations: string;
}

interface UserFormProps {
  data: UserData;
  updateFieldHandler: (fieldName: keyof UserData, value: string) => void;
  onColorChange: (color: ColorResult) => void;
}

const UserForm: React.FC<UserFormProps> = ({ data, updateFieldHandler, onColorChange }) => {

  const handleFieldChange = (fieldName: keyof UserData, value: string) => {
    updateFieldHandler(fieldName, value);
  };

  const handleColorChange = (newColor: ColorResult) => {
    onColorChange(newColor);
  };


  return (
    <div>
      <div className="form-control">
        <FormField label='Nome' type='text' name='name' placeholder='Digite seu nome' required value={data.name || ""} onChange={(value) => handleFieldChange("name", value)}></FormField>
      </div>
      <div className="form-control">
        <FormField label='Email' type='email' name='email' placeholder='Digite seu e-mail' required value={data.email || ""} onChange={(value) => handleFieldChange("email", value)}></FormField>
      </div>
      <div className="form-control">
        <FormField label='CPF' type='text' name='cpf' placeholder='Digite seu CPF' required value={data.cpf || ""} onChange={(value) => handleFieldChange("cpf", value)}></FormField>
      </div>
      <div className="form-control">
        <label htmlFor="comments">Observações:</label>
        <FixedHeightTextArea
          value={data.observations || ''}
          onChange={(value) => handleFieldChange("observations", value)}
          placeholder="Digite aqui suas observações"
        />
      </div>
      <div className='form-control'>
        <p>Escolha a sua cor favorita:</p>
        <ColorPicker onChange={handleColorChange} />
      </div>
    </div>
  );
};

export default UserForm;
