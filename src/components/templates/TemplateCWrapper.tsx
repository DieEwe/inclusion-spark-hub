// src/components/templates/TemplateCWrapper.tsx
const TemplateCWrapper = ({ children }: { children: React.ReactNode }) => (
  <section className="bg-navy text-white p-10">
    <div className="container mx-auto">{children}</div>
  </section>
);
export default TemplateCWrapper;
