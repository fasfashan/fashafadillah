export default function Tailwind({ dataToolTipId, dataToolTipContent }) {
  return (
    <svg
      data-tooltip-id={dataToolTipId}
      data-tooltip-content={dataToolTipContent}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      className="fill-neutral-400 hover:fill-emerald-500 transition-all"
    >
      <g clip-path="url(#clip0_64_99)">
        <path
          d="M15.556 8C12.236 8 10.164 9.62933 9.33333 12.8893C10.5773 11.2587 12.0307 10.6493 13.6893 11.056C14.636 11.288 15.312 11.9627 16.06 12.7093C17.2813 13.9253 18.7267 15.3333 21.7773 15.3333C25.0973 15.3333 27.1693 13.704 28 10.444C26.756 12.0747 25.3027 12.684 23.644 12.2773C22.6973 12.0453 22.0213 11.3707 21.2733 10.624C20.052 9.408 18.64 8 15.556 8ZM10.2227 16.6667C6.90267 16.6667 4.83067 18.296 4 21.556C5.244 19.9253 6.69733 19.316 8.356 19.7227C9.30267 19.9547 9.97867 20.6293 10.7267 21.376C11.948 22.592 13.36 24 16.444 24C19.764 24 21.836 22.3707 22.6667 19.1107C21.4227 20.7413 19.9693 21.3507 18.3107 20.944C17.364 20.712 16.688 20.0373 15.94 19.2907C14.7187 18.0747 13.3067 16.6667 10.2227 16.6667Z"
          fill=""
        />
      </g>
      <defs>
        <clipPath id="clip0_64_99">
          <rect width="32" height="32" fill="" />
        </clipPath>
      </defs>
    </svg>
  );
}
