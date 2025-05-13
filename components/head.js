import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "Aurora: SF's Summer Coding Camp";
  const description =
    "A beginner-friendly, gender-focused hackathon with 3 days of workshops, mentors, and hands-on coding & engineering projects. July 18-20, 2025. San Francisco, CA.";
  const keywords =
    "aurora, hack club aurora, aurora hack club, hackathon, coding camp, summer camp, san francisco coding camp, hack club san francisco, gender-focused hackathon, beginner coding, learn to code, coding workshops, engineering projects";
  const author = "Hack Club";
  const twitter = "@hackclub";
  const url = "http://aurora.hackclub.com";
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      {url ? <meta property="og:url" content={url} /> : ""}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      {children}
    </Head>
  );
}
