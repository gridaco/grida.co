import React from "react";
import { Box, Flex, Heading, Text } from "rebass";
export default function GeneralTextLayout(props: { children: JSX.Element[] }) {
  let heading: JSX.Element;
  let content: JSX.Element;
  props.children.forEach(c => {
    if (c.type === HeadingContainer) {
      heading = c;
    }
    if (c.type === ContentContainer) {
      content = c;
    }
  });

  if (heading === undefined || content === undefined) {
    throw "in order to use text layout, you must provide both heading and content wrapped with `HeadingContainer` or `ContentContainer`";
  }

  return (
    <Flex className="text-platform" flexDirection="column">
      {heading}
      {content}
    </Flex>
  );
}

export function HeadingContainer(props: { children: JSX.Element }) {
  return props.children;
}

export function ContentContainer(props: { children: JSX.Element }) {
  return props.children;
}
