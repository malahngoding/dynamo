import { NextPage } from "next";
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
import { PeopleA, PeopleC } from "src/design/peeps";

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
        <TitleSecondary css={{ marginTop: "$2" }}>
          Mulai dengan serius
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          Paket berkemah kode <strong>MALAHNGODING</strong>
        </Paragraph>
      </WallOfTextBlock>
      <Box css={{ flexWrap: "wrap", margin: "$5 0" }}>
        <RadicalCard color="blue" css={{ padding: "$2", textAlign: "center" }}>
          <PeopleA />
          <HeadingSecondary>Awesome Noob</HeadingSecondary>
          <Paragraph>
            Blog yang akan membantu kamu menghabiskan waktu luang untuk{" "}
            <strong>MALAHNGODING</strong>
          </Paragraph>
        </RadicalCard>
        <RadicalCard color="pink" css={{ padding: "$2", textAlign: "center" }}>
          <PeopleC />
          <HeadingSecondary>Full Stack</HeadingSecondary>
          <Paragraph>
            Potongan code dan script yang bisa membantu menyelesaikan masalah.
            Simpel dan membantu.
          </Paragraph>
        </RadicalCard>
        <RadicalCard
          color="yellow"
          css={{ padding: "$2", textAlign: "center" }}
        >
          <PeopleC />
          <HeadingSecondary>Project</HeadingSecondary>
          <Paragraph>Pilih</Paragraph>
        </RadicalCard>
      </Box>
    </Base>
  );
};

export default Camps;
