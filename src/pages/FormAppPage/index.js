import React, { useEffect, useState } from "react";
import { goToListTripPage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Button, BackButtonContent, ButtonContent, Title } from "./styles";
import { Input, Fields, Select } from "../../components/FormStyles";
import axios from "axios";
import { useForm } from "../../hooks/useForm";
import useRequestData from "../../hooks/useRequestData";

export default function FormAppPage() {
  const history = useHistory();
  const [countries, setCountries] = useState([]);
  const initialForm = {
    chooseTrip: "",
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  };

  const FormApp = () => {
    const [form, onChangeForm, resetForm] = useForm(initialForm);

    useEffect(() => {
      getCountries();
    }, []);

    const listTrips = useRequestData(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips",
      []
    );

    const getCountries = () => {
      axios
        .get(
          "https://servicodados.ibge.gov.br/api/v1/localidades/paises?orderBy=nome"
        )
        .then((res) => {
          setCountries(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const applyToTrip = () => {
      const body = form;
      const id = form.chooseTrip;

      axios
        .post(
          `https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/trips/${id}/apply`,
          body
        )
        .then((res) => {
          alert("Formulário enviado com sucesso");
          history.push("/viagens");
        })
        .catch((err) => {
          alert("Erro interno");
        });
    };

    const handleClick = (e) => {
      e.preventDefault();
      applyToTrip();
      resetForm();
    };

    return (
      <div>
        <form onSubmit={handleClick}>
          <Fields>
            <Select
              required
              name="chooseTrip"
              value={form.chooseTrip}
              onChange={onChangeForm}
              placeholder="Escolha sua Viagem"
            >
              <option selected disabled>
                Selecione uma opção
              </option>
              {listTrips.map((trip) => {
                return <option value={trip.id}>{trip.name}</option>;
              })}
            </Select>
            <Input
              required
              name="name"
              onChange={onChangeForm}
              value={form.name}
              placeholder="Nome"
            />
            <Input
              required
              name="age"
              onChange={onChangeForm}
              type="number"
              value={form.age}
              placeholder="Idade"
            />
            <Input
              required
              name="applicationText"
              onChange={onChangeForm}
              type="text"
              value={form.applicationText}
              placeholder="Texto de candidatura"
              max={30}
            />
            <Input
              required
              name="profession"
              onChange={onChangeForm}
              type="text"
              value={form.profession}
              placeholder="Profissão"
              max={10}
            />
            <Select
              required
              name="country"
              onChange={onChangeForm}
              type="text"
              value={form.country}
              placeholder="País de origem"
            >
              <option selected disabled>
                Selecionar País de origem
              </option>
              {countries.map((country) => {
                return <option value={country.nome}>{country.nome}</option>;
              })}
            </Select>
          </Fields>
          <ButtonContent>
            <Button> INSCREVA-SE</Button>
          </ButtonContent>
        </form>
      </div>
    );
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToListTripPage(history)}>VOLTAR</Button>
      </BackButtonContent>
      <Title>INSCREVA-SE PARA UMA VIAGEM</Title>
      {FormApp()}
    </div>
  );
}
