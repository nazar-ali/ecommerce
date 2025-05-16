import { cookies } from "next/headers";
// import Footer from "../components/Footer";
// import HeaderSlider from "../components/HeaderSlider";
// import HomeProduct from "../components/HomeProduct.js";
// import Navbar from "../components/Navbar";
import { redirect } from "next/navigation";
import DashboardPage from "../dashoard/page";
export default async function Home() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/sign-up");
  }
  return <DashboardPage />;
}
