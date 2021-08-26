import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { Button, Box } from "rebass";
import { media } from "utils/styled/media";

import { useAuthState } from "utils/hooks/use-auth-state";
import { URLS } from "utils/landingpage/constants";
import { ThemeInterface } from "utils/styled/theme";
import router from "next/router";

function ProductHuntButton() {
  return (
    <ProductHuntBtnWrapper>
      <ProductHuntBtn
        onClick={() => {
          router.push(
            "https://www.producthunt.com/posts/grida-assistant-figma-2-flutter-react?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-grida-assistant-figma-2-flutter-react",
          );
        }}
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=310028&theme=light"
          alt="Grida Assistant - Figma 2 Flutter &React - Free & Opensource Design2Code Plugin with lot more features. | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </ProductHuntBtn>
    </ProductHuntBtnWrapper>
  );
}

export default function LandingMainCtaButton() {
  const loginstate = useAuthState();

  const handleCta = () => {
    switch (loginstate) {
      case "expired":
      case "unauthorized":
      case "loading": // loading also fallbacks as singup since there is no better way to handle this is ux perspective. - althoug, we will have enough time for the authstate from remote to bn loaded.
        window.location.href = URLS.landing.signup_with_return;
      case "signedin":
        window.location.href = "/docs/getting-started";
        break;
    }
  };

  return (
    <Box
      mt={["24px", "24px", "40px", "40px"]}
      mb={["134px", "84px", "100px", "145px"]}
    >
      <Row>
        <ProductHuntButton />
        <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <MainButton onClick={handleCta}>Start now</MainButton>
        </Motion>
      </Row>
    </Box>
  );
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  ${props => media(null, (props.theme as ThemeInterface).breakpoints[0])} {
    flex-direction: column-reverse;
  }
`;

const Motion = styled(motion.div)`
  ${props => media(null, (props.theme as ThemeInterface).breakpoints[0])} {
    margin: 0;
  }
  margin: auto;
`;

const ProductHuntBtnWrapper = styled.div`
  ${props => media(null, (props.theme as ThemeInterface).breakpoints[0])} {
    margin-top: 12px;
    margin-right: 0;
  }
  margin-right: 24px;
`;

const MainButton = styled(Button)`
  font-size: 17.5px;
  line-height: 22px;
  letter-spacing: 0.02em;
  margin: 0 -12px;

  ${props => media(null, (props.theme as ThemeInterface).breakpoints[0])} {
    width: 100%;
    margin: 0;
  }
`;

const ProductHuntBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;
