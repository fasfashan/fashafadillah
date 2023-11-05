export default function Figma({ dataToolTipId, dataToolTipContent }) {
  return (
    <svg
      data-tooltip-id={dataToolTipId}
      data-tooltip-content={dataToolTipContent}
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
    >
      <path
        d="M21 11C22.3261 11 23.5979 10.4732 24.5355 9.53553C25.4732 8.59785 26 7.32608 26 6C26 4.67392 25.4732 3.40215 24.5355 2.46447C23.5979 1.52678 22.3261 1 21 1H11C9.67392 1 8.40215 1.52678 7.46447 2.46447C6.52679 3.40215 6 4.67392 6 6C6 7.32608 6.52679 8.59785 7.46447 9.53553C8.40215 10.4732 9.67392 11 11 11C9.67392 11 8.40215 11.5268 7.46447 12.4645C6.52679 13.4021 6 14.6739 6 16C6 17.3261 6.52679 18.5979 7.46447 19.5355C8.40215 20.4732 9.67392 21 11 21C10.0111 21 9.0444 21.2932 8.22215 21.8427C7.39991 22.3921 6.75904 23.173 6.3806 24.0866C6.00217 25.0002 5.90315 26.0055 6.09608 26.9755C6.289 27.9454 6.76521 28.8363 7.46447 29.5355C8.16373 30.2348 9.05465 30.711 10.0246 30.9039C10.9945 31.0969 11.9998 30.9978 12.9134 30.6194C13.827 30.241 14.6079 29.6001 15.1573 28.7779C15.7068 27.9556 16 26.9889 16 26V11H21Z"
        fill="white"
      />
      <path
        d="M21 21C23.7614 21 26 18.7614 26 16C26 13.2386 23.7614 11 21 11C18.2386 11 16 13.2386 16 16C16 18.7614 18.2386 21 21 21Z"
        fill="white"
      />
    </svg>
  );
}