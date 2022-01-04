import styled from "@emotion/styled";
import Link from "next/link";
import React, { useCallback } from "react";
import { Button, Flex, Text } from "rebass";

import BlankArea from "components/blank-area";
import Icon from "components/icon";
import LandingpageText from "components/landingpage/text";
import { usePopupContext } from "utils/context/PopupContext";
import { LandingpageUrls } from "utils/landingpage/constants";
import { media } from "utils/styled/media";
import { ThemeInterface } from "utils/styled/theme";

function PricingCard(props: {
  type: "paid" | "none-paid";
  title: string;
  price: string;
  per?: string;
  planList: string[];
  button: React.ReactChild;
}) {
  const { addPopup, removePopup } = usePopupContext();

  const handleClickQuestionMark = useCallback(() => {
    addPopup({
      title: "",
      element: (
        <Flex
          width="calc(100vw - 40px)"
          alignItems="center"
          flexDirection="column"
          p="48px"
        >
          <Icon
            className="cursor"
            name="headerClose"
            ml="auto"
            onClick={() => removePopup()}
          />
          <Flex width="80%" flexDirection="column" alignItems="center">
            <LandingpageText variant="h4" textAlign="center">
              What are the limitations of free plan?
            </LandingpageText>
            <BlankArea height={[48, 48]} />
            <LandingpageText variant="body1" textAlign="center">
              To build an enterprise level application, you’ll need a paid plan.
              Paid plan includes extra default storage and unlimited projects
              count. Also cloud objects such as translation token can be stored
              up to 1 million. The extra usage will be charged as Standard Cloud
              Fee.
            </LandingpageText>
          </Flex>
        </Flex>
      ),
    });
  }, []);

  return (
    <Wrapper type={props.type}>
      <Heading>
        <LandingpageText variant="h4">{props.title}</LandingpageText>
        {props.type === "none-paid" && (
          <Icon
            className="cursor"
            name="questionMark"
            onClick={handleClickQuestionMark}
          />
        )}
      </Heading>
      <PlanPricing>
        <LandingpageText variant="h4">{props.price}</LandingpageText>
        {props.per && <Seat variant="body1">{props.per}</Seat>}
      </PlanPricing>
      <Flex alignItems="center" height="100%" my="30px">
        <PlanDescription>
          {props.planList.map(i => (
            <div className="planlist" key={i}>
              <div className="icon">
                <Icon name="check" />
              </div>
              <span className="desc">{i}</span>
            </div>
          ))}
        </PlanDescription>
      </Flex>
      {props.button}
    </Wrapper>
  );
}

export default PricingCard;

const Wrapper = styled(Flex)`
  border-radius: 8px;
  margin: 27px;
  padding: 40px;
  flex-direction: column;

  ${p => {
    if (p.type === "paid") {
      return {
        width: "100%",
        height: "100%",
        boxShadow: "0px 4px 128px 32px rgba(0, 0, 0, 0.08)",
        backgroundColor: "#fff",
      };
    } else if (p.type === "none-paid") {
      return {
        width: "90%",
        height: "90%",
        backgroundColor: "#FCFCFC",
        border: "1px solid #F7F7F7",
      };
    }
  }}

  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    width: 100%;
  }
`;

const PlanPricing = styled(Flex)`
  margin-top: 36px;
  align-items: center;
`;

const Seat = styled(LandingpageText)`
  margin-left: 10px;
`;

const PlanDescription = styled(Flex)`
  flex-direction: column;

  .planlist {
    margin: 8px 0px;
    display: flex;
    align-items: center;

    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }

    .desc {
      flex: 1;
      font-size: 18px;
      color: #535353;
    }

    ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
      flex: none;
      margin-top: 16px;
    }
  }
`;

const Heading = styled(Flex)`
  align-items: center;
  justify-content: space-between;
`;
