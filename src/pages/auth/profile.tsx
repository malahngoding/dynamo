/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Link from "next/link";
import { Card, Typography, Space } from "@supabase/ui";
import { supabase } from "src/hooks/useSupabase";
import { GetServerSideProps } from "next";

interface ProfileProps {
  user: { email: string };
}

const Profile = (props: ProfileProps) => {
  return (
    <div style={{ maxWidth: "420px", margin: "96px auto" }}>
      <Card>
        <Space direction="vertical" size={6}>
          <Typography.Text>You&quos;re signed in</Typography.Text>
          <Typography.Text strong>Email: {props.user.email}</Typography.Text>
          <Typography.Text type="success">
            User data retrieved server-side (from Cookie in getServerSideProps):
          </Typography.Text>

          <Typography.Text>
            <pre>{JSON.stringify(props.user, null, 2)}</pre>
          </Typography.Text>

          <Typography.Text>
            <Link href="/">
              <a>Static example with useSWR</a>
            </Link>
          </Typography.Text>
        </Space>
      </Card>
    </div>
  );
};

export default Profile;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { user } = await supabase.auth.api.getUserByCookie(context.req);

  if (!user) {
    // If no user, redirect to index.
    return { props: {}, redirect: { destination: "/", permanent: false } };
  }

  // If there is a user, return it.
  return { props: { user } };
};
