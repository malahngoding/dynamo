import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
import { RadicalCard } from "src/design/card";
import { PeopleA, PeopleB, PeopleC } from "src/design/peeps";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const Study: NextPage = () => {
  const heading = "Belajar Mandiri";
  const splinter = "Study";
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
          Membaca adalah jendela dunia
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          Memang membaca tulisan yang panjang sedikit membosankan di masa
          sekarang. Kita ingin semua poin langsung tersampaikan dengan jelas.{" "}
          <strong>MALAHNGODING</strong> membagi artikel terhadap 3 kategori yang
          memudahkan kita semua.
        </Paragraph>
      </WallOfTextBlock>
      <Box css={{ flexWrap: "wrap", margin: "$5 0" }}>
        <RadicalCard color="blue" css={{ padding: "$2", textAlign: "center" }}>
          <PeopleA />
          <HeadingSecondary>Guide</HeadingSecondary>
          <Paragraph>
            Blog yang akan membantu kamu menghabiskan waktu luang untuk{" "}
            <strong>MALAHNGODING</strong>
          </Paragraph>
        </RadicalCard>
        <RadicalCard color="pink" css={{ padding: "$2", textAlign: "center" }}>
          <PeopleB />
          <HeadingSecondary>Snippets</HeadingSecondary>
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
          <HeadingSecondary>Flashcards</HeadingSecondary>
          <Paragraph>
            Pertajam analisa kamu dengan menjawab pertanyaan-pertanyaan seputar
            kode.
          </Paragraph>
        </RadicalCard>
      </Box>
    </Base>
  );
};

export default Study;
