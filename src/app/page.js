import Header from "@/components/header";
import About from "@/components/about";
import Skills from "@/components/skills";
import Certificates from "@/components/certificates";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <Skills />
      <Certificates />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
