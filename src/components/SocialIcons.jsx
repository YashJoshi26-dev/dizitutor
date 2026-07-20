// Each icon uses its real brand color directly (not currentColor),
// so it looks the same everywhere regardless of parent text color.

export const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <defs>
      <linearGradient id="ig-gradient" x1="0" y1="24" x2="24" y2="0">
        <stop offset="0%" stopColor="#feda75" />
        <stop offset="30%" stopColor="#fa7e1e" />
        <stop offset="60%" stopColor="#d62976" />
        <stop offset="100%" stopColor="#962fbf" />
      </linearGradient>
    </defs>
    <rect x="3" y="3" width="18" height="18" rx="5" stroke="url(#ig-gradient)" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="4" stroke="url(#ig-gradient)" strokeWidth="1.8" />
    <circle cx="17.2" cy="6.8" r="1" fill="url(#ig-gradient)" />
  </svg>
);

export const YoutubeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="5" width="20" height="14" rx="4" fill="#FF0000" />
    <path d="M10 9L15 12L10 15V9Z" fill="#ffffff" />
  </svg>
);

export const WhatsappIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path
      d="M12 3a9 9 0 00-7.6 13.8L3 21l4.4-1.4A9 9 0 1012 3z"
      fill="#25D366"
    />
    <path
      d="M8.5 9.5c.3 3 2.5 5.2 5.5 5.5"
      stroke="#ffffff"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// Maps a social platform name to its icon component — used by both
// the footer and the sidebar so the icon set stays in one place.
export const socialIconMap = {
  Instagram: InstagramIcon,
  YouTube: YoutubeIcon,
  WhatsApp: WhatsappIcon,
};