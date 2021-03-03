import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const Camps: NextPage = () => {
  const heading = "Pergi Berkemah Kode";
  const splinter = "Camps";
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
        <TitleSecondary css={{ marginTop: "$2" }}>asd </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>asd</Paragraph>
      </WallOfTextBlock>
    </Base>
  );
};

export default Camps;
