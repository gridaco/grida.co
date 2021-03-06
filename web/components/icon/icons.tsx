interface IconListProps {
  width: number;
  height: number;
  svg: JSX.Element;
}

export interface IconList {
  search: IconListProps;
  bridged: IconListProps;
  youtube: IconListProps;
  instagram: IconListProps;
  twitter: IconListProps;
  facebook: IconListProps;
  dribble: IconListProps;
  github: IconListProps;
  arrowUp: IconListProps;
  arrowDown: IconListProps;
  headerMenu: IconListProps;
  videoPlay: IconListProps;
  videoPlaceholder: IconListProps;
  mockIcon: IconListProps;
  headerClose: IconListProps;
  lock: IconListProps;
  loading: IconListProps;
  home: IconListProps;
  graph: IconListProps;
  play: IconListProps;
}

const icons: IconList = {
  search: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
          fill="#C1C1C1"
        />
      </svg>
    ),
  },
  bridged: {
    width: 64,
    height: 64,
    svg: (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M40.3016 23.3848L40.207 40.6821L56.9372 57.0342V40.0204V39.7369L56.9348 39.7345C56.7822 30.6788 49.3937 23.3848 40.3016 23.3848Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.3364 15.3609C30.0295 16.2906 23.5716 23.3374 23.5716 31.8926L23.5716 39.8323L23.8552 57.1296L7.125 40.7775V23.3857V23.2912L7.12526 23.2914C7.17599 14.1472 14.6045 6.75 23.7607 6.75C30.0384 6.75 35.504 10.2273 38.3364 15.3609Z"
          fill="black"
        />
      </svg>
    ),
  },
  youtube: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22.0617 6.93984C21.9422 6.49462 21.7078 6.0886 21.382 5.76243C21.0563 5.43625 20.6505 5.20136 20.2055 5.08125C18.5672 4.64063 12 4.64062 12 4.64062C12 4.64062 5.43281 4.64062 3.79453 5.07891C3.34927 5.19862 2.94334 5.43339 2.61751 5.75962C2.29169 6.08586 2.05744 6.49208 1.93828 6.9375C1.5 8.57812 1.5 12 1.5 12C1.5 12 1.5 15.4219 1.93828 17.0602C2.17969 17.9648 2.89219 18.6773 3.79453 18.9188C5.43281 19.3594 12 19.3594 12 19.3594C12 19.3594 18.5672 19.3594 20.2055 18.9188C21.1102 18.6773 21.8203 17.9648 22.0617 17.0602C22.5 15.4219 22.5 12 22.5 12C22.5 12 22.5 8.57813 22.0617 6.93984ZM9.91406 15.1406V8.85938L15.3516 11.9766L9.91406 15.1406Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
  },
  instagram: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9991 8.87726C10.2788 8.87726 8.87492 10.2812 8.87492 12.0015C8.87492 13.7218 10.2788 15.1257 11.9991 15.1257C13.7194 15.1257 15.1234 13.7218 15.1234 12.0015C15.1234 10.2812 13.7194 8.87726 11.9991 8.87726ZM21.3694 12.0015C21.3694 10.7077 21.3812 9.4257 21.3085 8.13429C21.2359 6.63429 20.8937 5.30304 19.7968 4.20617C18.6976 3.10695 17.3687 2.7671 15.8687 2.69445C14.5749 2.62179 13.2929 2.63351 12.0015 2.63351C10.7077 2.63351 9.4257 2.62179 8.13429 2.69445C6.63429 2.7671 5.30304 3.10929 4.20617 4.20617C3.10695 5.30538 2.7671 6.63429 2.69445 8.13429C2.62179 9.42804 2.63351 10.7101 2.63351 12.0015C2.63351 13.2929 2.62179 14.5773 2.69445 15.8687C2.7671 17.3687 3.10929 18.6999 4.20617 19.7968C5.30538 20.896 6.63429 21.2359 8.13429 21.3085C9.42804 21.3812 10.7101 21.3694 12.0015 21.3694C13.2952 21.3694 14.5773 21.3812 15.8687 21.3085C17.3687 21.2359 18.6999 20.8937 19.7968 19.7968C20.896 18.6976 21.2359 17.3687 21.3085 15.8687C21.3835 14.5773 21.3694 13.2952 21.3694 12.0015ZM11.9991 16.8085C9.33898 16.8085 7.1921 14.6616 7.1921 12.0015C7.1921 9.34132 9.33898 7.19445 11.9991 7.19445C14.6593 7.19445 16.8062 9.34132 16.8062 12.0015C16.8062 14.6616 14.6593 16.8085 11.9991 16.8085ZM17.003 8.12023C16.3819 8.12023 15.8804 7.61867 15.8804 6.99757C15.8804 6.37648 16.3819 5.87492 17.003 5.87492C17.6241 5.87492 18.1257 6.37648 18.1257 6.99757C18.1259 7.14505 18.097 7.29112 18.0406 7.42741C17.9843 7.5637 17.9016 7.68754 17.7973 7.79182C17.693 7.89611 17.5692 7.9788 17.4329 8.03515C17.2966 8.0915 17.1505 8.12041 17.003 8.12023Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
  },
  twitter: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.7504 5.96017C21.0332 6.26954 20.2527 6.4922 19.4488 6.57892C20.2835 6.08306 20.9085 5.2997 21.2066 4.37579C20.4234 4.8417 19.5654 5.16841 18.6707 5.34142C18.2967 4.94163 17.8445 4.62315 17.342 4.40581C16.8396 4.18847 16.2978 4.07693 15.7504 4.07813C13.5355 4.07813 11.7543 5.87345 11.7543 8.07657C11.7543 8.38595 11.7918 8.69532 11.8527 8.99298C8.53633 8.81954 5.57852 7.23517 3.61211 4.80938C3.25381 5.42137 3.06605 6.1182 3.06836 6.82735C3.06836 8.21485 3.77383 9.43829 4.84961 10.1578C4.21564 10.1329 3.59651 9.9586 3.04258 9.64923V9.69845C3.04258 11.6414 4.41602 13.2516 6.24648 13.6219C5.90279 13.7112 5.54924 13.7568 5.19414 13.7578C4.93398 13.7578 4.68789 13.732 4.43945 13.6969C4.9457 15.2813 6.41992 16.432 8.17539 16.4695C6.80195 17.5453 5.08164 18.1781 3.21367 18.1781C2.87852 18.1781 2.56914 18.1664 2.24805 18.1289C4.01992 19.2656 6.12227 19.9219 8.38633 19.9219C15.7363 19.9219 19.7582 13.8328 19.7582 8.54767C19.7582 8.37423 19.7582 8.20079 19.7465 8.02735C20.5246 7.45782 21.2066 6.75235 21.7504 5.96017Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
  },
  facebook: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
  },
  dribble: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.8227 7.69453C15.1287 7.07706 14.2953 6.63702 13.394 6.41211C12.4928 6.18719 11.5504 6.18411 10.6477 6.40313C10.807 6.61641 11.8547 8.04141 12.7992 9.77813C14.85 9.00938 15.7172 7.84219 15.8227 7.69453ZM12.9844 12.9562C9.73359 14.0883 8.56406 16.3453 8.46094 16.5563C9.43828 17.318 10.6664 17.7727 12 17.7727C12.7992 17.7727 13.5609 17.6109 14.2523 17.3156C14.1656 16.8094 13.8328 15.0469 13.0219 12.9422L12.9844 12.9562ZM14.1023 12.6773C14.857 14.7492 15.1641 16.4367 15.2227 16.7883C16.5164 15.9141 17.4375 14.5289 17.693 12.9234C17.4961 12.8625 15.9094 12.3891 14.1023 12.6773ZM12 1.5C6.20156 1.5 1.5 6.20156 1.5 12C1.5 17.7984 6.20156 22.5 12 22.5C17.7984 22.5 22.5 17.7984 22.5 12C22.5 6.20156 17.7984 1.5 12 1.5ZM12 18.75C8.27812 18.75 5.25 15.7219 5.25 12C5.25 8.27812 8.27812 5.25 12 5.25C15.7219 5.25 18.75 8.27812 18.75 12C18.75 15.7219 15.7219 18.75 12 18.75ZM13.2445 10.6359C13.3781 10.9102 13.507 11.1891 13.6266 11.4703C13.6688 11.5687 13.7109 11.6672 13.7508 11.768C15.668 11.5266 17.5758 11.9133 17.7656 11.9531C17.7539 10.5914 17.2664 9.34219 16.4648 8.36016C16.3406 8.52656 15.375 9.76641 13.2445 10.6359ZM11.6859 10.125C10.7297 8.42578 9.70078 6.99844 9.54844 6.78984C7.93594 7.55156 6.72891 9.0375 6.35625 10.8258C6.61406 10.8305 8.99063 10.8422 11.6859 10.125ZM12.4031 12.0586C12.4781 12.0352 12.5531 12.0117 12.6305 11.9906C12.4852 11.6625 12.3281 11.3344 12.1641 11.0133C9.28594 11.8758 6.48984 11.8383 6.23906 11.8336C6.23672 11.8922 6.23672 11.9508 6.23672 12.0094C6.23672 13.4906 6.79687 14.843 7.71797 15.8648C7.84687 15.6398 9.42891 13.0195 12.4031 12.0586Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
  },
  github: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.9906 1.78711C6.19453 1.78477 1.5 6.47695 1.5 12.2684C1.5 16.848 4.43672 20.741 8.52656 22.1707C9.07734 22.309 8.99297 21.9176 8.99297 21.6504V19.834C5.8125 20.2066 5.68359 18.102 5.47031 17.7504C5.03906 17.0145 4.01953 16.827 4.32422 16.4754C5.04844 16.1027 5.78672 16.5691 6.64219 17.8324C7.26094 18.7488 8.46797 18.5941 9.07969 18.4418C9.21328 17.891 9.49922 17.3988 9.89297 17.0168C6.59766 16.4262 5.22422 14.4152 5.22422 12.0246C5.22422 10.8645 5.60625 9.79805 6.35625 8.93789C5.87812 7.51992 6.40078 6.30586 6.47109 6.12539C7.83281 6.00352 9.24844 7.10039 9.35859 7.18711C10.132 6.97852 11.0156 6.86836 12.0047 6.86836C12.9984 6.86836 13.8844 6.9832 14.6648 7.19414C14.9297 6.99258 16.2422 6.05039 17.5078 6.16524C17.5758 6.3457 18.0867 7.53164 17.6367 8.93086C18.3961 9.79336 18.7828 10.8691 18.7828 12.0316C18.7828 14.427 17.4 16.4402 14.0953 17.0215C14.3784 17.2999 14.6031 17.6318 14.7564 17.998C14.9098 18.3642 14.9886 18.7573 14.9883 19.1543V21.791C15.007 22.002 14.9883 22.2105 15.3398 22.2105C19.4906 20.8113 22.4789 16.8902 22.4789 12.2707C22.4789 6.47695 17.782 1.78711 11.9906 1.78711Z"
          fill="#4E4E4E"
        />
      </svg>
    ),
  },
  arrowDown: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41 8.58984L12 13.1698L16.59 8.58984L18 9.99984L12 15.9998L6 9.99984L7.41 8.58984Z"
          fill="#8B8B8B"
        />
      </svg>
    ),
  },
  arrowUp: {
    width: 24,
    height: 24,
    svg: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.41 15.41L12 10.83L16.59 15.41L18 14L12 8L6 14L7.41 15.41Z"
          fill="black"
        />
      </svg>
    ),
  },
  headerMenu: {
    width: 32,
    height: 32,
    svg: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="16" fill="#ECECEC" />
        <path
          d="M7 22.3037H25V20.3037H7V22.3037ZM7 17.3037H25V15.3037H7V17.3037ZM7 10.3037V12.3037H25V10.3037H7Z"
          fill="#686868"
        />
      </svg>
    ),
  },
  videoPlay: {
    width: 112,
    height: 112,
    svg: (
      <svg
        width="112"
        height="112"
        viewBox="0 0 112 112"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="56" cy="56" r="56" fill="black" fillOpacity="0.8" />
        <path
          d="M79.8125 51.3034C83.8125 53.6128 83.8125 59.3863 79.8125 61.6957L49.0625 79.4492C45.0625 81.7586 40.0625 78.8718 40.0625 74.253L40.0625 38.746C40.0625 34.1272 45.0625 31.2404 49.0625 33.5498L79.8125 51.3034Z"
          fill="white"
        />
      </svg>
    ),
  },
  videoPlaceholder: {
    width: 1360,
    height: 864,
    svg: (
      <svg
        width="1360"
        height="864"
        viewBox="0 0 1360 864"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <path
            d="M160 180C160 166.745 170.745 156 184 156H1176C1189.25 156 1200 166.745 1200 180V676C1200 689.255 1189.25 700 1176 700H184C170.745 700 160 689.255 160 676V180Z"
            fill="white"
          />
          <circle cx="680" cy="428" r="56" fill="black" fillOpacity="0.8" />
          <path
            d="M703.812 423.304C707.812 425.613 707.813 431.387 703.813 433.696L673.063 451.45C669.063 453.759 664.063 450.872 664.063 446.254L664.063 410.746C664.063 406.128 669.063 403.241 673.063 405.55L703.812 423.304Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="1360"
            height="864"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feMorphology
              radius="32"
              operator="dilate"
              in="SourceAlpha"
              result="effect1_dropShadow"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="64" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    ),
  },
  mockIcon: {
    width: 24,
    height: 24,
    svg: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="24" height="24" rx="4" fill="#F1F1F1" />
    </svg>
  },
  headerClose: {
    width: 32,
    height: 32,
    svg: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="#ECECEC" />
      <path d="M22.7188 10.5946L21.3088 9.18457L15.7188 14.7746L10.1287 9.18457L8.71875 10.5946L14.3088 16.1846L8.71875 21.7746L10.1287 23.1846L15.7188 17.5946L21.3088 23.1846L22.7188 21.7746L17.1287 16.1846L22.7188 10.5946Z" fill="#686868" />
    </svg>
  },
  lock: {
    width: 16,
    height: 16,
    svg: <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.5003 5.33317H11.8337V3.99984C11.8337 2.15984 10.3403 0.666504 8.50033 0.666504C6.66033 0.666504 5.16699 2.15984 5.16699 3.99984V5.33317H4.50033C3.76699 5.33317 3.16699 5.93317 3.16699 6.6665V13.3332C3.16699 14.0665 3.76699 14.6665 4.50033 14.6665H12.5003C13.2337 14.6665 13.8337 14.0665 13.8337 13.3332V6.6665C13.8337 5.93317 13.2337 5.33317 12.5003 5.33317ZM8.50033 11.3332C7.76699 11.3332 7.16699 10.7332 7.16699 9.99984C7.16699 9.2665 7.76699 8.6665 8.50033 8.6665C9.23366 8.6665 9.83366 9.2665 9.83366 9.99984C9.83366 10.7332 9.23366 11.3332 8.50033 11.3332ZM10.567 5.33317H6.43366V3.99984C6.43366 2.85984 7.36033 1.93317 8.50033 1.93317C9.64033 1.93317 10.567 2.85984 10.567 3.99984V5.33317Z" fill="#323232" />
    </svg>
  },
  loading: {
    width: 84,
    height: 84,
    svg: <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M41.8026 74.7602C51.7701 74.7602 60.6979 70.3088 66.7064 63.2854L57.3797 57.9006C53.3649 61.8344 47.8665 64.2599 41.8017 64.2599C32.6414 64.2599 24.7734 58.7267 21.3576 50.8203H23.9587C26.5452 50.8203 28.1618 48.0203 26.8685 45.7803L17.4115 29.4003C16.1183 27.1603 12.8851 27.1603 11.5919 29.4003L2.13486 45.7803C0.841591 48.0203 2.45817 50.8203 5.0447 50.8203H10.2436C14.0948 64.6291 26.7656 74.7602 41.8026 74.7602ZM62.2461 33.1802H59.6449C57.0584 33.1802 55.4418 35.9802 56.7351 38.2202L66.1921 54.6002C67.4854 56.8402 70.7185 56.8402 72.0118 54.6002L81.4688 38.2202C82.762 35.9802 81.1455 33.1802 78.5589 33.1802H73.3616C69.5105 19.3714 56.8396 9.24023 41.8026 9.24023C32.1599 9.24023 23.4903 13.4063 17.4954 20.0367L26.8979 25.4652C30.8437 21.9064 36.0697 19.7399 41.8017 19.7399C50.9623 19.7399 58.8305 25.2734 62.2461 33.1802Z" fill="url(#paint0_linear)" />
      <defs>
        <linearGradient id="paint0_linear" x1="41.8018" y1="9.24023" x2="41.8018" y2="74.7602" gradientUnits="userSpaceOnUse">
          <stop stop-color="#5873FF" />
          <stop offset="1" stop-color="#4DA0CE" />
        </linearGradient>
      </defs>
    </svg>
  },
  home: {
    width: 42,
    height: 42,
    svg: <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.6191 35.4596V25.1076H24.5204V35.4596H33.1471V21.6569H38.3231L21.0697 6.12891L3.81641 21.6569H8.99241V35.4596H17.6191Z" fill="black" />
    </svg>
  },
  graph: {
    width: 42,
    height: 42,
    svg: <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6.83409 32.8538L17.1861 22.4846L24.0874 29.3859L38.7528 12.8917L36.32 10.459L24.0874 24.2099L17.1861 17.3086L4.24609 30.2658L6.83409 32.8538Z" fill="#8F8F8F" />
    </svg>
  },
  play: {
    width: 42,
    height: 42,
    svg: <svg width="42" height="43" viewBox="0 0 42 43" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.2" filter="url(#filter0_b)">
        <circle cx="20.7763" cy="21.6796" r="20.704" fill="black" />
      </g>
      <path d="M13.875 9.60254V33.7572L32.8537 21.6799L13.875 9.60254Z" fill="black" />
      <defs>
        <filter id="filter0_b" x="-27.5331" y="-26.6297" width="96.6187" height="96.6187" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImage" stdDeviation="13.8027" />
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur" result="shape" />
        </filter>
      </defs>
    </svg>
  }
};

export default icons;
