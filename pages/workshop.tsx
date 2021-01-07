import { NextPage } from "next";
import { Page } from "components/page";
import {
  Title,
  Splinter,
  ContentHeading,
  InLineBrandingEvent,
} from "@malahngoding/instead";

const Workshop: NextPage = () => {
  return (
    <Page pageTitle="Workshop">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Workshop</Splinter>
        <Title center>Malah Ngoding Bareng</Title>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <ContentHeading>Gather up!</ContentHeading>
          <p className="py-6">
            <InLineBrandingEvent /> merupakan event yang dilaksanakan baik
            secara online maupun offline oleh kami. Setiap acaranya akan
            menghadirkan pemateri yang asyik dan membawakan tema yang selalu
            menarik dan relevan terhadap perkembangan teknologi.
          </p>
          <div className="border-2 border-black mx-2 w-auto font-bold box-shadow bg-blue-800 rounded-lg shadow-drop flex flex-col items-center content-center">
            <h1 className="m-4">Belum ada Jadwal</h1>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Workshop;
