import { NavLink } from "react-router-dom";
import { Button, Container, Menu } from "semantic-ui-react";

export default function NavBar () {
  return (
    <Menu inverted fixed='top' className="centered-menu">
      <Container>
        <Menu.Item as={NavLink} to='/' header >
          <img src="/assets/logo.png" alt="logo" />
          Reactivities
        </Menu.Item>
        <Menu.Item as={NavLink} to='/activities' name="Activities" />
        <Menu.Item>
          <Button as={NavLink} to='create-activity' positive content="Create Activity" />
        </Menu.Item>
      </Container>
    </Menu>
  )
}