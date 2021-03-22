import React from "react";

export default function alertIcon(props) {
    return (
        <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M9.33.89C4.69.89.926 4.643.926 9.268c0 4.624 3.765 8.377 8.404 8.377 4.639 0 8.404-3.753 8.404-8.377C17.734 4.643 13.97.89 9.33.89zm.84 12.566H8.49v-1.675h1.68v1.675zm0-3.35H8.49V5.078h1.68v5.026z"
          fill="#fff"
          fillOpacity={0.64}
        />
      </svg>
    );
}
