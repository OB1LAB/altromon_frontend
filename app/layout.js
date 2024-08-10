import "react-toastify/dist/ReactToastify.css";
import "rsuite/dist/rsuite.min.css";
import "./globals.scss";
import CustomBody from "@/modules/CustomBody/CustomBody";

export const metadata = {
  title: "AltroMon",
  description: "Локальный майнкрафт проект",
  openGraph: {
    title: "AltroMon",
    description: "Локальный майнкрафт проект",
    siteName: "OB1LAB",
    locale: "ru_RU",
    type: "website",
    images: "https://altromon.ob1lab.ru/mood.jpg",
    url: "https://altromon.ob1lab.ru/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#ff00ff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <CustomBody>{children}</CustomBody>
    </html>
  );
}
