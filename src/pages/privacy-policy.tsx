import { NextPage } from "next";
import { WallOfTextBlock, Box } from "src/design/block";
import { HeadingSecondary, Paragraph, Splinter } from "src/design/typography";
import { Base } from "src/layouts/base";
import { styled } from "stitches.config";

const PrivacyPolicy: NextPage = () => {
  const heading = "Kebijakan Privasi";
  const splinter = "Privacy Policy";
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
        <Paragraph css={{ marginTop: "$2" }}>
          <strong>MALAHNGODING</strong> menyadari pentingnya keamanan data
          pribadi setiap pengguna platform <strong>MALAHNGODING</strong>. Data
          pribadi beserta catatan aktivitas pengguna akan dicatat dan disimpan
          dalam platform <strong>MALAHNGODING</strong> dan platform pihak ke
          tiga (Google Analytics). Data tersebut akan disimpan dan digunakan
          oleh <strong>MALAHNGODING</strong> dan kami berkomitmen untuk menjaga
          keamanan dan kerahasiaan data pribadi yang diberikan Pengguna saat
          mengakses dan menggunakan platform <strong>MALAHNGODING</strong>.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Data yang akan disimpan mencakup dan tidak terbatas kepada identitas
          pribadi, alamat email, dan catatan aktivitas yang dilakukan di dalam
          platform <strong>MALAHNGODING</strong>. Kami sebagai platform berhak
          menggunakan data tersebut untuk :
        </Paragraph>
        <ListItem>
          <li>
            Bahan riset dalam meningkatkan kualitas pengalaman dan pelayanan
            dalam menggunakan platform <strong>MALAHNGODING</strong>
          </li>
          <li>
            Sumber informasi dalam melakukan sosialisasi, publikasi, ataupun
            promosi produk <strong>MALAHNGODING</strong>
          </li>
          <li>
            Komunikasi secara langsung kepada para pengguna platform{" "}
            <strong>MALAHNGODING</strong>
          </li>
        </ListItem>
        <Paragraph css={{ marginTop: "$2" }}>
          Data pribadi yang diberikan oleh pengguna situs merupakan data yang
          diserahkan secara sadar dan tanpa adanya tekanan atau paksaan dari
          pihak manapun.
        </Paragraph>
        <Paragraph css={{ marginTop: "$2" }}>
          Keutuhan dan keamanan data pribadi, termasuk dan tidak terbatas kepada
          data account pengguna situs (email dan password), juga merupakan
          sepenuhnya tanggung jawab pengguna situs. Tim{" "}
          <strong>MALAHNGODING</strong> tidak bertanggung jawab dan tidak dapat
          dimintai pertanggungjawaban atas penyalahgunaan data tersebut yang
          dikarenakan kelalaian oleh pengguna situs.
        </Paragraph>
      </WallOfTextBlock>
    </Base>
  );
};

export default PrivacyPolicy;

const ListItem = styled("ul", {
  listStyleType: "square",
  marginLeft: "$2",
  textAlign: "left",
  li: {
    paddingLeft: "$0",
    margin: "$0 0",
  },
});
