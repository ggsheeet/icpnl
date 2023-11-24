import Head from "next/head";
import "@/styles/globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";
import FacebookSDK from "@/components/FacebookSDK";

const breakpoints = {
  sm: "486px",
  md: "768px",
  lg: "1020",
  xl: "1440",
  xxl: "1550",
};

const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      50: "#062181",
      100: "#FC3E39",
      200: "#f5f5f5ff",
      300: "#1B94FC",
      400: "#DE423C",
      500: "#023E8A",
      600: "#197926",
      700: "#A40000",
      800: "#BFA600",
      900: "#634A1B",
      1000: "#433D88",
      1100: "#353535",
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
    <FacebookSDK />
      <ChakraProvider theme={theme}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ChakraProvider>
    </>
  );
}
