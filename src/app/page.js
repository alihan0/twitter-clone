import React from "react";
import Container from "./layout/Container";
import Sidebar from "./layout/Sidebar";
import Content from "./layout/Content";
import Widgets from "./layout/Widgets";

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  )
}
