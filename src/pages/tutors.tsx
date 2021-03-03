import { NextPage } from "next";
import { WallOfTextBlock, SplinterBox, HeadingBox } from "src/design/block";
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
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
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
