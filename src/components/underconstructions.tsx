import Image from "next/image";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Box } from "src/design/block";
import { Button } from "src/design/button";
import { HeadingPrimary, TitlePrimary } from "src/design/typography";

interface UnderConstructionsProps {
  compact: boolean;
}

export const UnderConstructions = (
  props: UnderConstructionsProps,
): JSX.Element => {
  const router = useRouter();
  return (
    <Fragment>
      <Box
        css={{
          minHeight: props.compact ? 0 : "100vh",
          margin: props.compact ? "$1 $0 $3 $0" : 0,
          flexDirection: "column",
          flexWrap: "wrap",
          md: { flexDirection: "row" },
        }}
      >
        <Image src="/assets/img/chill.png" height={380} width={640} />
        <div>
          <HeadingPrimary>Santai Dulu</HeadingPrimary>
          <TitlePrimary>Masih dikoding...</TitlePrimary>
        </div>
      </Box>
      <Box css={{ height: "5vh", paddingBottom: "$5" }}>
        <Button onClick={() => router.back()}>
          Kembali ke laman sebelumnya
        </Button>
      </Box>
    </Fragment>
  );
};
