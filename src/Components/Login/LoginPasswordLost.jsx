import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import UseForm from "../../Hooks/UseForm";
import { PASSWORD_LOST } from "../../api";
import UseFetch from "../../Hooks/UseFetch";
import Error from "../Helper/Error";

const LoginPasswordLost = () => {
  const login = UseForm();

  const { data, loading, error, request } = UseFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }
  return (
    <section>
      <h1 className="title">Perdeu a senha?</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Email / Usuário" type="text" name="login" {...login} />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar E-mail</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
};

export default LoginPasswordLost;
