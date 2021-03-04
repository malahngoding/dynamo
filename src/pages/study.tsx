import { NextPage } from "next";
import Link from "next/link";
import {
  WallOfTextBlock,
  Box,
  SplinterBox,
  HeadingBox,
} from "src/design/block";
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
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
        <TitleSecondary css={{ marginTop: "$2" }}>
          Membaca adalah jendela dunia 📚
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          Memang membaca tulisan yang panjang sedikit membosankan di masa
          sekarang. Kita ingin semua poin langsung tersampaikan dengan jelas.{" "}
          <strong>MALAHNGODING</strong> membagi artikel terhadap 3 kategori yang
          memudahkan kita semua.
        </Paragraph>
      </WallOfTextBlock>
      <Box css={{ flexWrap: "wrap", margin: "$5 0" }}>
        <Link href="/guide">
          <a>
            <RadicalCard
              color="blue"
              css={{ padding: "$2", textAlign: "center" }}
            >
              <PeopleA />
              <HeadingSecondary>Guide</HeadingSecondary>
              <Paragraph>
                Blog yang akan membantu kamu menghabiskan waktu luang untuk{" "}
                <strong>MALAHNGODING</strong>
              </Paragraph>
            </RadicalCard>
          </a>
        </Link>
        <Link href="/snippets">
          <a>
            <RadicalCard
              color="pink"
              css={{ padding: "$2", textAlign: "center" }}
            >
              <PeopleB />
              <HeadingSecondary>Snippets</HeadingSecondary>
              <Paragraph>
                Potongan code dan script yang bisa membantu menyelesaikan
                masalah. Simpel dan membantu.
              </Paragraph>
            </RadicalCard>
          </a>
        </Link>
        <Link href="/flash-cards">
          <a>
            <RadicalCard
              color="yellow"
              css={{ padding: "$2", textAlign: "center" }}
            >
              <PeopleC />
              <HeadingSecondary>Flashcards</HeadingSecondary>
              <Paragraph>
                Pertajam analisa kamu dengan menjawab pertanyaan-pertanyaan
                seputar kode.
              </Paragraph>
            </RadicalCard>
          </a>
        </Link>
      </Box>
    </Base>
  );
};

export default Study;
