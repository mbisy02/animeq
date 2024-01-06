import prisma from "@/libs/prisma";
import React from "react";

const CommentBox = async ({ anime_mal_id }) => {
  const Comments = await prisma.comment.findMany({ where: { anime_mal_id } });

  return (
    <div className="grid grid-cols-4 gap-4 mb-4">
      {Comments.map(
        (comment: {
          id: React.Key | null | undefined;
          username:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | React.PromiseLikeOfReactNode
            | null
            | undefined;
          comment:
            | string
            | number
            | boolean
            | React.ReactElement<any, string | React.JSXElementConstructor<any>>
            | Iterable<React.ReactNode>
            | React.ReactPortal
            | React.PromiseLikeOfReactNode
            | null
            | undefined;
        }) => {
          return (
            <div key={comment.id} className="text-color-dark bg-color-primary p-4">
              <p>{comment.username}</p>
              <p>{comment.comment}</p>
            </div>
          );
        }
      )}
    </div>
  );
};

export default CommentBox;
