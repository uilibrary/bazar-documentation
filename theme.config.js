export default {
  // docsRepositoryBase: 'mailto:support@ui-lib.com',
  // docsRepositoryBase: 'https://support.ui-lib.com',

  logo: (
    <>
      <span className="hidden w-6 mr-2 font-extrabold md:inline">
        <img src="/logo.svg" width="100%" alt="Bazaar" />
      </span>

      <span className="hidden font-semibold text-primary md:inline">
        Bazaar Documentation
      </span>
    </>
  ),
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="en" />
      <meta
        name="description"
        content="Documentation of Bazaar React Ecommerce Template"
      />
      <meta
        name="og:description"
        content="Documentation of Bazaar React Ecommerce Template"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://bazar-react.vercel.app" />
      <meta
        name="twitter:site:domain"
        content="https://bazar-react.vercel.app"
      />
      <meta name="twitter:url" content="https://bazar-react.vercel.app" />
      <meta
        name="og:title"
        content="Documentation of Bazaar React Ecommerce Template"
      />
      <meta name="og:image" content="https://bazar-react.vercel.app" />

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <link rel="icon" type="image/svg+xml" href="/logo.svg" />
      <title>Bazaar React Ecommerce Template Documentation</title>
    </>
  ),
  footer: false,
  editLink: { component: null },
  footer: {
    text: <p className="m-auto">MIT {new Date().getFullYear()} © UILib</p>,
  },
  sidebar: { defaultMenuCollapseLevel: 1 },
  feedback: { useLink: () => 'mailto:support@ui-lib.com' },
}
