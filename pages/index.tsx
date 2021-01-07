import { NextPage } from "next";
import { Page } from "components/page";
import {
  ActivationCTA,
  ContentSection,
  PeopleTwoA,
  Splinter,
  Title,
} from "@malahngoding/instead";

const HomePage: NextPage = () => {
  return (
    <Page pageTitle="Hello world!">
      <div className="flex flex-col content-center items-center py-8">
        <Splinter>Hello World</Splinter>
        <Title center>Malah Ngoding</Title>
      </div>
      <div className="h-8" />
      <section>
        <div id="our-process" className="relative">
          <img
            src="https://raw.githubusercontent.com/highscoresl/tw-social-landing-template/master/public/images/circle2.svg"
            className="hidden sm:block absolute top-0 left-0 -mx-32"
          />
          <div className="container mx-auto px-6 pt-6 pb-12 relative">
            <h3 className="flex flex-col items-center text-4xl text-secondary font-bold mb-12">
              Hanya 3 langkah mudah
              <span className="bg-primary h-1 w-20 block mt-4"></span>
            </h3>
            <div className="flex flex-col md:flex-row xl:px-32">
              <div className="flex flex-col items-center md:px-6 lg:px-12">
                <span className="text-6xl text-primary">1</span>
                <h4 className="font-semibold text-2xl text-secondary mb-2">
                  Belajar
                </h4>
                <p className="text-center text-secondary-700 leading-relaxed">
                  Baca berbagai macam artikel mengenai pemrograman dan
                  sekitarnya pada laman web ini.
                </p>
              </div>
              <div className="flex flex-col items-center md:px-6 lg:px-12">
                <span className="text-6xl text-primary">2</span>
                <h4 className="font-semibold text-2xl text-secondary mb-2">
                  Bergabung
                </h4>
                <p className="text-center text-secondary-700 leading-relaxed">
                  Bergabung dengan komunitas malah ngoding untuk catat progress
                  mu dan mendapatkan bantuan dari komunitas.
                </p>
              </div>
              <div className="flex flex-col items-center md:px-6 lg:px-12">
                <span className="text-6xl text-primary">3</span>
                <h4 className="font-semibold text-2xl text-secondary mb-2">
                  Praktek
                </h4>
                <p className="text-center text-secondary-700 leading-relaxed">
                  Langsung pilih project yang paling menyenangkan untuk mu dan
                  pakai semua jurus yang sudah dipelajari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section>
        <div className="border-t border-b border-blue-200 py-16 bg-blue-100 my-16 px-4 fade-in fade-in-fourth">
          <div className="container mx-auto">
            <div className="mb-8">
              <div className="w-full lg:w-8/12 text-center mx-auto">
                <h2 className="text-2xl md:text-4xl leading-tight font-bold">
                  Headline that discribes how your product solves a problem your
                  customer has
                </h2>
                <p className="text-lg py-2 text-gray-700">
                  Start by defining the pain your customer has right now, for
                  example; clients not paying their invoices. Than write how
                  your solution solves this problem for your customers.
                </p>
              </div>
            </div>

            <div className="my-16 lg:flex">
              <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4 flex flex-col justify-between align-content-start px-4">
                <img
                  data-src="https://www.landingkit.com/templates/saasfolio/tailwind/"
                  className="lg:w-2/3 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 loaded"
                  alt="Music Drawing"
                  data-ll-status="loaded"
                  src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-music.png"
                />
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">
                    First main benefit of your product
                  </h3>
                  <p className="text-gray-600">
                    Brief explanation of why and how this benefit will help your
                    customers
                  </p>
                </div>
              </div>
              <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4  flex flex-col align-content-start justify-between px-4">
                <img
                  data-src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-task.png"
                  className="lg:w-2/3 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 loaded"
                  alt="Task Drawing"
                  data-ll-status="loaded"
                  src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-task.png"
                />
                <div>
                  <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">
                    Second main benefit of your product
                  </h3>
                  <p className="text-gray-600">
                    Brief explanation of why and how this benefit will help your
                    customers
                  </p>
                </div>
              </div>

              <div className="my-8 lg:my-0 w-full lg:w-2/6 text-center mt-4  flex flex-col align-content-start justify-between px-4">
                <img
                  data-src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-coffee.png"
                  className="lg:w-1/2 lazy self-start mx-auto py-2 md:py-4 w-1/2 md:w-1/3 loaded"
                  alt="Coffee Drawing"
                  data-ll-status="loaded"
                  src="https://www.landingkit.com/templates/saasfolio/tailwind/img/drawing-coffee.png"
                />
                <h3 className="font-semibold text-xl md:text-2xl lg:text-xl">
                  Third main benefit of your product
                </h3>
                <p className="text-gray-600">
                  Brief explanation of why and how this benefit will help your
                  customers
                </p>
              </div>
            </div>

            <div className=" mt-4">
              <div className="lg:w-1/2 mx-auto text-center mt-4">
                <blockquote className="italic text-lg text-black-800">
                  Semoga platform ini bisa bermanfaat bagi pengunjungnya.
                </blockquote>
                <div className="mt-3 flex justify-center content-center items-center">
                  <img
                    data-src="https://untungsoandryanto.now.sh/UUe46eY5_400x400.jpg"
                    className="w-8 lazy self-start loaded rounded-full h-8"
                    alt="Testimonial Avatar"
                    data-ll-status="loaded"
                    src="https://untungsoandryanto.now.sh/UUe46eY5_400x400.jpg"
                  />
                  <span className="ml-2 font-bold text-blue">
                    Untung So Andryanto, Founder of Malah Ngoding
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <ContentSection>
        <section>
          <div className="flex flex-col md:flex-row items-center content-center py-12 lg:pt-16 lg:pb-32">
            <div className="feature-1 md:w-1/2 text-center mb-4 lg:mb-0 relative">
              <PeopleTwoA />
            </div>
            <div className="w-full md:w-1/2 ">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold">
                Menghabiskan waktu luang untuk malah ngoding.
              </h2>
              <p className="text-md lg:text-lg pt-4 pb-8 text-black-700">
                Suka bingung menghabiskan waktu luang? Yuk malah ngoding agar
                lebih produktif.
              </p>
              <ul className="list-disc pl-6">
                <li className="text-black-800 py-1">
                  Bergabung bersama komunitas malah ngoding
                </li>
                <li className="text-black-800 py-1">
                  Bisa langsung memulai siapapun, dimanapun, dengan latar
                  belakang apapun
                </li>
                <li className="text-black-800 py-1">
                  Pembawaan yang santai dan mudah dipahami
                </li>
              </ul>
            </div>
          </div>
        </section>
      </ContentSection>
      <ActivationCTA />
    </Page>
  );
};

export default HomePage;
