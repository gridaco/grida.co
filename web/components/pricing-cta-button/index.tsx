import React from "react";

import Button from "components/mdx/button";
import { LandingpageUrls } from "utils/landingpage/constants";

function PricingCTAButton(props) {
  const { ...style } = props;

  const movetoDocs = () => {
    window.location.href = LandingpageUrls.signup_with_custom_return(
      "https://grida.co/docs/getting-started/intro",
    );
  };

  return (
    <Button className="cursor" onClick={movetoDocs} {...style}>
      Start now
    </Button>
  );
}

export default PricingCTAButton;
