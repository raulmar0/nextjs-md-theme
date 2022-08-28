# Minimalist Next.js theme for Ghost CMS 

[Try the demo](https://raulmar0.github.io/nextjs-md-theme/)

##  Table of Contents
1. [Features](#Features)
2. [Getting started](#getting-started)
3. [Customization](#customization)
3. [Deploy to production](#deploy-to-production)


## Features

- 🔥 [Next.js](https://nextjs.org) for Static Site Generator
- ⬇️ [Markdown](https://www.markdownguide.org/getting-started/) for the content
- 🎨 Integrate with [Tailwind CSS](https://tailwindcss.com)
- 💅 [PostCSS](https://postcss.org) for processing [Tailwind CSS](https://tailwindcss.com)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- 📱 Responsive
- ⏺ Easy to configure
## Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting


## Getting started

Run the following command on your local environment:

```
git clone --depth=1 https://github.com/raulmar0/nextjs-ghost-template.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```
npm run dev
```

## Customization

You can easily configure Next js Boilerplate. Please change the following file:

- Posts in `_posts` directory
- Other pages such as "about" in `_misc` directory
- General styles in `./styles/globals.scss`
- Blogpost styles in `./styles/globals.scss` under the `.post-` classes
- Favicon `./public`
- Main config file `./utils/AppConfig.ts`
  - Site name, title and description
  - Projects
  - Social media links


## Deploy to production

In order to deploy your static site run:

```
$ npm run export
```

The generated HTML and CSS files are minified (built-in feature from Next js). It will also removed unused CSS from [Tailwind CSS](https://tailwindcss.com).

Now, your blog is ready to be deployed. All generated files are located at `_static` folder, which you can deploy with any hosting service.

Verified hosting services with a free tier
- Github pages
- Azure app services
- Digital Ocean Web Apps
