import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";

const SocialNetworks = () => {
  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, url: "https://github.com" },
    { icon: <Linkedin className="h-6 w-6" />, url: "https://linkedin.com" },
    { icon: <Twitter className="h-6 w-6" />, url: "https://twitter.com" },
  ];

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">Social Networks</h1>
      <div className="flex justify-center gap-4">
        {socialLinks.map((link, index) => (
          <Button
            key={index}
            variant="outline"
            size="icon"
            as="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SocialNetworks;