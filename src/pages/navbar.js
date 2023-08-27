import { Navbar, Link, Container } from "@nextui-org/react";
import { useState, useEffect } from "react";

export default function NavbarMain() {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
  });

  const collapseItems = ["Home", "About", "Contact", "Resume"];

  if (width > 1000) {
    return (
      <Container>
        <Navbar isBordered variant="floating">
          {/* NextUI only allows me to center items on nav adding components like .brand and .content*/}
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Content hideIn="xs" variant="highlight-rounded">
            <Navbar.Link href="#Home">Home</Navbar.Link>
            <Navbar.Link href="#About">Projects</Navbar.Link>
            <Navbar.Link href="#Contact">Contact</Navbar.Link>
            <Navbar.Link href="#">Resume</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content />
        </Navbar>
      </Container>
    );
  }

  return (
    <Container>
      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
        </Navbar.Brand>

        <Navbar.Collapse>
          {collapseItems.map((item) => (
            <Navbar.CollapseItem key={item}>
              <Link
                color="purple"
                css={{
                  minWidth: "100%",
                }}
                href={item}
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}
