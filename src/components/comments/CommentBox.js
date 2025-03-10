import React from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

function CommentBox({ data }) {
  return data.map((item, index) => {
    return (
      <div key={index} className=" p-2">
        <div className="flex border-l-2 border-black">
          <div>
            <img
              height={30}
              width={30}
              src="https://i.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfZWI5NTlhNzE1ZGZmZmU2ZjgyZjQ2MDU1MzM5ODJjNDg1OWNiMTRmZV85NTIyOTEy_rare_0c77d256-e3cf-4cb8-a2a9-d6c935378c55.png"
              alt="username"
              className="rounded-full"
            />
          </div>
          <div>
            <p className="font-bold pl-2">{item.username}</p>
            <p>{item.comment}</p>
          </div>
        </div>
        <div>{item.replies && <CommentBox data={item.replies} />}</div>
      </div>
    );
  });
}

export default CommentBox;
