"use client";

import { useEffect } from "react";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
//import { RainbowKitProvider, darkTheme, lightTheme } from "@rainbow-me/rainbowkit";
import { Toaster } from "react-hot-toast";
//import { wagmiConfig } from "~~/services/web3/wagmiConfig";
//import { appChains } from "~~/services/web3/wagmiConnectors";
import { WagmiConfig, createConfig } from "wagmi";
import { arbitrum, mainnet, optimism, polygon, sepolia } from "wagmi/chains";
//import { WagmiConfig } from "wagmi";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";
//import { BlockieAvatar } from "~~/components/scaffold-eth";
import { ProgressBar } from "~~/components/scaffold-eth/ProgressBar";
import { useNativeCurrencyPrice } from "~~/hooks/scaffold-eth";
//import { useDarkMode } from "~~/hooks/scaffold-eth/useDarkMode";
import { useGlobalState } from "~~/services/store/store";

const config = createConfig(
  getDefaultConfig({
    appName: "ConnectKit Next.js demo",
    //infuraId: process.env.NEXT_PUBLIC_INFURA_ID,
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_ID,
    chains: [mainnet, polygon, optimism, arbitrum, sepolia],
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
  }),
);

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  const price = useNativeCurrencyPrice();
  const setNativeCurrencyPrice = useGlobalState(state => state.setNativeCurrencyPrice);

  useEffect(() => {
    if (price > 0) {
      setNativeCurrencyPrice(price);
    }
  }, [setNativeCurrencyPrice, price]);

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};

export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  //const { isDarkMode } = useDarkMode();

  return (
    <WagmiConfig config={config}>
      <ProgressBar />
      <ConnectKitProvider theme="midnight">
        <ScaffoldEthApp>{children}</ScaffoldEthApp>
      </ConnectKitProvider>
    </WagmiConfig>
  );
};
