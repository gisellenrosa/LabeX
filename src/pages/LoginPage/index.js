import React from "react";
import { goToHomePage } from "../../routes/coordinator";
import { useHistory } from "react-router-dom";
import { Button, BackButtonContent, ButtonContent, Title } from "./styles";
import { Input, Fields } from "../../components/FormStyles";
import axios from "axios";
import { Container } from "../HomePage/styles";
import { useForm } from "../../hooks/useForm";

export default function LoginPage() {
  const history = useHistory();
  const initialForm = {
    email: "",
    password: "",
  };

  const FormLogin = () => {
    const [form, onChangeForm, resetForm] = useForm(initialForm);

    const login = () => {
      const body = form;

      axios
        .post(
          "https://us-central1-labenu-apis.cloudfunctions.net/labeX/giselle-rosa-cruz/login",
          body
        )
        .then((res) => {
          window.localStorage.setItem("token", res.data.token);
          history.push("/admin");
        })
        .catch((err) => {
          alert("Erro: Usuário não encontrado");
        });
    };

    const handleClick = (e) => {
      e.preventDefault();
      resetForm();
      login();
    };

    return (
      <div>
        <form onSubmit={handleClick}>
          <Fields>
            <Input
              required
              title="É necessário preencher o campo de Email"
              oninvalid="this.setCustomValidity('Cadê o Email correto?')"
              name="email"
              onChange={onChangeForm}
              value={form.email}
              placeholder="Email"
              pattern={"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$"}
            />

            <Input
              required
              title="É necessário preencher a senha"
              name="password"
              onChange={onChangeForm}
              type="password"
              value={form.password}
              placeholder="Senha"
              max={6}
              min={6}
            />
          </Fields>
          <ButtonContent>
            <Button> ENTRAR </Button>
          </ButtonContent>
        </form>
      </div>
    );
  };

  return (
    <div>
      <BackButtonContent>
        <Button onClick={() => goToHomePage(history)}>VOLTAR</Button>
      </BackButtonContent>

      <Container>
        <Title>LOGIN</Title>
        {FormLogin()}
      </Container>
    </div>
  );
}
