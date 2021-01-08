import { NextPage } from "next";
import Link from "next/link";
import { Page } from "components/page";
import {
  Title,
  ActivationCTASimple,
  InLineBranding,
  Card,
  PeopleA,
  PeopleB,
  PeopleC,
} from "@malahngoding/instead";

const Study: NextPage = () => {
  return (
    <Page pageTitle="Study">
      <div className="flex flex-col content-center items-center py-8">
        <InLineBranding />
        <Title center>Study</Title>
      </div>
      <div className="container w-full md:max-w-6xl mx-auto pb-20">
        <div className="w-full px-4 md:px-6 text-md leading-normal">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Link href="/study/snippets">
              <a aria-label="Snippets Malah Ngoding">
                <Card color="bg-blue-100">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-center content-center my-4">
                      <PeopleA />
                    </div>
                    <div className="mx-4">
                      <h1 className="text-xl font-bold">Snippets</h1>
                      <p className="py-2 font-normal">
                        Potongan code dan script yang bisa membantu
                        menyelesaikan masalah. Simpel dan membantu.
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
            <Link href="/study/guide">
              <a aria-label="Guide Malah Ngoding">
                <Card color="bg-green-100">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-center content-center my-4">
                      <PeopleB />
                    </div>
                    <div className="mx-4">
                      <h1 className="text-xl font-bold">Guide</h1>
                      <p className="py-2 font-normal">
                        Blog yang akan membantu kamu menghabiskan waktu luang
                        untuk <InLineBranding />
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            </Link>
            <Link href="/study/projects">
              <a aria-label="Projects Example Malah Ngoding">
                <Card color="bg-red-100">
                  <div className="px-6 py-4">
                    <div className="flex flex-col items-center content-center my-4">
                      <PeopleC />
                    </div>
                    <div className="mx-4">
                      <h1 className="text-xl font-bold">Project</h1>
                      <p className="py-2 font-normal">
                        Daftar contoh project yang bisa kamu kerjakan untuk
                        melatih skill dan memberikan target.
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

export default Study;
