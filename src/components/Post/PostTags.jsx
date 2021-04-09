import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import { getTagPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostTags = ({ tags, extraClass = "", iconColor = "#444"}) => {
  const tagLink = tag => (
    <AutoLink 
      className="text-uppercase" 
      to={getTagPath(tag)} 
      label={tag} 
    >
      {tag}
    </AutoLink>
  )
  return (
    <p></p>
  );
}

export default PostTags;