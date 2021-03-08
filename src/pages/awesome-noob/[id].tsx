import { NextPage } from "next";
import { Box } from "src/design/block";
import { Activity } from "src/layouts/activity";
import { Editor, Preview, ProjectBrowser } from "src/components/activity";

const projectBrowserItems = {
  splinter: "Stage 1",
  title: "Kembali ke markas",
  story:
    "eMang merupakan astronot yang sedang bertugas di bulan. Bantu eMang kembali ke markas dengan kodingan-mu.",
  instructions: ["Berikan e", "Ok"],
};

const Adventure: NextPage = () => {
  return (
    <Activity title="eMang Adventure">
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
    </Activity>
  );
};

export default Adventure;
