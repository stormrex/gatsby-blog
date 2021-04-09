import React from "react";
import AutoLink from "../AutoLink/AutoLink";
import { getCategoryPath } from "../../utils/helpers";
import config from "../../../data/SiteConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PostCategories = ({ categories, extraClass = "", iconColor = "#444"}) => {
  const categoryLink = category => (
    <AutoLink 
      className="text-uppercase" 
      to={getCategoryPath(category.name)} 
      label={category.name} 
    >
      {category.name}
    </AutoLink>
  )

  return (
    <p></p>
  );
}

export default PostCategories;