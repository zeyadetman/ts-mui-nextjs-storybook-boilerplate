import * as React from "react";
import { NextPage } from "next";
import { Button, Container } from "@mui/material";

const IndexPage: NextPage = () => {
  return (
    <Container maxWidth="lg">
      <Button variant="contained" color="primary">
        Subscribe for updates
      </Button>
    </Container>
  );
};

export default IndexPage;
