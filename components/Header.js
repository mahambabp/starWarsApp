import Link from "next/link";
import React from "react";
import { Container, Image, Menu, Icon } from "semantic-ui-react";


//NavBar
const MenuFix = () => (
  <div>
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item>
          <Link href="/">
            <a>
              {" "}
              <Icon name="home" />
              Home
            </a>
          </Link>
        </Menu.Item>

        <Menu.Item>
          <Link prefetch href="/list">
            <a>
              {" "}
              <Icon name="user" />
              Species
            </a>
          </Link>
        </Menu.Item>
      </Container>
    </Menu>
  </div>
);

export default MenuFix;
