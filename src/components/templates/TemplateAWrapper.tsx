// src/components/templates/TemplateAWrapper.tsx
import Navbar from "@/components/Navbar";
const TemplateAWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className="bg-white text-black">{children}</main>
  </>
);
export default TemplateAWrapper;
