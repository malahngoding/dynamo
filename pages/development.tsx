import { NextPage } from "next";
import Image from "next/image";
import { Page } from "components/page";
import {
  Title,
  Splinter,
  ContentHeading,
  InLineBranding,
} from "@malahngoding/instead";
import stack from "contents/stack";

const Development: NextPage = () => {
  return (
    <Page pageTitle="Development">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Development</Splinter>
        <Title center>Malah Ngoding Project</Title>
      </div>
      <div className="container w-full md:max-w-3xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <ContentHeading>Bekerja sama dengan kami</ContentHeading>
          <p className="py-6">
            <InLineBranding /> tidak hanya menyediakan pembelajaran dan
            pelatihan, namun kamu juga bisa mengajak kami untuk turut serta
            dalam pengembangan perangkat lunakmu. Baik itu yang berbasis web
            ataupun yang berbasis aplikasi. Silahkan hubungi kami melalui email
            di{" "}
            <a href="mailto:malahngoding@gmail.com">malahngoding@gmail.com</a>
          </p>
          <ContentHeading>Tech Stack Andalan Kami</ContentHeading>
          <div className="flex flex-row flex-wrap py-6">
            {stack.map((item) => (
              <div className="m-1" key={item.alt}>
                <img
                  src={item.src}
                  height={12}
                  alt={item.alt}
                  className="border-black b-1"
                />
              </div>
            ))}
          </div>
          <ContentHeading>Portofolio Project Malah Ngoding</ContentHeading>
          <div className="grid grid-cols-1 gap-8  md:grid-cols-2">
            <div className="border-2 border-black mx-2 w-auto font-bold box-shadow bg-pink-800 rounded-lg shadow-drop flex flex-col items-center content-center">
              <Image
                src="/contents/img/happifyourworld.com_(iPhone 6_7_8).png"
                height={667}
                width={375}
                alt="Happify Your World Softex"
                className="rounded-t-lg"
              />
              <p className="m-4 text-xl">Happifyourworld Website</p>
            </div>
            <div className="border-2 border-black mx-2 w-auto font-bold box-shadow bg-green-800 rounded-lg shadow-drop flex flex-col items-center content-center">
              <Image
                src="/contents/img/trubacloud_public_login(iPhone 6_7_8).png"
                height={667}
                width={375}
                alt="TJE Cloud"
                className="rounded-t-lg"
              />
              <p className="m-4 text-xl">Truba Cloud Web Apps</p>
            </div>
            <div className="border-2 border-black mx-2 w-auto font-bold box-shadow bg-white rounded-lg shadow-drop flex flex-col items-center content-center">
              <Image
                src="/contents/img/malahngoding_design(iPhone 6_7_8).png"
                height={667}
                width={375}
                alt="Malah Ngoding Design System"
                className="rounded-t-lg"
              />
              <p className="m-4 text-xl">Design System</p>
            </div>
            <div className="border-2 border-black mx-2 w-auto font-bold box-shadow bg-blue-800 rounded-lg shadow-drop flex flex-col items-center content-center">
              <Image
                src="/contents/img/yourproject_(iPhone 6_7_8).png"
                height={667}
                width={375}
                alt="Project Kamu?"
                className="rounded-t-lg"
              />
              <p className="m-4 text-xl">Project Kamu?</p>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Development;
