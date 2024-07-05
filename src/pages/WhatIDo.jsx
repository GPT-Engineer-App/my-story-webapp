import { Badge } from "@/components/ui/badge";

const WhatIDo = () => {
  const skills = ["Web Development", "UI/UX Design", "Project Management"];

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">What I Do</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="text-lg">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;