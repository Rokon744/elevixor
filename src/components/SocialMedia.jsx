import Link from "next/link";
import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social-media flex items-center gap-3 text-[20px] mt-2">
      <Link href={"#"}>
        <FaLinkedin />
      </Link>
      <Link href={"#"}>
        <FaTwitter />
      </Link>
      <Link href={"#"}>
        <FaGithub />
      </Link>
    </div>
  );
};

export default SocialMedia;
