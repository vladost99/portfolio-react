import React from "react";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="linkedin-link" src="../assets/linkedin.png" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.twitter.com"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="twitter-link" src="../assets/twitter.png" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="facebook-link" src="../assets/facebook.png" />
      </a>

      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com"
        className="hover:opacity-50 transition duration-500"
      >
        <img alt="instagram-link" src="../assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
