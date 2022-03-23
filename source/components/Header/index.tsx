import * as React from "react";
import { useRoute } from "@react-navigation/native";
import Menu from "~/components/Menu";
import { Container, Title } from "./styles";

type PropsTypes = {
  children: React.ReactNode
}

function Header({children}: PropsTypes) {
  const route = useRoute();
  return (
    <Container>
      <Menu />
      <Title size={route.name == "Home" ? 12 : 24}>{children}</Title>
    </Container>
  );
}

export default Header;
