export default {
  github: 'https://github.com/uilibrary/uko-react-documentation',
  docsRepositoryBase:
    'https://github.com/uilibrary/uko-react-documentation.git',
  titleSuffix: ' – Bazar React Ecommerce Template',
  logo: (
    <>
      <span
        className="mr-2 font-extrabold hidden md:inline"
        style={{ width: 25 }}
      >
        <img src="/favicon.ico" width="100%" alt="Bazar" />
      </span>
      <span className="text-primary font-normal hidden md:inline">
        Bazar Documentation
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
        content="Documentation of Bazar React Ecommerce Template"
      />
      <meta
        name="og:description"
        content="Documentation of Bazar React Ecommerce Template"
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
        content="Documentation of Bazar React Ecommerce Template"
      />
      <meta name="og:image" content="https://bazar-react.vercel.app" />

      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
      <meta name="msapplication-TileImage" content="/favicon.ico" />
      <title>Bazar React Ecommerce Template Documentation</title>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: false,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <p>MIT {new Date().getFullYear()} © UILib</p>,
}
