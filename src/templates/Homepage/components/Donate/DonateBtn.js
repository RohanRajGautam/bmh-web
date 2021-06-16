import React from "react";
import styled from "styled-components";

const Donate = styled.a``;

const DonateBtn = ({ to }) => (
  <Donate href={to} target="_blank">
    <svg
      width="201"
      height="86"
      viewBox="0 0 201 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.11281 35.3544C0.580722 18.0557 12.978 4.13919 30.2083 2.53198C70.5148 -1.22775 134.724 -0.593844 171.771 3.07112C186.971 4.57482 198.588 16.0159 200.252 31.1992C200.703 35.3057 201 39.5525 201 43.605C201 46.945 200.798 50.3357 200.475 53.6225C198.959 69.0461 186.753 80.4602 171.367 82.3181C155.829 84.1944 132.593 86 100.715 86C70.5071 86 47.3825 84.3787 31.1524 82.6124C13.4875 80.6898 0.369677 66.6956 0.0481531 48.9293C0.0170565 47.211 0 45.4346 0 43.6049C0 40.754 0.0414062 37.9942 0.11281 35.3544Z"
        fill="#6CA448"
      />
      <path
        d="M34.6596 37.972L33.0846 37.699V36.397H36.1506C36.6126 36.397 37.2356 36.369 38.0196 36.313C38.2016 36.299 38.4746 36.285 38.8386 36.271C39.2166 36.257 39.5526 36.25 39.8466 36.25C42.4226 36.25 44.3476 36.894 45.6216 38.182C46.9096 39.47 47.5536 41.297 47.5536 43.663C47.5536 45.315 47.2316 46.785 46.5876 48.073C45.9576 49.361 45.0546 50.369 43.8786 51.097C42.7026 51.811 41.3306 52.168 39.7626 52.168C39.3566 52.168 38.7196 52.14 37.8516 52.084C37.0396 52.028 36.4866 52 36.1926 52H33.0006V50.74L34.6596 50.53V37.972ZM37.7046 50.593C38.1806 50.719 38.8456 50.782 39.6996 50.782C41.0996 50.754 42.1986 50.194 42.9966 49.102C43.7946 47.996 44.1936 46.344 44.1936 44.146C44.1936 42.06 43.8016 40.45 43.0176 39.316C42.2336 38.168 41.0156 37.594 39.3636 37.594C39.0136 37.594 38.6776 37.615 38.3556 37.657C38.0476 37.699 37.8306 37.727 37.7046 37.741V50.593ZM49.1022 46.183C49.1022 44.867 49.3612 43.747 49.8792 42.823C50.4112 41.899 51.1182 41.206 52.0002 40.744C52.8822 40.268 53.8412 40.03 54.8772 40.03C56.6412 40.03 57.9992 40.576 58.9512 41.668C59.9172 42.746 60.4002 44.216 60.4002 46.078C60.4002 47.408 60.1342 48.542 59.6022 49.48C59.0842 50.404 58.3842 51.097 57.5022 51.559C56.6342 52.007 55.6752 52.231 54.6252 52.231C52.8752 52.231 51.5172 51.692 50.5512 50.614C49.5852 49.522 49.1022 48.045 49.1022 46.183ZM54.7932 50.866C56.3752 50.866 57.1662 49.34 57.1662 46.288C57.1662 44.692 56.9772 43.481 56.5992 42.655C56.2212 41.815 55.6052 41.395 54.7512 41.395C53.1272 41.395 52.3152 42.921 52.3152 45.973C52.3152 47.569 52.5112 48.787 52.9032 49.627C53.3092 50.453 53.9392 50.866 54.7932 50.866ZM63.4853 42.319L62.1413 41.941V40.492L65.6273 40.051H65.6903L66.2153 40.471V41.29L66.1943 41.794C66.6843 41.332 67.3213 40.933 68.1053 40.597C68.8893 40.261 69.6803 40.093 70.4783 40.093C71.3323 40.093 71.9973 40.254 72.4733 40.576C72.9633 40.884 73.3133 41.374 73.5233 42.046C73.7333 42.718 73.8383 43.628 73.8383 44.776V50.572L75.1193 50.74V52H69.7013V50.74L70.8353 50.572V44.776C70.8353 44.048 70.7863 43.481 70.6883 43.075C70.5903 42.655 70.4083 42.354 70.1423 42.172C69.8903 41.976 69.5263 41.878 69.0503 41.878C68.2523 41.878 67.3983 42.221 66.4883 42.907V50.551L67.7483 50.74V52H62.2673V50.74L63.4853 50.551V42.319ZM76.3722 48.724C76.3722 47.45 77.0092 46.491 78.2832 45.847C79.5712 45.203 81.2302 44.874 83.2602 44.86V44.377C83.2602 43.803 83.1972 43.355 83.0712 43.033C82.9592 42.711 82.7422 42.473 82.4202 42.319C82.1122 42.151 81.6572 42.067 81.0552 42.067C80.3692 42.067 79.7532 42.158 79.2072 42.34C78.6612 42.508 78.0942 42.732 77.5062 43.012L76.8552 41.668C77.0652 41.486 77.4152 41.269 77.9052 41.017C78.4092 40.765 79.0042 40.548 79.6902 40.366C80.3762 40.17 81.0832 40.072 81.8112 40.072C82.8892 40.072 83.7292 40.212 84.3312 40.492C84.9472 40.772 85.3882 41.22 85.6542 41.836C85.9202 42.452 86.0532 43.278 86.0532 44.314V50.74H87.1872V51.916C86.9072 51.986 86.5082 52.056 85.9902 52.126C85.4722 52.196 85.0172 52.231 84.6252 52.231C84.1492 52.231 83.8272 52.161 83.6592 52.021C83.5052 51.881 83.4282 51.594 83.4282 51.16V50.593C83.0502 51.013 82.5602 51.391 81.9582 51.727C81.3562 52.063 80.6772 52.231 79.9212 52.231C79.2772 52.231 78.6822 52.098 78.1362 51.832C77.6042 51.552 77.1772 51.153 76.8552 50.635C76.5332 50.103 76.3722 49.466 76.3722 48.724ZM81.2652 50.488C81.5592 50.488 81.8952 50.404 82.2732 50.236C82.6512 50.054 82.9802 49.837 83.2602 49.585V46.141C82.0002 46.141 81.0552 46.358 80.4252 46.792C79.8092 47.212 79.5012 47.758 79.5012 48.43C79.5012 49.102 79.6552 49.613 79.9632 49.963C80.2852 50.313 80.7192 50.488 81.2652 50.488ZM92.0257 52.189C91.1437 52.189 90.4927 51.986 90.0727 51.58C89.6527 51.174 89.4427 50.53 89.4427 49.648V41.941H88.0777V40.849C88.1897 40.807 88.3927 40.737 88.6867 40.639C88.9807 40.527 89.2047 40.436 89.3587 40.366C89.5967 40.184 89.7997 39.869 89.9677 39.421C90.0937 39.127 90.3247 38.399 90.6607 37.237H92.3407L92.4247 40.324H95.6377V41.941H92.4457V47.842C92.4457 48.626 92.4667 49.179 92.5087 49.501C92.5507 49.823 92.6417 50.033 92.7817 50.131C92.9217 50.215 93.1667 50.257 93.5167 50.257C93.8667 50.257 94.2307 50.222 94.6087 50.152C94.9867 50.068 95.3017 49.97 95.5537 49.858L95.9527 51.034C95.5607 51.328 94.9867 51.594 94.2307 51.832C93.4747 52.07 92.7397 52.189 92.0257 52.189ZM102.362 52.231C100.514 52.231 99.135 51.692 98.225 50.614C97.329 49.522 96.881 48.038 96.881 46.162C96.881 44.902 97.112 43.81 97.574 42.886C98.05 41.962 98.715 41.255 99.569 40.765C100.423 40.275 101.41 40.03 102.53 40.03C103.93 40.03 105.008 40.401 105.764 41.143C106.52 41.871 106.912 42.914 106.94 44.272C106.94 45.196 106.884 45.882 106.772 46.33H99.947C100.003 47.604 100.304 48.598 100.85 49.312C101.396 50.012 102.173 50.362 103.181 50.362C103.727 50.362 104.287 50.271 104.861 50.089C105.449 49.907 105.911 49.69 106.247 49.438L106.772 50.593C106.394 50.999 105.778 51.377 104.924 51.727C104.084 52.063 103.23 52.231 102.362 52.231ZM104 45.07C104.028 44.678 104.042 44.377 104.042 44.167C104.042 42.305 103.419 41.374 102.173 41.374C101.487 41.374 100.955 41.647 100.577 42.193C100.199 42.739 99.989 43.698 99.947 45.07H104Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M154.226 38.6363C154.025 38.4468 153.708 38.456 153.519 38.6569C153.329 38.8578 153.339 39.1742 153.539 39.3637L156.864 42.5L129.5 42.5C129.224 42.5 129 42.7239 129 43C129 43.2761 129.224 43.5 129.5 43.5L156.864 43.5L153.539 46.6363C153.339 46.8258 153.329 47.1422 153.519 47.3431C153.708 47.544 154.025 47.5532 154.226 47.3637L158.466 43.3637C158.566 43.2692 158.623 43.1377 158.623 43C158.623 42.8623 158.566 42.7308 158.466 42.6363L154.226 38.6363Z"
        fill="white"
      />
      <path
        opacity="0.2"
        d="M168.225 43C168.225 50.1526 162.069 56 154.413 56C146.757 56 140.602 50.1526 140.602 43C140.602 35.8474 146.757 30 154.413 30C162.069 30 168.225 35.8474 168.225 43Z"
        stroke="white"
      />
    </svg>
  </Donate>
);

export default DonateBtn;
