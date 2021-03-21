import DocumentLayout from "layouts/document-layout";
import { AppProps } from "next/app";
import React from "react";
import { MDXProvider } from "@mdx-js/react";

export default function DocsApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider>
      <Component {...pageProps}></Component>
    </MDXProvider>
  );
}
