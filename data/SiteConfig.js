const config = {

  // Site info
  siteTitle: "Takshilla Blogs", // Site title.
  siteTitleShort: "Takshilla Learning", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "Takshilla Blogs", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024x1024.png", // Logo used for SEO and manifest.
  siteUrl: "http://saksham.takshilalearning.com/", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "Takshilla Learning blogs", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteLang: "en",

  siteFBAppID: "399626517562189", // FB Application ID for using app insights
  googleAnalyticsID: "UA-96543695-7", // GA tracking ID.
  postDefaultCategoryID: "", // Default category for posts.

  // Common for tag, category pages and widget
  numberLatestPost: 8,
  postsPerPage: 10,

  // Use for post
  dateFromFormat: "YYYY-MM-DDTHH:mm:ssZ", // Date format used in the frontmatter.
  dateFormat: "MMMM Do, YYYY", // Date format for display.
  postTagged: "a",
  postInCategories: "a",
  postOnDate: "Posted on",

  // Use for comment
  lazyLoadComments: true,
  disqusShortname: "Takshilla", // Disqus shortname.
  btnLoadComments: "Load comments",

  // Use for home page
  numberLoadmore: 6,
  btnLoadmore: "Load more",
  homeHasLoadmore: true,
  homeHasThumbnail: true,
  homeHeader: "Home",

  // Use for page
  pathPrefixPagination: "/page", // Prefix path for pagination
  pageNotFoundTitle: "Page Not Found", // 
  pageNotFoundBtn: "Back to our site",
  pageNotFoundContent: "Looks like you've followed a broken link or entered a URL that doesn't exist on this site.",

  // Use for tag
  pathPrefixTag: "/tag", // Prefix path for tags
  tagHeader: "Posts tagged as", // use in header of tag-template page
  tagHasThumbnail: true,

  // Use for category
  pathPrefixCategory: "/category", // Prefix path for category
  categoryHeader: "Posts in category", // use in header of category-template page
  categoryHasThumbnail: true,
  categoryCount: 15, //Number of Categories in Home Page Side Bar
  tagCount: 15, //Number of tags in Home Page Side Bar

  // Use for widget
  categoryWidgetTitle: "Categories",
  tagWidgetTitle: "Tags",
  latestPostsWidgetTitle: "Latest posts",
  linksWidgetTitle: "Links",

  // Use for Google custom search
  searchWidgetTitle: "Looking for?",
  searchWidgetPlaceHolder: "Enter keyword",
  searchEngineID: "008548374781244864787:9ybvtnkbt7o",
  hasSearch: true,

  // Use for links widget
  sidebarSticky: true,
  sidebarLinks: [{
      label: "Student Login",
      url: "https://www.takshilalearning.com/#login"
    },
    {
      label: "Home Page",
      url: "https://www.takshilalearning.com"
    },
  ],

  // Use for user info
  userName: "Takshilla", // Username to display in the author segment.
  userEmail: "", // Email used for RSS feed"s author segment
  userTwitter: "CmpltJavaScript", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Hanoi, Vietnam", // User location to display in the author segment.
  userAvatar: "https://www.gravatar.com/avatar/42fd3d526fde1ef76d5002e4ebd303e9.jpg?s=300", // User avatar to display in the author segment.
  userDescription: "Software Engineer, Web Developer, JavaScript Lover & Blogger @completejavascript.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [{
      label: "Email",
      url: "mailto:completejavascript.super@gmail.com",
      iconClassName: "far envelope"
    },
    {
      label: "Website",
      url: "https://completejavascript.com/",
      iconClassName: "fas globe"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CmpltJavaScript",
      iconClassName: "fab twitter"
    },
    {
      label: "Facebook",
      url: "https://www.facebook.com/completejavascript/",
      iconClassName: "fab facebook-f"
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/completejavascript/",
      iconClassName: "fab linkedin-in"
    },
  ],
  // Use for navigation
  navTitle: "Takshilla",
  navLinks: [{
      label: "About",
      url: "/about"
    },
    {
      label: "Contact",
      url: "/contact"
    },
  ],
  // Use for footer
  socialLinks: [{
      label: "Facebook",
      url: "https://www.facebook.com/completejavascript/",
      iconClassName: "fab facebook-f"
    },
    {
      label: "Linkedin",
      url: "https://www.linkedin.com/in/completejavascript/",
      iconClassName: "fab linkedin-in"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/CmpltJavaScript",
      iconClassName: "fab twitter"
    },
    {
      label: "RSS",
      url: "https://gb-template.netlify.com/rss.xml",
      iconClassName: "fas rss"
    },
  ],
  footerLinks: [{
      label: "Home",
      url: "/"
    },
    {
      label: "About",
      url: "/about"
    },
    {
      label: "Contact",
      url: "/contact"
    },
    {
      label: "Terms of Use",
      url: "/terms"
    },
    {
      label: "Privacy Policy",
      url: "/privacy"
    },
    {
      label: "Sitemap",
      url: "https://gb-template.netlify.com/sitemap.xml"
    },
  ],
  copyright: "Copyright © 2019-2020 Lam Pham. Unless otherwise noted, all code MIT license.",
  // Use for manifest
  themeColor: "#2196F3", // Used for setting manifest and progress theme colors.
  backgroundColor: "#FFF" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/" || config.pathPrefix === "") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== "/")
  config.siteRss = `/${config.siteRss}`;

module.exports = config;