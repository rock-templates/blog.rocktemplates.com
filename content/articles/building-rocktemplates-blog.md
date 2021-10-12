---
title: Building Rock Templates Blog
description: We're a team of developers who like to try new things, get excited and learn. Same goes to life itself right? There's scenarios when you just need to stick with old stuff, legacy even. However, when we were thinking about things we need for rocktemplates.com concept we decided to start with the blog.
img: https://images.unsplash.com/photo-1554222725-5cd0bf9c6da9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80
alt: Building Rock Templates Blog
author:
  name: Erno Vuori
  bio: Creator of a Rock Templates
  image: https://images.unsplash.com/.....
---

We're a team of developers who like to try new things, get excited and learn.
Same goes to life itself right? There's scenarios when you just need to stick with old stuff, legacy even. However, when we were thinking about things we need for rocktemplates.com concept we decided to start with the blog site.

## Platform 

Well, there are tons of off-the-self platforms around for bloggin but we wanted
to learn something while building a blog site. Because we really wanted custom control of site, we chose to build site from scratch with Nuxt.js along with TailwindCSS for styling. For content itself, it's plain Markdown.

Nuxt.js is something we have always looked at but never really got suitable project to get our hands dirty with it. Since we wanted content to be written in markdown we looked at nuxtjs/content module only to find out it was just what we needed, and much more; We found out that we can actually embed Vue components into Markdown for awesome things to happen.

```md
# Markdown with Vue

Embed Vue components right in your markdown:

<VueComponent message="EHLO from Vue" />
```

How cool is that?

## Setup configuration

We're running pretty basic Nuxt.js setup here. If you want to follow steps we've done please follow [this article](https://nuxtjs.org/tutorials/creating-blog-with-nuxt-content) for setup and basic prpject structure. You can also clone our [GitHub repository](https://github.com/evuori/blog-rocktemplates-com) for complete setup if you want to see how things wrap up.

## Additional Tweaks

Blogs are all about the Meta, so we tweaked code a bit to get those Twitter cards flowing. We use small class to provide all the releavant metadata and 
Nuxt.js Head() property to inject metadata to page's head tag. If you want to 
try it by yourself, follow [this artile](https://redfern.dev/articles/adding-social-media-seo-meta-data-using-nuxt-content/) how to do it.

We are fancy of TailwindCSS so it's obivious that we wanted to style our site with it. To be honest, we just copied blog.taildcss.com styling just because those guys know what they are doing and have really good approach and an eye on everything. Check out their [GitHub repository](https://github.com/tailwindlabs/blog.tailwindcss.com) how they put everything together with Next.js

## Deployment

Ok, we're like simple things and are lazy as hell. AWS Amplify has some really good things ongoing and we are on AWS anyway so we're hosting everything in AWS.
If you're keen to pusblish your own site easy and fast just connect your repository with AWS Amplify and hit deploy. It's easy as that. 

## Conclusion

Nuxt.js has some really good features and quality in their works. We're strongly recommend to check it out for your next big app project. Also we can't promote TailwindCSS enough. It's just awesome. Of course we are not done with site yet, and there are bits and pieces here and there we would like to implement and we have some really cool stuff coming by the end of year.

That's enough folks, be careful out there.