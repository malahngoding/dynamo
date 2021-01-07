import { NextPage } from "next";
import { Page } from "components/page";
import { Splinter, Title } from "@malahngoding/instead";

const Projects: NextPage = () => {
  return (
    <Page pageTitle="Projects">
      <div className="flex flex-col content-center items-center p-48">
        <Splinter>study</Splinter>
        <Title>Projects</Title>
        <h1 className="p-24 font-bold">Under Constructions</h1>
      </div>
    </Page>
  );
};

export default Projects;
