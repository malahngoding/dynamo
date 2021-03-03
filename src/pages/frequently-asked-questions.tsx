import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
import {
  HeadingSecondary,
  Paragraph,
  Splinter,
  TitleSecondary,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const Faq: NextPage = () => {
  const heading = "Pertanyaan & Bantuan";
  const splinter = "FAQ & Help";
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
          Apa itu <strong>MALAHNGODING</strong>?
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          <strong>MALAHNGODING</strong> merupakan platform pembelajaran praktis
          untuk para pengembang aplikasi web dan mobile, kami berharap platform
          ini bisa menjadi media untuk membantu sobat{" "}
          <strong>MALAHNGODING</strong> belajar dan mengembangkan diri.
        </Paragraph>
        <TitleSecondary css={{ marginTop: "$2" }}>
          Berapa biaya untuk <strong>MALAHNGODING</strong> ?
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          Konten <strong>MALAHNGODING</strong> terbagi antara konten gratis dan
          konten berbayar. Skema pembayaran <strong>MALAHNGODING</strong> saat
          masa pengembangan ini bersifat sukarela.
        </Paragraph>
        <Paragraph css={{ marginTop: "$1" }}>
          Untuk bentuk kerjasama dalam layanan <strong>MALAHNGODING</strong>{" "}
          yang lain akan berlaku sesuai kontrak untuk masing - masing perjanjian
          yang akan dibuat.
        </Paragraph>
        <TitleSecondary css={{ marginTop: "$2" }}>
          Bagaimana untuk bertanya pertanyaan atau melapor kesalahan/error pada
          konten kami dan bug pada platform kami?
        </TitleSecondary>
        <Paragraph css={{ marginTop: "$1" }}>
          Kamu bisa langsung melapor dan bertanya baik ke form dibawah atau
          dengan langsung berkontribusi pada source code kami yang tersedia
          secara open source pada{" "}
          <a
            href="https://github.com/malahngoding"
            target="_blank"
            rel="noreferrer"
            aria-label="Malah Ngoding Majestic Monolith"
            style={{ textDecoration: "underline" }}
          >
            laman github kami
          </a>
        </Paragraph>
      </WallOfTextBlock>
    </Base>
  );
};

export default Faq;
