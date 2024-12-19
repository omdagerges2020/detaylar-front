import { Roboto } from "next/font/google";
import "./globals.css";
import MainLayout from "./MainLayout";
import ScrollToTop from "./components/ButtomTop";
import ChatModal from "./components/MesageModal";


const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Fashion",
  description: "markotopia e-commerce task",
};

export default function RootLayout({ children }) {



  return (
    <html lang="en">
      <head></head>
      <body className={`${roboto.className}`}>
        <MainLayout>
          {children}
          <ScrollToTop/>
          <ChatModal/>
        </MainLayout>
      </body>
    </html>
  );
}
