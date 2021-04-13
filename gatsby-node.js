const path = require("path");
const slug = require("slug");
const moment = require("moment");
const siteConfig = require("./data/SiteConfig");
const slugify = text => slug(text).toLowerCase();



exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const postPageTemplate = path.resolve("src/templates/post-template.jsx");
  const pagePageTemplate = path.resolve("src/templates/page-template.jsx");
  const tagPageTemplate = path.resolve("src/templates/tag-template.jsx");
  const categoryPageTemplate = path.resolve("src/templates/category-template.jsx");

  const markdownQueryResult = await graphql(
    `
      {
        allWpPost(sort: {fields: [date], order: DESC}) {
          edges {
            node {
              slug
              title
              tags {
                nodes {
                  name
                }
              }
              template {
                templateName
              }
              categories {
                nodes {
                  name
                }
              }
              date
            }
          }
        }
      }
    `
  );

  const pageQueryResult = await graphql(
    `
      {
        allWpPage(sort: {fields: [date], order: DESC}) {
          edges {
            node {
              slug
              title
              template {
                templateName
              }
              content
              featuredImage {
                node {
                  link
                }
              }
              date
            }
          }
        }
      }
    `
  );

  if (markdownQueryResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  if (pageQueryResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Filter data
  const tagSet = new Set();
  const categorySet = new Set();
  const postEdges = [];
  const pageEdges = [];
  
  markdownQueryResult.data.allWpPost.edges.forEach(edge => {
    if (edge.node.tags.nodes) {
      edge.node.tags.nodes.forEach(tag => {
        tagSet.add(tag.name);
      });
    }

    if (edge.node.categories.nodes) {
      edge.node.categories.nodes.forEach(category => {
        categorySet.add(category.name);
      });
    }

    postEdges.push(edge);
  });

  pageQueryResult.data.allWpPage.edges.forEach(edge => {
    pageEdges.push(edge);
  });
  
  // Create tagList, categoryList
  const tagList = Array.from(tagSet).slice(0, siteConfig.tagCount);
  const categoryList = Array.from(categorySet).slice(0, siteConfig.categoryCount);

  // Get latest posts
  const latestPostEdges = [];
  postEdges.forEach(edge => {
    if (latestPostEdges.length < siteConfig.numberLatestPost) {
      latestPostEdges.push(edge)
    }
  });

  // Create post page
  postEdges.forEach((edge, index) => {
    const nextID = index + 1 < postEdges.length ? index + 1 : 0;
    const prevID = index - 1 >= 0 ? index - 1 : postEdges.length - 1;
    const nextEdge = postEdges[nextID];
    const prevEdge = postEdges[prevID];

    createPage({
      path: edge.node.slug,
      component: postPageTemplate,
      context: {
        slug: edge.node.slug,
        nexttitle: nextEdge.node.title,
        nextslug: nextEdge.node.slug,
        prevtitle: prevEdge.node.title,
        prevslug: prevEdge.node.slug,
        tagList,
        categoryList,
        latestPostEdges
      }
    });
  });

  // create page page
  pageEdges.forEach(edge => {
    createPage({
      path: edge.node.slug,
      component: pagePageTemplate,
      context: {
        slug: edge.node.slug,
        tagList,
        categoryList,
        latestPostEdges
      }
    });
  });

  // common config for pagination
  const postsPerPage = siteConfig.postsPerPage;
  const pathPrefixPagination = siteConfig.pathPrefixPagination;
  
  // create tag page
  tagList.forEach(tag => {
    tagPosts = postEdges.filter(edge => {
      let tags = []
      edge.node.tags.nodes.forEach(tagD => {
        tags.push(tagD.name);
      });

      return tags && tags.includes(tag);
    });

    const numTagPages = Math.ceil(tagPosts.length / postsPerPage);
    const basePath = `${siteConfig.pathPrefixTag}/${slugify(tag)}`;

    for (let i = 0; i < numTagPages; i++) {
      createPage({
        path: i === 0 ? `${basePath}` : `${basePath}${pathPrefixPagination}/${i + 1}`,
        component: tagPageTemplate,
        context: {
          tag,
          tagList,
          categoryList,
          latestPostEdges,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          totalPages: numTagPages
        }
      });
    }
  });

  // create category page
  categoryList.forEach(category => {
    categoryPosts = postEdges.filter(edge => {
      let categories = [];
      edge.node.categories.nodes.forEach(categoryD => {
        categories.push(categoryD.name);
      });

      return categories && categories.includes(category);
    });

    const numCategoryPages = Math.ceil(categoryPosts.length / postsPerPage);
    const basePath = `${siteConfig.pathPrefixCategory}/${slugify(category)}`;

    for (let i = 0; i < numCategoryPages; i++) {
      createPage({
        path: i === 0 ? `${basePath}` : `${basePath}${pathPrefixPagination}/${i + 1}`,
        component: categoryPageTemplate,
        context: {
          category,
          tagList,
          categoryList,
          latestPostEdges,
          limit: postsPerPage,
          skip: i * postsPerPage,
          currentPage: i + 1,
          totalPages: numCategoryPages
        }
      });
    }
  });
};
