export const SvgLoader = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 128 128"
    {...props}
  >
    <path
      fill="#3518bf"
      d="M64.4 16a49 49 0 0 0-50 48 51 51 0 0 0 50 52.2 53 53 0 0 0 54-52c-.7-48-45-55.7-45-55.7s45.3 3.8 49 55.6c.8 32-24.8 59.5-58 60.2-33 .8-61.4-25.7-62-60C1.3 29.8 28.8.6 64.3 0c0 0 8.5 0 8.7 8.4 0 8-8.6 7.6-8.6 7.6"
    >
      <animateTransform
        attributeName="transform"
        dur="1400ms"
        from="0 64 64"
        repeatCount="indefinite"
        to="360 64 64"
        type="rotate"
      />
    </path>
  </svg>
);
