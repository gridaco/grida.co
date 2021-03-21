import Meta from "../components/meta";
import { Flex } from "rebass";
import styled from "@emotion/styled";
import { media } from "@web/styles/styled/media";
import { ThemeInterface } from "@web/styles/styled/theme";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <Flex alignItems="center" justifyContent="center">
        <DocsWrapper width={["100%", "730px", "985px", "1040px"]} my="80px">
          {children}
        </DocsWrapper>
      </Flex>
    </>
  );
}

const DocsWrapper = styled(Flex)`
  ${props => media("0px", (props.theme as ThemeInterface).breakpoints[0])} {
    display: flex;
    flex-direction: column;
    margin-top: 0px;
  }
`;
