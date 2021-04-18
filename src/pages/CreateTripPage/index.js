import React from "react";
import { goToAdminHomePage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import {
  Button,
  BackButtonContent,
  ButtonContent,
  ButtonCreate,
  Title,
} from "./styles";
import { Input, Fields, Select } from "../../components/FormStyles";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import axios from "axios";

import { useForm } from "../../hooks/useForm";

export default function CreateTripPage() {
  const history = useHistory();
  useProtectedPage();
  const initialForm = {
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  };
  const CreateATrip = () => {
    const [form, onChangeForm, resetForm] = useForm(initialForm);

    const create = () => {
      const body = form;
      const token = window.localStorage.getItem("token");

      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips",
          body,
          {
            headers: {
              auth: token,
            },
          }
        )
        .then((res) => {
          alert("Formulário Enviado com sucesso!");
          history.push("/admin");
        })
        .catch((err) => {
          alert("Erro interno, tente novamente mais tarde");
        });
    };

    const handleClick = (e) => {
      e.preventDefault();
      create();
      resetForm();
    };

    return (
      <div>
        <form onSubmit={handleClick}>
          <Fields>
            <Input
              required
              name="name"
              type="text"
              onChange={onChangeForm}
              value={form.name}
              placeholder="Nome"
            />
            <Select
              required
              name="planet"
              onChange={onChangeForm}
              placeholder="Escolha sua Viagem"
            >
              <option value disabled selected>
                Selecione um planeta
              </option>
              <option value="Mercúrio">Mercúrio</option>
              <option value="Vênus">Vênus</option>
              <option value="Terra">Terra</option>
              <option value="Marte">Marte</option>
              <option value="Júpiter">Júpiter</option>
              <option value="Saturno">Saturno</option>
            </Select>

            <Input
              required
              name="date"
              onChange={onChangeForm}
              type="date"
              value={form.date}
              placeholder="Data"
            />
            <Input
              required
              name="description"
              onChange={onChangeForm}
              type="text"
              value={form.description}
              placeholder="Descrição"
              max={30}
            />
            <Input
              required
              name="durationInDays"
              onChange={onChangeForm}
              type="number"
              value={form.durationInDays}
              placeholder="Duração"
            />
          </Fields>
          <ButtonContent>
            <ButtonCreate> CRIAR </ButtonCreate>
          </ButtonContent>
        </form>
      </div>
    );
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToAdminHomePage(history)}>VOLTAR</Button>
      </BackButtonContent>
      <Title>CRIAR VIAGEM</Title>
      {CreateATrip()}
    </div>
  );
}
