import { Navbar, NavItem } from 'shadcn-ui'; // Adjust the import based on your actual Shadcn component library

const Nav = () => {
  return (
    <Navbar>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/polls">Polls</NavItem>
      <NavItem href="/login">Login</NavItem>
      <NavItem href="/register">Register</NavItem>
    </Navbar>
  );
};

export default Nav;