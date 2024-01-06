import Header from "@/components/Dashboard/Header";
import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma";
import Link from "next/link";
import React from "react";

const page = async () => {
  const user = await authUserSession();
  const comments = await prisma.comment.findMany({
    where: { user_email: user.email },
  });
  return (
    <section className="mt-4 px-4 w-full">
        <Header title={"Comment"} />
        <div className="grid grid-cols-1 py-2 gap-4">
        {comments.map((comment: { id: React.Key | null | undefined; anime_title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; comment: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => {
            return (
                <Link href={`/anime/${comment.anime_mal_id}`} key={comment.id} className="bg-color-primary text-color-dark p-4">
                    <p className="text-sm">{comment.anime_title}</p>
                    <p className="italic">{comment.comment}</p>
                </Link>
        )
      })}
    </div>
    </section>
  );
};

export default page;
