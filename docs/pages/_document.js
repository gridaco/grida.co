import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// TODO: TODAY
export default function Post({ post, preview }) {
  const router = useRouter();
  if (!router.isFallback && !post.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <DocsNavigation />
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article style={{ width: "calc(100% - 40px)", margin: "0px 20px" }}>
            <Head>
              <title>{post.title}</title>
              {post.ogImage && (
                <meta property="og:image" content={post.ogImage.url} />
              )}
            </Head>
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </Layout>
  );
}
