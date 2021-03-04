import { NextPage } from "next";
import { UnderConstructions } from "src/components/underconstructions";
import { Auth } from "src/layouts/auth";

const SignUp: NextPage = () => {
  return (
    <Auth title="Daftar">
      <UnderConstructions compact={false} />;
    </Auth>
  );
};

export default SignUp;
