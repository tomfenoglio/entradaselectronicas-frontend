import "@styles/globals.css"
import Navbar from "@components/Navbar";
import Carousel from "@components/EventSlider";
import Footer from "@components/Footer";
import EventCards from "@components/EventCards";



export const metadata = {
    title: "entradaselectronicas",
    description: "La mejor ticketera",

};

// Layout files exist to define common UI elements that are shared across multiple pages
// children is the page.tsx of the app folder
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {/* No se que pasa con el favicon que me obliga a tener uno en app y otro en la dire de abajo, con nombres distintos */}
        <link rel="shortcut icon" href="/images/favicon-2.ico" />
      </head>
        <body>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Navbar/>
                {children}
            </main>
            <div className="flex bottom-0">
              <Footer/>
            </div>
        </body>
    </html>
  )
}

export default RootLayout;