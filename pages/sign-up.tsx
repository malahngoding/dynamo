import { NextPage } from "next";
import { Page } from "components/page";
import { Title } from "@malahngoding/instead";

const SignUp: NextPage = () => {
  return (
    <Page pageTitle="SignUp">
      <div className="flex flex-col content-center items-center p-48">
        <Title>Daftar</Title>
        <h1 className="p-24 font-bold">Not Yet</h1>
      </div>
    </Page>
  );
};

export default SignUp;
