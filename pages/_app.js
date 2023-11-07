import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (<>
     <header>
        <div class="container">
            <center><h1>HealthCare Hub</h1></center>
            <center><p>Your Health, Our Priority</p></center>
        </div>
    </header>

  <Component {...pageProps} />

  <footer>
        <div class="container">
           <center><p>&copy; 2023 HealthCare Hub | Your Health, Your Way</p></center> 
        </div>
    </footer>
  </>)
}
