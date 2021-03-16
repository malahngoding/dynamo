import useSWR from "swr";
import { Auth, Space } from "@supabase/ui";
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
import { useRouter } from "next/router";
import { Button } from "src/design/button";

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
    const router = useRouter();
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
            socialButtonSize="large"
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
            <TitleSecondary>
              Terima kasih sudah mendaftar di malahngoding.com
            </TitleSecondary>
            <Paragraph>Email kamu: {user.email}</Paragraph>
            <Paragraph>
              Saat ini malahngoding.com sedang dalam tahap pengembangan. Namun
              kamu bisa request materi atau fitur yang mau ditambahkan di
              platform ini.
            </Paragraph>
            <Button color="green" onClick={() => router.push("/request")}>
              Request
            </Button>
            <Button color="blue" onClick={() => router.push("/")}>
              Kembali
            </Button>
            <Button onClick={() => supabase.auth.signOut()}>Log out</Button>
            {error && <Paragraph>Failed to fetch user!</Paragraph>}
            {data && !error ? <></> : <div>Loading...</div>}
          </>
        )}
      </Space>
    );
  };

  return (
    <Box css={{ backgroundColor: "$green100", minHeight: "100vh" }}>
      <RadicalCard
        chill
        css={{
          maxWidth: 420,
          pmaxWidth: 420,
          padding: "$1",
          md: { padding: "$3" },
        }}
      >
        <View />
      </RadicalCard>
    </Box>
  );
};

export default Index;
