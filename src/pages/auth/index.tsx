import Link from "next/link";
import useSWR from "swr";
import { Auth, Space, Button, Icon } from "@supabase/ui";
import { supabase } from "src/hooks/useSupabase";
import { useEffect, useState } from "react";
import { NextPage } from "next";
import { RadicalCard } from "src/design/card";
import { Box } from "src/design/block";
import { Logo } from "src/design/branding";
import { Spacer } from "src/design/spacer";
import {
  HeadingSecondary,
  Paragraph,
  TitleSecondary,
} from "src/design/typography";

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: "GET",
    headers: new Headers({ "Content-Type": "application/json", token }),
    credentials: "same-origin",
  }).then((res) => res.json());

const Index: NextPage = () => {
  const { user, session } = Auth.useUser();
  const { data, error } = useSWR(
    session ? ["/api/getUser", session.access_token] : null,
    fetcher,
  );
  const [authView, setAuthView] = useState<any>("sign_in");

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "PASSWORD_RECOVERY") setAuthView("update_password");
        if (event === "USER_UPDATED")
          setTimeout(() => setAuthView("sign_in"), 1000);
        fetch("/api/auth", {
          method: "POST",
          headers: new Headers({ "Content-Type": "application/json" }),
          credentials: "same-origin",
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json());
      },
    );

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const View = (): JSX.Element => {
    if (!user)
      return (
        <Space direction="vertical" size={8}>
          <div>
            <Logo scale={1.8} />
            <Spacer />
            <TitleSecondary>Selamat Datang di </TitleSecondary>
            <HeadingSecondary>Malah Ngoding</HeadingSecondary>
          </div>
          <Auth
            supabaseClient={supabase}
            providers={["google", "github"]}
            view={authView}
            socialLayout="horizontal"
            socialButtonSize="xlarge"
          />
        </Space>
      );

    return (
      <Space direction="vertical" size={6}>
        {authView === "update_password" && (
          <Auth.UpdatePassword supabaseClient={supabase} />
        )}
        {user && (
          <>
            <Paragraph>You&apos;re signed in</Paragraph>
            <Paragraph>Email: {user.email}</Paragraph>

            <Button
              icon={<Icon src="" type="LogOut" />}
              type="outline"
              onClick={() => supabase.auth.signOut()}
            >
              Log out
            </Button>
            {error && <Paragraph>Failed to fetch user!</Paragraph>}
            {data && !error ? (
              <>
                <Paragraph>
                  User data retrieved server-side (in API route):
                </Paragraph>

                <Paragraph>
                  <pre>{JSON.stringify(data, null, 2)}</pre>
                </Paragraph>
              </>
            ) : (
              <div>Loading...</div>
            )}

            <Paragraph>
              <Link href="/profile">
                <a>SSR example with getServerSideProps</a>
              </Link>
            </Paragraph>
          </>
        )}
      </Space>
    );
  };

  return (
    <Box css={{ backgroundColor: "$green100", minHeight: "100vh" }}>
      <RadicalCard
        chill
        css={{ maxWidth: "420px", padding: "$1", md: { padding: "$3" } }}
      >
        <View />
      </RadicalCard>
    </Box>
  );
};

export default Index;
