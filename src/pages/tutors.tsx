import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const Tutors: NextPage = () => {
  const heading = "Malah Mentor";
  const splinter = "Coding Tutor";
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
        <TitleSecondary css={{ marginTop: "$2" }}>Code With Me!</TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          Kami tahu dan pernah mengalami kesulitan ketika memulainya. Metode
          privat dengan tutor handal akan mempercepat proses pembelajaran kamu.
          Tim <strong>MALAHNGODING</strong> sangat bersememangat untuk membantu
          kamu menyelesaikan masalah programming kamu. Silahkan kontak kami
          melalui malahngoding@gmail.com untuk informasi lebih lanjut.
        </Paragraph>
      </WallOfTextBlock>
    </Base>
  );
};

export default Tutors;
