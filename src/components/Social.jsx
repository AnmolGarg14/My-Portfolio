import React from "react";
import { socialIcons } from "../constants/SocialIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Assuming you're using FontAwesome

const Social = () => {
  return (
    <div className="relative min-h-screen">
      {/* Other content of your website */}
      
      <div className="fixed bottom-0 left-0 p-4 flex gap-4 bg-gray-800">
        {socialIcons.map((icon, index) => (
          <a
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-primary"
          >
            {/* <FontAwesomeIcon icon={['fab', icon.name]} size="lg" /> */}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Social;
