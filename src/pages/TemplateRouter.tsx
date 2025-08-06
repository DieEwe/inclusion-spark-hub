// src/pages/TemplateRouter.tsx
import { useParams } from "react-router-dom";

import TemplateAWrapper from "@/components/templates/TemplateAWrapper";
import TemplateBWrapper from "@/components/templates/TemplateBWrapper";
import SchnackContent1 from "@/components/schnacks/SchnackContent1";
import SchnackContent2 from "@/components/schnacks/SchnackContent2";

const templateMap = {
  "template-a": TemplateAWrapper,
  "template-b": TemplateBWrapper,
};

const schnackMap = {
  "schnack-1": SchnackContent1,
  "schnack-2": SchnackContent2,
};

const TemplateRouter = () => {
  const { template, schnack } = useParams();

  const Template = templateMap[template ?? ""];
  const Schnack = schnackMap[schnack ?? ""];

  if (!Template || !Schnack) {
    return <div>Not found</div>;
  }

  return (
    <Template>
      <Schnack />
    </Template>
  );
};

export default TemplateRouter;
