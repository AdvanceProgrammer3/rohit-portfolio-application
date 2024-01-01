import Image from "next/image";
import HomePage from "@/app/components/HomePage";
import Resume from "@/app/components/Resume";
import Portfolio from "@/app/components/Portfolio";
import Skills from "@/app/components/Skills";
import Testimonials from "@/app/components/Testimonials";
import Articles from "@/app/components/Articles";
import ContactMe from "@/app/components/ContactMe";
import InteractiveFeatures from "@/app/components/InteractiveFeatures";
import CaseStudy from "@/app/components/CaseStudy";
import FreelanceProject from "@/app/components/FreelanceProject";
import Achievement from "@/app/components/Achievement";
import InteractiveResume from "@/app/components/InteractiveResume";
import VideoInroduction from "@/app/components/VideoInroduction";
import ResponsiveDesign from "@/app/components/ResponsiveDesign";
import ProfessionalAffiliation from "@/app/components/ProfessionalAffiliation";
import Footer from "@/app/components/Footer";


export default function Home() {


  return <main className="">

<HomePage />

<div className="lg:max-w-7xl mx-auto">
<Resume />
  <Portfolio />
<Skills />
  <Testimonials />
  <Articles />
  <ContactMe />
  <InteractiveFeatures />
  <CaseStudy />
  <ProfessionalAffiliation />
  <FreelanceProject />
  <Achievement />
  <InteractiveResume />
  <VideoInroduction />
  {/*<ResponsiveDesign />*/}
  <Footer />
</div>
   </main>

}
