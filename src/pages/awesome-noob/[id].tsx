import { NextPage } from "next";
import { Box } from "src/design/block";
import { Activity } from "src/layouts/activity";
import { Editor, Preview, ProjectBrowser } from "src/components/activity";
import { UnderConstructions } from "src/components/underconstructions";

const projectBrowserItems = {
  splinter: "Stage 1",
  title: "Kembali ke markas",
  story:
    "eMang merupakan astronot yang sedang bertugas di bulan. Bantu eMang kembali ke markas dengan kodingan-mu.",
  instructions: [
    "a. Tumis bawang putih hingga harum. Tambahkan telur lalu orak-arik.",
    "b. Kemudian tambahkan ayam yang telah dicincang halus dan sosis. Masukkan daun bawang. Tumis lagi.",
    "c. Masukkan nasi lalu aduk hingga rata. Tambahkan garam, merica, kecap ikan, dan penyedap rasa. Aduk rata sampai aroma sedap atau harum tercium.",
    "d. Pindahkan nasi goreng putih pada piring. Taburi bawang merah goreng sebagai tambahan.",
  ],
};

const Adventure: NextPage = () => {
  const isActive = true;
  return (
    <Activity title="eMang Adventure">
      {isActive ? (
        <UnderConstructions compact />
      ) : (
        <Box
          css={{ width: "100vw", height: "100vh", backgroundColor: "$dark100" }}
        >
          <ProjectBrowser
            splinter={projectBrowserItems.splinter}
            title={projectBrowserItems.title}
            story={projectBrowserItems.story}
            instructions={projectBrowserItems.instructions}
          />
          <Editor />
          <Preview />
        </Box>
      )}
    </Activity>
  );
};

export default Adventure;
