import styled from "@emotion/styled";
import { motion } from "framer-motion";
import React from "react";
import { Button, Box } from "rebass";
import { media } from "utils/styled/media";

import { useAuthState } from "utils/hooks/use-auth-state";
import { URLS } from "utils/landingpage/constants";
import { ThemeInterface } from "utils/styled/theme";

function ProductHuntButton() {
  return (
    <ProductHuntBtnWrapper>
      <a
        href="https://www.producthunt.com/posts/surf-6?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-surf-6"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=284549&theme=light"
          alt="Surf - Open repositories in a VSCode environment in your browser | Product Hunt"
          style={{ width: "250px", height: "54px" }}
          width="250"
          height="54"
        />
      </a>
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
      <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <ProductHuntButton />
        <MainButton onClick={handleCta}>Start now</MainButton>
      </Motion>
    </Box>
  );
}

const Motion = styled(motion.div)`
  display: flex;
  flex-direction: row;

  ${props => media(null, (props.theme as ThemeInterface).breakpoints[0])} {
    flex-direction: column;
  }
`;

const ProductHuntBtnWrapper = styled.div`
  ${props => media(null, (props.theme as ThemeInterface).breakpoints[0])} {
    margin-bottom: 12px;
    margin-right: 0;
  }
  margin-right: 24px;
`;

const MainButton = styled(Button)`
  font-size: 17.5px;
  line-height: 22px;
  letter-spacing: 0.02em;
`;
