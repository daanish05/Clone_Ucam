import Navbar from "../components/Navbar";
import Script from "next/script";



export default function RootLayout({ children }) {    
    return(
        <>
        <html lang="en">
            <head>
                <link rel="stylesheet" href="/css/style.css" />
                <link rel="stylesheet" href="/css/coloring.css"/> 
                {/* <link rel="stylesheet" href="/css/swiper.css"/>  */}
                {/* <link rel="stylesheet" href="/css/plugin.css"/>  */}
                <link rel="stylesheet" href="/css/bootstrap.min.css"/> 
                <link rel="stylesheet" href="/css/colors/scheme-01.css"/> 
            </head>
            <body>
                <Navbar />
                {children}
                <script src="/js/custom-marquee.jsx" strategy="afterInteractive" />
                <script src="/js/custom-swiper-1.jsx"strategy="afterInteractive" />
                <script src="/js/designesia.jsx" strategy="afterInteractive"/>
                <script src="/js/swiper.jsx" strategy="afterInteractive" />
                <script src="/js/vendors.jsx" strategy="afterInteractive" />
            </body>
        </html>
        </>
    );
}