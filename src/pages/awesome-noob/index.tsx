import { NextPage } from "next";
import Link from "next/link";
import {
  WallOfTextBlock,
  SplinterBox,
  HeadingBox,
  Box,
} from "src/design/block";
import { Button } from "src/design/button";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitlePrimary,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const Noob: NextPage = () => {
  const heading = "eMang Adventure";
  const splinter = "Awesome Noob";
  return (
    <Base title={heading}>
      <WallOfTextBlock>
        <SplinterBox>
          <Splinter>{splinter}</Splinter>
        </SplinterBox>
        <HeadingBox>
          <HeadingSecondary>{heading}</HeadingSecondary>
        </HeadingBox>
        <TitlePrimary>Bantu eMang menjalani misi di luar angkasa</TitlePrimary>
        <Paragraph css={{ margin: "$5 0" }}>
          Halo sobat malah ngoding. eMang merupakan astronot pertama Indonesia
          yang sampai di luar angkasa. Untuk menjalankan misi - misinya, eMang
          membutuhkan bantuan kalian. Belajar dasar malah ngoding sambil
          bertualang dengan <strong>eMang Adventure</strong>.
        </Paragraph>
      </WallOfTextBlock>
      <Box css={{ margin: "auto", marginTop: "-48px", marginBottom: "$3" }}>
        <Link href="/awesome-noob/bfd280436f45fa38eaacac3b00518f29">
          <a>
            <Button>Berangkat!</Button>
          </a>
        </Link>
      </Box>
    </Base>
  );
};

export default Noob;
