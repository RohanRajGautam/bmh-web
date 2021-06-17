import React from "react";
import styled from "styled-components";

const Wrapper = styled.a`
svg {
      path{
        transition: all .4s ease;
      }
    
&:hover {
  cursor: pointer;
  filter: brightness(1.1);
      path:nth-child(3) {
        transform: translateX(1rem);
        transition: all .4s ease;
      }
      
      path:nth-child(4) {
        opacity: 0;
        transition: all 0.4s ease;
      }
    }
`;

const ExploreSvg = ({ to }) => (
  <Wrapper href={to} target="_blank">
    <svg
      width="207"
      height="86"
      viewBox="0 0 207 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.11297 35.4703C0.589971 18.1101 13.0992 4.1962 30.3923 2.59766C72.1034 -1.25805 139.328 -0.607417 177.588 3.13802C192.809 4.6281 204.517 16.0145 206.231 31.2121C206.694 35.3146 207 39.5567 207 43.605C207 46.9579 206.79 50.3619 206.455 53.6606C204.89 69.0727 192.598 80.3983 177.215 82.2315C161.214 84.1385 137.056 86 103.721 86C72.1268 86 48.0563 84.3278 31.3059 82.5296C13.605 80.6294 0.376454 66.6687 0.0484742 48.8691C0.0171577 47.1695 0 45.4132 0 43.6049C0 40.7957 0.0414039 38.075 0.11297 35.4703Z"
        fill="#6CA448"
      />
      <path
        d="M34.6596 37.972L32.9796 37.699V36.397H44.1726L44.4456 39.925H42.9756L42.2826 37.846L37.7466 37.657V43.306L40.6656 43.243L41.0016 41.521H42.3456V46.603H41.0016L40.6656 44.797L37.7466 44.734V50.656L42.8286 50.404L44.0466 47.716L45.6216 48.157L45.0756 52H33.0006V50.74L34.6596 50.53V37.972ZM50.7304 46.267L47.2654 41.794L46.1734 41.542V40.324H52.2424V41.542L50.8774 41.794L52.5364 44.125L53.0824 45.007L53.6284 44.125L55.3294 41.794L53.9014 41.542V40.324H58.4584V41.542L57.2614 41.794L53.9434 45.868L57.5764 50.572L58.7314 50.761V52H52.6624V50.761L53.9014 50.551L52.2844 48.094L51.6544 47.17L51.1504 48.073L49.4284 50.551L51.0454 50.761V52H46.0054V50.761L47.3494 50.551L50.7304 46.267ZM71.2152 45.784C71.2152 46.96 70.9702 48.038 70.4802 49.018C70.0042 49.998 69.2972 50.782 68.3592 51.37C67.4352 51.944 66.3292 52.231 65.0412 52.231C64.7612 52.231 64.4672 52.203 64.1592 52.147C63.8652 52.105 63.6272 52.049 63.4452 51.979L63.5082 53.722V55.633L65.4612 55.885V57.082H59.2242V55.885L60.5892 55.633V42.319L59.2242 41.941V40.492L62.6892 40.051H62.7312L63.2562 40.471V41.647C63.6062 41.213 64.0822 40.835 64.6842 40.513C65.2862 40.191 65.9442 40.03 66.6582 40.03C67.9882 40.03 69.0802 40.506 69.9342 41.458C70.7882 42.396 71.2152 43.838 71.2152 45.784ZM65.5662 41.773C65.1462 41.773 64.7472 41.864 64.3692 42.046C63.9912 42.228 63.7042 42.431 63.5082 42.655V50.446C63.6062 50.586 63.8022 50.705 64.0962 50.803C64.4042 50.901 64.7402 50.95 65.1042 50.95C66.0142 50.95 66.7352 50.558 67.2672 49.774C67.8132 48.976 68.0862 47.73 68.0862 46.036C68.0862 44.608 67.8552 43.544 67.3932 42.844C66.9312 42.13 66.3222 41.773 65.5662 41.773ZM74.1503 36.649L72.5963 36.376V35.242L76.4813 34.78H76.5233L77.0903 35.179V50.572L78.6233 50.74V52H72.6803V50.74L74.1503 50.551V36.649ZM80.069 46.183C80.069 44.867 80.328 43.747 80.846 42.823C81.378 41.899 82.085 41.206 82.967 40.744C83.849 40.268 84.808 40.03 85.844 40.03C87.608 40.03 88.966 40.576 89.918 41.668C90.884 42.746 91.367 44.216 91.367 46.078C91.367 47.408 91.101 48.542 90.569 49.48C90.051 50.404 89.351 51.097 88.469 51.559C87.601 52.007 86.642 52.231 85.592 52.231C83.842 52.231 82.484 51.692 81.518 50.614C80.552 49.522 80.069 48.045 80.069 46.183ZM85.76 50.866C87.342 50.866 88.133 49.34 88.133 46.288C88.133 44.692 87.944 43.481 87.566 42.655C87.188 41.815 86.572 41.395 85.718 41.395C84.094 41.395 83.282 42.921 83.282 45.973C83.282 47.569 83.478 48.787 83.87 49.627C84.276 50.453 84.906 50.866 85.76 50.866ZM93.2761 50.761L94.6621 50.593V42.319L93.3181 41.941V40.492L96.5731 40.051H96.6361L97.1611 40.471V40.933L97.0981 42.634H97.1611C97.2591 42.354 97.4901 42.011 97.8541 41.605C98.2181 41.185 98.6731 40.821 99.2191 40.513C99.7791 40.191 100.381 40.03 101.025 40.03C101.333 40.03 101.599 40.072 101.823 40.156V43.306C101.403 43.012 100.892 42.865 100.29 42.865C99.2681 42.865 98.3791 43.138 97.6231 43.684V50.572L100.059 50.761V52H93.2761V50.761ZM108.453 52.231C106.605 52.231 105.226 51.692 104.316 50.614C103.42 49.522 102.972 48.038 102.972 46.162C102.972 44.902 103.203 43.81 103.665 42.886C104.141 41.962 104.806 41.255 105.66 40.765C106.514 40.275 107.501 40.03 108.621 40.03C110.021 40.03 111.099 40.401 111.855 41.143C112.611 41.871 113.003 42.914 113.031 44.272C113.031 45.196 112.975 45.882 112.863 46.33H106.038C106.094 47.604 106.395 48.598 106.941 49.312C107.487 50.012 108.264 50.362 109.272 50.362C109.818 50.362 110.378 50.271 110.952 50.089C111.54 49.907 112.002 49.69 112.338 49.438L112.863 50.593C112.485 50.999 111.869 51.377 111.015 51.727C110.175 52.063 109.321 52.231 108.453 52.231ZM110.091 45.07C110.119 44.678 110.133 44.377 110.133 44.167C110.133 42.305 109.51 41.374 108.264 41.374C107.578 41.374 107.046 41.647 106.668 42.193C106.29 42.739 106.08 43.698 106.038 45.07H110.091Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M160.226 38.6363C160.025 38.4468 159.708 38.456 159.519 38.6569C159.329 38.8578 159.339 39.1742 159.539 39.3637L162.864 42.5L135.5 42.5C135.224 42.5 135 42.7239 135 43C135 43.2761 135.224 43.5 135.5 43.5L162.864 43.5L159.539 46.6363C159.339 46.8258 159.329 47.1422 159.519 47.3431C159.708 47.544 160.025 47.5532 160.226 47.3637L164.466 43.3637C164.566 43.2692 164.623 43.1377 164.623 43C164.623 42.8623 164.566 42.7308 164.466 42.6363L160.226 38.6363Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M174.225 43C174.225 50.1526 168.069 56 160.413 56C152.757 56 146.602 50.1526 146.602 43C146.602 35.8474 152.757 30 160.413 30C168.069 30 174.225 35.8474 174.225 43Z"
        stroke="white"
      />
    </svg>
  </Wrapper>
);

export default ExploreSvg;
