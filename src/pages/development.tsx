import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const DevelopmentService: NextPage = () => {
  const heading = "Development Service";
  const splinter = "Malah Ngoding Consultant";
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
        <TitleSecondary css={{ marginTop: "$2" }}>
          Bekerja sama dengan kami{" "}
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          <strong>MALAHNGODING</strong> tidak hanya menyediakan pembelajaran dan
          pelatihan, namun kamu juga bisa mengajak kami untuk turut serta dalam
          pengembangan perangkat lunakmu. Baik itu yang berbasis web ataupun
          yang berbasis aplikasi. Silahkan hubungi kami melalui email di{" "}
          <a href="mailto:malahngoding@gmail.com">malahngoding@gmail.com</a>
        </Paragraph>
        <TitleSecondary css={{ marginTop: "$2" }}>
          Tools andalan kami{" "}
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          Javascript | Typescript | PHP | Dart | React | NodeJS | NextJS |
          Laravel | Flutter | PostgreSQL | MySQL{" "}
        </Paragraph>
      </WallOfTextBlock>
    </Base>
  );
};

export default DevelopmentService;
