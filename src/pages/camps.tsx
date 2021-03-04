import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  WallOfTextBlock,
  SplinterBox,
  HeadingBox,
  Box,
} from "src/design/block";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";
import { RadicalCard } from "src/design/card";

const Camps: NextPage = () => {
  const heading = "Pergi Berkemah Kode";
  const splinter = "Camps";
  return (
    <Base title={heading}>
      <WallOfTextBlock>
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
        <Box css={{ margin: "auto" }}>
          <TitleSecondary css={{ marginTop: "$2", textAlign: "center" }}>
            Mulai dengan semangat <br /> dan pergi berkemah kode ala{" "}
            <strong>MALAHNGODING</strong>
          </TitleSecondary>
          <Paragraph css={{ marginTop: "$1" }}></Paragraph>
        </Box>
      </WallOfTextBlock>
      <Box css={{ flexWrap: "wrap", margin: "$5 0" }}>
        <Link href="/awesome-noob">
          <a>
            <RadicalCard css={{ padding: "$2", textAlign: "center" }}>
              <Image
                height={203}
                width={140}
                src="/assets/img/Spaceman.png"
                className="pixel"
              />
              <HeadingSecondary>Awesome Noob</HeadingSecondary>
              <Paragraph>
                Bantu eMang menyelesaikan tantangan luar angkasa
              </Paragraph>
            </RadicalCard>
          </a>
        </Link>
        <Link href="/full-stack">
          <a>
            <RadicalCard
              color="yellow"
              css={{ padding: "$2", textAlign: "center" }}
            >
              <Image height={240} width={240} src="/assets/img/js.png" />
              <HeadingSecondary>Full Stack</HeadingSecondary>
              <Paragraph>Belajar membuat aplikasi berbasis web</Paragraph>
            </RadicalCard>
          </a>
        </Link>
        <Link href="/projects">
          <a>
            <RadicalCard
              className="radical-grad"
              css={{ padding: "$2", textAlign: "center" }}
            >
              <Image height={240} width={240} src="/assets/img/projects.jpeg" />
              <HeadingSecondary>Project</HeadingSecondary>
              <Paragraph>
                Pilih project yang menarik untuk dibuat. Panduan langkah demi
                langkah{" "}
              </Paragraph>
            </RadicalCard>
          </a>
        </Link>
      </Box>
    </Base>
  );
};

export default Camps;
