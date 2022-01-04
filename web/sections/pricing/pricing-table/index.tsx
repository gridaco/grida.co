import styled from "@emotion/styled";
import { PopupButton } from "@typeform/embed-react";
import SectionLayout from "layout/section";
import React from "react";
import { Flex, Heading, Text, Button } from "rebass";

import BlankArea from "components/blank-area";
import LandingpageText from "components/landingpage/text";
import PricingCard from "components/pricing-card";
import PricingCTAButton from "components/pricing-cta-button";
import { media } from "utils/styled/media";
import { ThemeInterface } from "utils/styled/theme";

const PersonalPlanList = [
  "Up to 2 Figma files",
  "Unlimited Code generation",
  "Unlimited ReactJS CodeGen",
  "Unlimited Flutter CodeGen",
  "0.5GB Asset Storage",
  "Code export",
  "Unlimited public projects",
];

const EnterprisePlanList = [
  "Unlimited figma files",
  "Unlimited Long-lived hosting",
  "Custom assets hosting / pipeline integration",
  "Custom build for your existing design system",
  "Custom build for your existing code base",
  "Figma Webhook integration",
  "Figma Shared Library support",
  "Github CI integration",
  "Custom Domain",
];

export default function PlanList() {
  return (
    <SectionLayout alignContent="center">
      <Title mb="43px">Customize for your company</Title>
      <Desc mb={["69px", "185px", "145px", "159px"]}>
        Enterprise Plan offers dedicated custom build
        <br />
        to best fit your existing product development process and architecture.
      </Desc>
      <Wrapper
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent={["space-between", "center", "center", "center"]}
        flexDirection={["column", "row", "row", "row"]}
      >
        <PricingCard
          type="none-paid"
          title="For you"
          price={"$0"}
          planList={PersonalPlanList}
          button={
            <PricingCTAButton
              mt="auto"
              style={{ borderRadius: 4, marginTop: "auto" }}
            >
              Start now
            </PricingCTAButton>
          }
        />
        <PricingCard
          type="paid"
          title="For you team"
          planList={EnterprisePlanList}
          price={"$90"}
          per="per seat/mo"
          button={
            <PopupButton
              id="i0HCo9XZ"
              style={{
                background: "black",
                color: "white",
                border: "none",
                fontWeight: 500,
                cursor: "pointer",
                marginTop: "auto",
                borderRadius: "4px",
                padding: 12,
                fontSize: 16,
              }}
              size={80}
            >
              Contact Sales
            </PopupButton>
          }
        />
      </Wrapper>
      <BlankArea height={[182, 264]} />
    </SectionLayout>
  );
}

const PopupDescription = styled(LandingpageText)`
  margin-top: 45px;
  text-align: center;
`;

const FreePlanPopup = styled(Flex)`
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 8px;
`;

const Title = styled(Heading)`
  font-weight: bold;
  font-size: 56px;
  line-height: 86.5%;

  text-align: center;
  letter-spacing: -0.025em;

  color: #000000;
`;

const Desc = styled(Text)`
  font-weight: normal;
  font-size: 24px;
  line-height: 141%;
  text-align: center;

  color: #686868;
`;

const Wrapper = styled(Flex)`
  max-height: 800px;
  height: 200vh;

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    max-height: 1300px;
  }
`;
