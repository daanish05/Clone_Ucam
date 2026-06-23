import Link from "next/link";
import Image from "next/image";
import { Header, 
  Footer, 
  About, 
  Specialist,
  Choose,
  Testimonials, 
  Querys, 
  StayUpdate,
  Carousel} from "./components";
// import overlay from "./components/overlay";


export default function Home(){
    return(
    <>
    <div id="wrapper">
      {/* Calling Header  */}
      <Header />
          
          <div className="no-bottom no-top" id="content">
            <div id="top" />

      {/* Calling carousel Section */}
          <Carousel />
          
      {/* Calling About Section */}
            
          <About />

      {/* Calling Specialist Section */}

          <Specialist />
      
      {/* Calling Choose Section  */}

          <Choose />
      
      {/* Calling Testimonials  */}

          <Testimonials />
      
      {/* Caling Querys   */}
      
          <Querys />
      
      {/* Calling Update Section */}
          
          <StayUpdate />
    {/* Calling Footer section */}
          
          <Footer />
      
      </div>
      
      </div>
  {/* Javascript Files
    ================================================== */}
</>

    );
}