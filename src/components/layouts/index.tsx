import { ThemeProvider } from "@mui/material";
import { theme } from "theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "",
  cache: new InMemoryCache(),
});

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </ThemeProvider>
  );
};
