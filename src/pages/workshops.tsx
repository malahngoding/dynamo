import { NextPage } from "next";
import {
  WallOfTextBlock,
  Box,
  SplinterBox,
  HeadingBox,
} from "src/design/block";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const Workshop: NextPage = () => {
  const heading = "Malah Ngoding Bareng";
  const splinter = "Workshops";
  return (
    <Base title={heading}>
      <WallOfTextBlock>
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
        <TitleSecondary css={{ marginTop: "$2" }}>Gather up!</TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          <strong>MALAHNGODINGBARENG</strong> merupakan event yang dilaksanakan
          baik secara online maupun offline oleh kami. Setiap acaranya akan
          menghadirkan pemateri yang asyik dan membawakan tema yang selalu
          menarik dan relevan terhadap perkembangan teknologi.
        </Paragraph>
        <Box direction="column" css={{ margin: "auto", padding: "$2" }}>
          <TitleSecondary>:(</TitleSecondary>
          <Paragraph>Belum ada jadwal</Paragraph>
        </Box>
      </WallOfTextBlock>
    </Base>
  );
};

export default Workshop;
