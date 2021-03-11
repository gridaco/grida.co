import React, { useEffect, useRef, useState } from "react";
import SectionLayout from "layout/section";
import { Box, Flex, Heading, Text } from "rebass";
import styled from "@emotion/styled";
import { media } from "utils/styled/media";
import { ThemeInterface } from "utils/styled/theme";
import DesignPlatforms from "layout/design-platforms";
import CodePreview from "layout/code-preview";
import BlankArea from "components/blank-area";
import { css } from "@emotion/core";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import useOnScreen from "utils/hooks/use-on-screen";
import { useInView } from "react-intersection-observer";
import ShowWhenVisible from "components/motion-container/show-when-visible";

const DesignToCode = () => {
  return (
    <SectionLayout alignContent="start" backgroundColor="rgba(0,0,0,0)">
      <Heading
        fontSize={["32px", "64px", "64px", "80px"]}
        style={{ letterSpacing: "0em", lineHeight: "98.1%" }}
      >
        Designs, <br />
        come to live
      </Heading>
      <Description fontSize={["18px", "24px", "24px", "24px"]}>
        Keep your design live. Not as a prototype, but as a ready product.
        Instantly convert your design to code, prototype and product within a
        click. No coding required.
      </Description>
      <SectionLayout
        className="design-to-code-absoulte-view"
        variant="full-width"
        inherit={false}
        notAutoAllocateHeight
      >
        <Positioner>
          <DesignPlatforms />
          <CodeViewScrollMotionWrapperView />
        </Positioner>
      </SectionLayout>
      <BlankArea height={100} />
    </SectionLayout>
  );
};

function CodeViewScrollMotionWrapperView() {
  const controls = useAnimation();
  const [ref, inView] = useInView();
  // useViewportScroll()

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 2.5 }}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
    >
      <CodePreview />
    </motion.div>
  );
}

export default DesignToCode;

const Description = styled(Text)`
  max-width: 520px;
  margin-top: 20px;
  color: #444545;
  font-weight: 500;

  line-height: 33px;
  letter-spacing: 0em;

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    max-width: 100%;
    line-height: 22px;
  }
`;

const Positioner = styled(Box)`
  position: relative;
  height: 600px;
  width: 100%;
  display: flex;

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    height: 1200px;
  }
`;
