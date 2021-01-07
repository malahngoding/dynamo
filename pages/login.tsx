import { NextPage } from "next";
import { Page } from "components/page";
import { Title } from "@malahngoding/instead";

const Login: NextPage = () => {
  return (
    <Page pageTitle="Login">
      <div className="flex flex-col content-center items-center p-48">
        <Title>Masuk</Title>
        <h1 className="p-24 font-bold">Under Constructions</h1>
      </div>
    </Page>
  );
};

export default Login;
