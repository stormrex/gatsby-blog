[![Netlify Status](https://api.netlify.com/api/v1/badges/89b8cdfb-af7f-48d5-863f-64fbbdfe8986/deploy-status)](https://app.netlify.com/sites/gb-template/deploys) [![Maintainability](https://api.codeclimate.com/v1/badges/b23277cf6232a88f59ec/maintainability)](https://codeclimate.com/github/completejavascript/gatsby-blog-template/maintainability)

# Takshilla-Blog-Template

Code base build to render Takshilla blog posts

## Installation

Install this template (assuming [Gatsby](https://github.com/gatsbyjs/gatsby/) is installed and updated) by running from your CLI:

```bash
gatsby new TakshillaBlog https://git.takshilalearning.com/sumitra.saksham/gatsby-blog
npm run develop # or gatsby develop
```

Or you can fork the project, make your changes there and merge new features when needed.

Alternatively:

```bash
git clone https://git.takshilalearning.com/sumitra.saksham/gatsby-blog TakshillaBlog # Clone the project
cd TakshillaBlog
rm -rf .git # So you can have your own changes stored in VCS.
npm install # or yarn install
npm run develop # or gatsby develop 
```

Navigate to localhost:8000.

## Features

  * Posts and Pages in Markdown
  * Tags and Categories with pagination
  * Homepage as list of articles, support "Load more" function
  * Style using [Shiba.CSS](https://github.com/completejavascript/shiba-css)

## Configuration

Edit the export object parameter in `data/SiteConfig` for local development:

```js
  siteUrl: "https://gb-template.netlify.com",// Domain of your website without pathPrefix.
  googleAnalyticsID: "UA-96543695-7",// GA tracking ID.
```
