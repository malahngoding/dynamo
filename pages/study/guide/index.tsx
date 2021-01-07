import { Page } from "components/page";
import { Splinter, Title } from "@malahngoding/instead";
import { NextPage } from "next";

const Guide: NextPage = () => {
  return (
    <Page pageTitle="Guide">
      <div className="flex flex-col content-center items-center p-48">
        <Splinter>study</Splinter>
        <Title>Guide</Title>
        <h1 className="p-24 font-bold">Under Constructions</h1>
      </div>
    </Page>
  );
};

export default Guide;
