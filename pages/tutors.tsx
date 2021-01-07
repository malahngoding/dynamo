import { NextPage } from "next";
import { Page } from "components/page";
import {
  Title,
  Splinter,
  ContentHeading,
  InLineBranding,
} from "@malahngoding/instead";

const Tutors: NextPage = () => {
  return (
    <Page pageTitle="Tutors">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Tutors</Splinter>
        <Title center>Coding Tutor</Title>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <ContentHeading>For those who needs and assist</ContentHeading>
          <p className="py-6">
            Kami tahu dan pernah mengalami kesulitan ketika memulainya. Metode
            privat dengan tutor handal akan mempercepat proses pembelajaran
            kamu. Tim <InLineBranding /> sangat bersememangat untuk membantu
            kamu menyelesaikan masalah programming kamu. Silahkan kontak kami
            melalui{" "}
            <a href="mailto:malahngoding@gmail.com">malahngoding@gmail.com</a>{" "}
            untuk informasi lebih lanjut.
          </p>
        </div>
      </div>
    </Page>
  );
};

export default Tutors;
