import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
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
        <Box
          direction="column"
          css={{
            margin: "$3 0 -$0 0",
            alignSelf: "flex-start",
            md: { alignSelf: "center" },
          }}
        >
          <Splinter>{splinter}</Splinter>
        </Box>
        <Box
          direction="column"
          css={{
            margin: "0 0 $2 0",
            alignSelf: "flex-start",
            md: { alignSelf: "center" },
          }}
        >
          <HeadingSecondary>{heading}</HeadingSecondary>
        </Box>
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
