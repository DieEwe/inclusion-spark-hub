// src/components/templates/TemplateBWrapper.tsx
const TemplateBWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-200 p-12">
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-6">{children}</div>
  </div>
);
export default TemplateBWrapper;
