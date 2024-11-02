import Navbar from "@/components/modules/navbar/Navbar";
import { FaSignInAlt } from "react-icons/fa";

export const metadata = {
  title: "Shopino | Login-Register",
  icons:{
    icon:"/images/logo.jpeg"
  }
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
