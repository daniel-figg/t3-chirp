import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { CreatePost } from "~/app/_components/create-post";
import { api } from "~/trpc/server";

export default async function Home() {
  const data = await api.post.getAll.query();
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div>
        {data.map((post) => (
          <div key={post.id}>{post.content}</div>
        ))}
      </div>

      <UserButton afterSignOutUrl="/" />
    </main>
  );
}
