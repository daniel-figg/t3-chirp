"use client";

import Head from "next/head";
import { PageLayout } from "~/components/PageLayout";
import Image from "next/image";
import { api } from "~/trpc/react";
import { ProfileFeed } from "~/components/ProfileFeed";

interface PageProps {
  params: {
    username: string;
  };
}

const Page = ({ params }: PageProps) => {
  const { username } = params;
  const { data } = api.profile.getUserByUsername.useQuery({
    username: username.slice(3),
  });
  if (!data) return <div>404</div>;
  return (
    <>
      <Head>
        <title>{data.username ?? data.externalUsername}</title>
      </Head>
      <PageLayout>
        <div className="relative h-36 bg-slate-600">
          <Image
            src={data.imageUrl}
            alt={`${
              data.username ?? data.externalUsername ?? "unknown"
            }'s profile pic`}
            width={128}
            height={128}
            className="absolute bottom-0 left-0 -mb-[64px] ml-4 rounded-full border-4 border-black bg-black"
          />
        </div>
        <div className="h-[64px]"></div>
        <div className="p-4 text-2xl font-bold">{`@${
          data.username ?? data.externalUsername ?? "unknown"
        }`}</div>
        <div className="w-full border-b border-slate-400" />
        <ProfileFeed userId={data.id} />
      </PageLayout>
    </>
  );
};

export default Page;
