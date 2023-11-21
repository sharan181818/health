import "@/styles/globals.css";
import Footer from "@/components/Footer/Footer";
import Navbar1 from "@/components/Navbar/Navbar";
export default function App({ Component, pageProps }) {
  return (
    <>
      {/*  <header> */}
      {/*     <div class="container"> */}
      {/*         <center><h1>HealthCare Hub</h1></center> */}
      {/*         <center><p>Your Health, Our Priority</p></center> */}
      {/*     </div> */}
      {/* </header> */}
      <Navbar1 />

      <Component {...pageProps} />
      <Footer />
      {/* <footer> */}
      {/*       <div class="container"> */}
      {/*          <center><p>&copy; 2023 HealthCare Hub | Your Health, Your Way</p></center>  */}
      {/*       </div> */}
      {/*   </footer> */}
    </>
  );
}
