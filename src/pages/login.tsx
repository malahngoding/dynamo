import { NextPage } from "next";
import { UnderConstructions } from "src/components/underconstructions";
import { Auth } from "src/layouts/auth";

const Login: NextPage = () => {
  return (
    <Auth title="Masuk">
      <UnderConstructions compact={false} />;
    </Auth>
  );
};

export default Login;
