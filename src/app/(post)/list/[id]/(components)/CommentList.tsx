"use client";
import { useCommentData } from "@/hooks/useQueries";
import React from "react";
import CommentItem from "./CommentItem";

type Props = {
  id: string;
};

export interface CommentTypes {
  comment_content: string;
  comment_date: string;
  comment_id: string;
  mem_no: string;
  post_id: string;
}

const CommentList = ({ id }: Props) => {
  const { data: comments, isLoading: isCommentsLoading, isError } = useCommentData(id);

  if (isCommentsLoading) return <>로딩중...</>;
  if (isError) return <>댓글을 불러오는 중 오류가 발생했습니다.</>;

  return (
    <ul className="mt-10">
      {comments && comments.length > 0 ? (
        comments.map((comment) => <CommentItem key={comment.comment_id} comment={comment} />)
      ) : (
        <li>댓글이 없습니다.</li>
      )}
    </ul>
  );
};

export default CommentList;
