import config from "../../data/SiteConfig";
import moment from "moment";
import slug from "slug";

export const slugify = text => slug(text).toLowerCase();
export const isInteralLink = link => link && link[0] === "/";
export const formatDate = date => moment(date).format(config.dateFormat);
export const getTagPath = tag => `${config.pathPrefixTag}/${slugify(tag)}`;
export const getCategoryPath = category => `${config.pathPrefixCategory}/${slugify(category)}`;
export const getPostList = postEdges => postEdges.map(postEdge => ({
  path: postEdge.node.slug,
  tags: postEdge.node.tags,
  categories: postEdge.node.categories,
  //cover: postEdge.node.frontmatter.cover,
  title: postEdge.node.title,
  date: postEdge.node.date,
  slug: postEdge.node.slug,
  excerpt: postEdge.node.excerpt,
  timeToRead: 5
}));

export const getTagCategoryList = postList => {
  const tagSet = new Set();
  const categorySet = new Set();
  
  postList.forEach(({ categories, tags }) => {
    if (categories) {
      categories.forEach(category => {
        categorySet.add(category.name);
      });
    }

    if (tags.nodes) {
      tags.nodes.forEach(tag => {
        tagSet.add(tag.name);
      });
    }
  });

  return { 
    tagList: Array.from(tagSet),
    categoryList: Array.from(categorySet)
  }
}