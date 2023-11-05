export default function React({ dataToolTipId, dataToolTipContent }) {
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
        d="M25.6663 11.295C25.3467 11.1858 25.0248 11.0842 24.7006 10.99C24.7544 10.7713 24.804 10.5513 24.8494 10.33C25.5806 6.77376 25.1025 3.90876 23.4706 2.96564C21.9081 2.06064 19.3456 3.00376 16.7606 5.25876C16.5065 5.48126 16.2575 5.71043 16.0138 5.94626C15.8512 5.78959 15.6846 5.63626 15.5138 5.48626C12.8044 3.07501 10.0887 2.05939 8.45875 3.00564C6.89625 3.91251 6.43188 6.60564 7.09 9.97626C7.15583 10.3096 7.22979 10.6415 7.31187 10.9719C6.9275 11.0813 6.55625 11.1981 6.20125 11.3219C3.02875 12.4313 1 14.1706 1 15.9744C1 17.8381 3.1775 19.7069 6.48562 20.84C6.75396 20.9313 7.02479 21.0161 7.29812 21.0944C7.20937 21.4481 7.13083 21.8058 7.0625 22.1675C6.4375 25.48 6.925 28.1094 8.48438 29.0106C10.095 29.9413 12.7969 28.985 15.4306 26.6788C15.639 26.4963 15.8473 26.3036 16.0556 26.1006C16.319 26.3552 16.5898 26.6023 16.8681 26.8419C19.4181 29.0406 21.9363 29.9288 23.4931 29.025C25.1025 28.0913 25.6256 25.2663 24.9463 21.8294C24.8942 21.5669 24.8342 21.299 24.7663 21.0256C24.9563 20.9694 25.1423 20.9113 25.3244 20.8513C28.7619 19.7094 31.0012 17.8631 31.0012 15.9763C31 14.1638 28.9062 12.4131 25.6663 11.295ZM17.6038 6.22751C19.8181 4.29564 21.8881 3.53314 22.8319 4.07814C23.8363 4.65876 24.2269 7.00001 23.5956 10.0706C23.554 10.2706 23.509 10.47 23.4606 10.6688C22.1391 10.3682 20.7991 10.156 19.4494 10.0338C18.6766 8.92056 17.8294 7.86085 16.9137 6.86189C17.1379 6.64439 17.3675 6.43293 17.6025 6.22751H17.6038ZM9.85812 17.5156C10.1294 18.0406 10.4129 18.5592 10.7087 19.0713C11.01 19.5938 11.324 20.1086 11.6506 20.6156C10.7219 20.5147 9.79903 20.3659 8.88562 20.17C9.15063 19.3125 9.47687 18.4219 9.85812 17.5156ZM9.85812 14.495C9.48312 13.6081 9.16562 12.7356 8.905 11.8931C9.76125 11.7013 10.6737 11.5444 11.625 11.4256C11.3062 11.9231 10.9996 12.4279 10.705 12.94C10.4104 13.4521 10.1275 13.9704 9.85625 14.495H9.85812ZM10.5394 16.0056C10.9344 15.1819 11.3598 14.374 11.8156 13.5819C12.271 12.7902 12.7558 12.0167 13.27 11.2613C14.1625 11.1938 15.0775 11.1581 16.0019 11.1581C16.9262 11.1581 17.8469 11.1938 18.7388 11.2619C19.2475 12.0156 19.7294 12.7865 20.1844 13.5744C20.6394 14.3623 21.0704 15.1665 21.4775 15.9869C21.0758 16.8136 20.6458 17.6248 20.1875 18.4206C19.7329 19.2123 19.2537 19.9881 18.75 20.7481C17.8594 20.8106 16.9375 20.845 16 20.845C15.0625 20.845 14.1581 20.8156 13.2837 20.7588C12.7658 20.0008 12.2771 19.224 11.8175 18.4281C11.3579 17.6323 10.9313 16.8248 10.5375 16.0056H10.5394ZM21.2969 19.0625C21.599 18.5383 21.889 18.0073 22.1669 17.4694C22.5478 18.3332 22.8841 19.216 23.1744 20.1144C22.2502 20.3225 21.3158 20.4821 20.375 20.5925C20.6925 20.0888 20.9998 19.5788 21.2969 19.0625ZM22.1544 14.4956C21.8777 13.9686 21.59 13.4477 21.2913 12.9331C20.9996 12.4256 20.6956 11.9244 20.3794 11.4294C21.3363 11.5506 22.2544 11.7119 23.115 11.9088C22.8383 12.7866 22.5177 13.65 22.1544 14.4956ZM16.0144 7.78001C16.6385 8.46195 17.2278 9.17494 17.78 9.91626C16.5988 9.86001 15.4167 9.86001 14.2338 9.91626C14.8169 9.14501 15.4138 8.42939 16.0144 7.78001ZM9.10375 4.11626C10.1075 3.53376 12.3269 4.36626 14.6663 6.44564C14.8156 6.57876 14.9663 6.71814 15.1163 6.86251C14.1959 7.86133 13.3427 8.92012 12.5625 10.0319C11.2158 10.1532 9.87838 10.362 8.55875 10.6569C8.4825 10.3502 8.41375 10.0415 8.3525 9.73064C7.78687 6.84126 8.16125 4.66314 9.10375 4.11626ZM7.64062 19.8569C7.39062 19.7856 7.14375 19.7083 6.9 19.625C5.4375 19.125 4.22938 18.4725 3.4 17.7619C2.6575 17.125 2.28125 16.4894 2.28125 15.9744C2.28125 14.88 3.91 13.4838 6.62625 12.5369C6.9675 12.4181 7.31167 12.3096 7.65875 12.2113C8.06216 13.5077 8.55072 14.7761 9.12125 16.0081C8.54392 17.2572 8.04931 18.5429 7.64062 19.8569ZM14.5863 25.7113C13.4219 26.7313 12.2556 27.4544 11.2275 27.8188C10.3038 28.1456 9.56812 28.155 9.12375 27.8981C8.1775 27.3513 7.78375 25.2394 8.32063 22.4069C8.38438 22.0736 8.45729 21.7402 8.53938 21.4069C9.87221 21.694 11.223 21.8901 12.5825 21.9938C13.3703 23.1113 14.2305 24.1761 15.1575 25.1813C14.9713 25.3644 14.7806 25.5406 14.5863 25.7113ZM16.05 24.26C15.4425 23.6031 14.8363 22.8763 14.245 22.095C14.8196 22.1175 15.4046 22.1288 16 22.1288C16.6112 22.1288 17.2162 22.1156 17.8125 22.0888C17.2623 22.842 16.674 23.5667 16.05 24.26ZM23.8325 26.0469C23.6538 27.0119 23.2944 27.6556 22.85 27.9131C21.9044 28.4619 19.8825 27.7488 17.7025 25.8681C17.4525 25.6531 17.2025 25.4225 16.9481 25.1806C17.8571 24.1716 18.6971 23.1025 19.4625 21.9806C20.8295 21.8648 22.1869 21.6549 23.525 21.3525C23.5863 21.6 23.6404 21.8425 23.6875 22.08C23.9881 23.5988 24.0312 24.9725 23.8325 26.0469ZM24.92 19.6319C24.7563 19.6863 24.5875 19.7388 24.4163 19.79C23.9967 18.4875 23.489 17.215 22.8969 15.9813C23.4668 14.764 23.9546 13.51 24.3569 12.2275C24.6637 12.3169 24.9619 12.4106 25.2488 12.51C28.025 13.4675 29.7188 14.885 29.7188 15.9744C29.7188 17.1369 27.8894 18.6456 24.92 19.6319Z"
        fill="white"
      />
      <path
        d="M16 18.6593C16.532 18.6611 17.0524 18.5049 17.4955 18.2107C17.9386 17.9164 18.2844 17.4973 18.4892 17.0064C18.694 16.5155 18.7484 15.9748 18.6457 15.4529C18.543 14.931 18.2877 14.4513 17.9122 14.0746C17.5367 13.6979 17.0579 13.4411 16.5363 13.3366C16.0148 13.2322 15.474 13.2849 14.9824 13.4881C14.4908 13.6912 14.0705 14.0357 13.7748 14.4778C13.4791 14.92 13.3213 15.4399 13.3213 15.9718C13.3206 16.3242 13.3893 16.6733 13.5235 16.9992C13.6578 17.325 13.8549 17.6212 14.1037 17.8708C14.3525 18.1203 14.648 18.3185 14.9734 18.4538C15.2988 18.5891 15.6476 18.6589 16 18.6593Z"
        fill="white"
      />
    </svg>
  );
}
