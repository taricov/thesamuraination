// @ts-check

/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'The Samurai Nation',
  author: 'Taric Ov',
  headerTitle: 'The Samurai Nation - A Podcast and Blog focuses on AI and the latest trends on Technology.',
  description: 'The Samurai Nation is a podcast and blog about tech, AI, and the future of technology. Hosted by Taric Ov - A Software Engineer and tech enthusiast, the show explores the latest tech trends, ethical implications of AI, and more.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://thesamuraination.com/',
  siteRepo: 'https://github.com/taricov/Nexjs_MDX_TSN-podcast-blog',
  siteLogo: '/public/static/images/logo.png',
  image: '/static/images/me.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'taricov@gmail.com',
  github: 'https://github.com/taricov',
  twitter: 'https://twitter.com/Twitter/taric_ov',
  facebook: 'https://facebook.com',
  youtube: 'https://www.youtube.com/@TheSamuraiNation1/',
  linkedin: 'https://www.linkedin.com/in/taricov',
  appleLink: 'https://podcasts.apple.com/us/podcast/the-samurai-nation/id1685551079',
  googleLink: 'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9kZWFiYTc4Yy9wb2RjYXN0L3Jzcw?sa=X&ved=0CAMQ4aUDahcKEwjo6cjbuuT-AhUAAAAAHQAAAAAQNQ',
  spotifyLink: 'https://open.spotify.com/show/0m9QC7CukeigGFxknC00v3?si=a41001233e854851',
  amazonLink: 'https://podcasters.amazon.com/podcasts/b9588268-f81e-4ecf-89fb-72a296388712',
  additctLink: 'https://podcastaddict.com/thesamuraination',
  soundcloudLink: 'https://soundcloud.com/samurai-nation-664714853/sets',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    posthogProjectApiKey: '', // e.g. AhnJK8392ndPOav87as450xd
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  // search: {
  //   provider: 'kbar', // kbar or algolia
  //   kbarConfig: {
  //     searchDocumentsPath: 'search.json', // path to load documents to search
  //   },
  //   provider: 'algolia',
  //   algoliaConfig: {
  //     // The application ID provided by Algolia
  //     appId: 'R2IYF7ETH7',
  //     // Public API key: it is safe to commit it
  //     apiKey: '599cec31baffa4868cae4e79f180729b',
  //     indexName: 'docsearch',
  //   },
  // },
}

module.exports = siteMetadata
