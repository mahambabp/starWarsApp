import React from "react";
import { Container, List, Segment, Icon } from "semantic-ui-react";

//footer
const Footer = () => (
  <div>
    <Segment
      inverted
      vertical
      style={{ margin: "2em 0em 0em", padding: "5em 0em" }}
    >
      <Container textAlign="center">
        <List horizontal inverted divided link size="small">
          <List.Item
            as="a"
            href="https://github.com/mahambabp/starWarsApi"
            target="_blank"
          >
            <Icon name="github" /> GitHub
          </List.Item>
          <List.Item
            as="a"
            href="https://react.semantic-ui.com/"
            target="_blank"
          >
            Semantic UI
          </List.Item>
         
        </List>
      </Container>
    </Segment>
  </div>
);

export default Footer;
