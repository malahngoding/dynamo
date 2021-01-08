import { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { Page } from "components/page";
import {
  Title,
  InLineBranding,
  Card,
  PeopleA,
  ActivationCTASimple,
} from "@malahngoding/instead";

const Camps: NextPage = () => {
  return (
    <Page pageTitle="Camps">
      <div className="flex flex-col content-center items-center py-8">
        <InLineBranding />
        <Title center>Camps</Title>
      </div>
      <div className="container w-full md:max-w-6xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <p className="py-6 text-center">
            Mulai <InLineBranding /> hanya dengan modal semangat yang membara 🔥
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Link href="/camps/fullstack">
              <a aria-label="Javascript Malah Ngoding">
                <Card color="bg-yellow-100">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-center content-center my-4">
                      <Image
                        src="/assets/img/javascript.png"
                        width={240}
                        height={240}
                      />
                    </div>
                    <div className="mx-4">
                      <h1 className="text-xl font-bold">
                        Fullstack Javascript
                      </h1>
                      <p className="py-2 font-normal">
                        Membuat aplikasi berbasis web dengan javascript. NodeJS
                        sebagai Back End dan React sebagai Front End.
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
            <Link href="/camps/flutter">
              <a aria-label="Flutter Malah Ngoding">
                <Card color="bg-green-100">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-center content-center my-4">
                      <Image
                        src="/assets/img/flutter.png"
                        width="320"
                        height="91"
                      />
                    </div>
                    <div className="mx-4">
                      <h1 className="text-xl font-bold">Hybrid Applications</h1>
                      <p className="py-2 font-normal">
                        Membuat aplikasi untuk iOS dan Android dalam hanya
                        dengan sekali koding saja.
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
          </div>
        </div>
      </div>
      <ActivationCTASimple />
    </Page>
  );
};

export default Camps;
