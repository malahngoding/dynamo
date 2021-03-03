import { NextPage } from "next";
import {
  WallOfTextBlock,
  SplinterBox,
  HeadingBox,
  Box,
} from "src/design/block";
import { Button } from "src/design/button";
import { ConfusedPeople } from "src/design/peeps";
import { Spacer } from "src/design/spacer";
import {
  HeadingPrimary,
  Splinter,
  HeadingTertiary,
  Paragraph,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";
import { styled } from "stitches.config";

const Home: NextPage = () => {
  const heading = "Malah Ngoding";
  const splinter = "Halo Dunia!";
  return (
    <Base title={heading}>
      <WallOfTextBlock>
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingPrimary>{heading}</HeadingPrimary>
        </HeadingBox>
      </WallOfTextBlock>
      <div></div>
      <ColoredBanner color="yellow">
        <HeadingTertiary css={{ margin: "$1 $0 0 $0" }}>
          Menghabiskan waktu luang untuk malah ngoding.
        </HeadingTertiary>
        <Paragraph css={{ margin: "0 $1 $1 $1" }}>
          Bingung kalau lagi nggak ada kerjaan mau ngapain?
        </Paragraph>
        <Box css={{ marginBottom: "-3em" }}>
          <ConfusedPeople />
        </Box>
      </ColoredBanner>
      <WallOfTextBlock css={{ padding: "$0 $1 $2 $1", marginTop: "$5" }}>
        <TitleSecondary>
          Saatnya belajar <i>ngoding</i> dengan cara yang menarik dan
          menyenangkan!
        </TitleSecondary>
        <Spacer />
        <Paragraph css={{ margin: "$1 0" }}>
          Belajar mulai dari nol, praktik sambil memahami konsep dasar. Semuanya
          seperti bermain <i>video game</i>. Memecahkan teka-teki sambil
          membantu eMang menjelajah luar angkasa.
        </Paragraph>
        <Spaceman className="pixel" />
        <Paragraph css={{ margin: "$1 0" }}>
          Kamu akan membaca perintah, memecahkan permasalahan eMang, langkah
          demi langkah.
        </Paragraph>
      </WallOfTextBlock>
      <ColoredBanner color="green">
        <HeadingTertiary css={{ margin: "$1 $0 0 $0" }}>
          Bergabung dengan komunitas Malah Ngoding
        </HeadingTertiary>
        <Paragraph css={{ margin: "0 $1 $1 $1" }}>
          Tumbuh dan berkembang beriringan. Bersama-sama{" "}
          <strong>Malah Ngoding</strong>.
        </Paragraph>
        <Button color="pink">Daftar</Button>
        <Spacer css={{ height: "$1" }} />
      </ColoredBanner>
      <Activation />
    </Base>
  );
};

const Spaceman = styled("div", {
  width: "100%",
  height: "120px",
  backgroundSize: "cover",
  backgroundImage: "url(/assets/img/SpacemanTrio.png)",
});

const ColoredBanner = styled(Box, {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    color: {
      red: { backgroundColor: "$red" },
      green: { backgroundColor: "$green" },
      blue: { backgroundColor: "$blue" },
      yellow: { backgroundColor: "$yellow" },
      pink: { backgroundColor: "$pink" },
    },
  },
});

const Activation = styled("div", {
  backgroundColor: "$green",
  backgroundSize: "cover",
  backgroundImage: "url(/assets/svg/activation.svg)",
  height: "10rem",
});

export default Home;
