import React from "react";
import CommentBox from "./CommentBox";
const data = [
  {
    username: "John",
    comment: "Comment dsfsdf sdsadsa dasd adsasdsa",
    replies: [
      {
        username: "Sam",
        comment: "Comment dsfsdf sdsadsa dasd adsasdsa",
        replies: [
          {
            username: "Sam",
            comment: "Comment dsfsdf sdsadsa dasd adsasdsa",
            replies: [
              {
                username: "Sam",
                comment: "Comment dsfsdf sdsadsa dasd adsasdsa",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    username: "Pooja",
    comment: "Comment dsfsdf sdsadsa dasd adsasdsa",
    replies: [
      {
        username: "Sam",
        comment: "Comment dsfsdf sdsadsa dasd adsasdsa",
        replies: [
          {
            username: "Sam",
            comment: "Comment dsfsdf sdsadsa dasd adsasdsa",
          },
        ],
      },
    ],
  },
];
function Comments() {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
}

export default Comments;
