import { socialLinks } from "../data/socialLinks.js";
import { socialIconMap } from "./SocialIcons.jsx";
import "./SocialSidebar.css";

// Screen ke right edge par fix rehta hai, scroll karne par bhi hilta nahi —
// jaise zyada business sites pe floating WhatsApp button hota hai.
function SocialSidebar() {
  return (
    <div className="social-sidebar">
      {socialLinks.map(({ name, href }) => {
        const Icon = socialIconMap[name];
        return (
          <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}>
            <Icon />
          </a>
        );
      })}
    </div>
  );
}

export default SocialSidebar;