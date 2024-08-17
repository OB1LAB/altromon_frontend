"use client";
import { CustomProvider } from "rsuite";
import useAuthStore from "@/modules/Auth/useAuthStore";
import NavBar from "@/modules/NavBar/NavBar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import CustomFooter from "@/modules/CustomFooter/CustomFooter";
import localFont from "next/font/local";

const NTSomicFont = localFont({ src: "NTSomic.woff2" });

export default function CustomBody({ children }) {
  const isLoading = useAuthStore((store) => store.isLoading);
  const themeColor = useAuthStore((store) => store.themeColor);
  const checkAuth = useAuthStore((store) => store.checkAuth);
  useEffect(() => {
    checkAuth();
  }, []);
  if (isLoading)
    return (
      <body className={`${NTSomicFont.className} rs-theme-dark`}>
        <header />
        <main>
          <div>Загрузка...</div>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            closeButton={true}
            pauseOnHover={false}
            theme="dark"
          />
        </main>
        <CustomFooter />
        <div className="background" />
        <div className="background2" />
      </body>
    );
  return (
    <body className={NTSomicFont.className}>
      <CustomProvider theme={themeColor}>
        <header>
          <NavBar />
        </header>
        <main>
          {children}
          <ToastContainer
            position="top-right"
            autoClose={2000}
            closeButton={true}
            pauseOnHover={false}
            theme={themeColor}
          />
        </main>
        <div className="background" />
        <div className="background2" />
        <CustomFooter />
      </CustomProvider>
    </body>
  );
}
