import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
import {
  HeadingSecondary,
  TitlePrimary,
  Paragraph,
  Splinter,
} from "src/design/typography";
import { Base } from "src/layouts/base";

const AboutUs: NextPage = () => {
  const heading = "Tentang Kami";
  const splinter = "About Us";
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
        <TitlePrimary>Halo Semua! 👋</TitlePrimary>
        <Paragraph css={{ marginTop: "$2" }}>
          Selamat datang di <strong>MALAHNGODING</strong> . Kami merupakan
          platform pembelajaran praktis untuk para pengembang aplikasi web dan
          mobile yang berfokus pada pemula. Karena untuk pemula, kami
          menyediakan konten khusus untuk kalian yang belum pernah menulis satu
          baris pun.Kami berharap platform ini bisa menjadi media untuk membantu
          sobat <strong>MALAHNGODING</strong> belajar dan mengembangkan diri.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Kami percaya bahwa proses <i>ngoding</i> merupakan proses yang
          menyenangkan dan bisa dipelajari oleh siapa saja. Baik tua maupun
          muda, tidak memandang umur. Semua tergantung dari besarnya semangat
          dan tujuan yang ingin di capai, apabila tujuan sudah dimiliki maka
          proses pembelajaran dan eksplorasi akan lebih terarah dan tepat
          sasaran. Sehingga membuat proses belajar <i>ngoding</i> semakin mudah.
          Besarnya semangat akan menjadi pendorong kita di saat kita mendapati
          kesulitan.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Jadi kumpulkan semangatmu, temukan tujuanmu ( yang akan kamu temukan
          di dalam web ini ) dan siapkan waktu senggangmu untuk lupa tidur, lupa
          makan, dan <strong>Malah Ngoding</strong>.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>Mad Respect!</Paragraph>
        <Paragraph css={{ fontWeight: 1000 }}>Malah Ngoding Squad</Paragraph>
      </WallOfTextBlock>
    </Base>
  );
};

export default AboutUs;
