import React from "react";

const Page = ({ postNode, slug }) => {
  const post = postNode;
  if (!post.id) {
    post.id = slug;
  }

  return (
    <div className="page-container">
      <div 
        className="padding-top padding-bottom" 
        dangerouslySetInnerHTML={{ __html: postNode.content }} 
      />
    </div>
  )
}

export default Page;