import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`

&:hover {
  cursor: pointer;
    svg {
      path

      :nth-child(3) {
        transform: translateX(1rem);
        transition: all 0.4s;
      }
      
      circle {
        stroke-width: 0;
      }
    }
    

`;

const ButtonPrimary = () => {
  return (
    <Wrapper>
      <svg
        width="271"
        height="96"
        viewBox="0 0 271 96"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.254294 36.7296C0.9939 19.1292 14.0664 5.26846 31.6038 3.60718C87.8423 -1.72019 189.237 -0.823561 239.962 4.18009C255.185 5.68169 267.253 16.7208 269.566 31.8416C270.404 37.3242 271 43.1609 271 48.6753C271 53.5569 270.533 58.5355 269.844 63.2237C267.613 78.4128 255.064 89.1726 239.815 90.9445C219.273 93.3313 185.246 96 135.789 96C88.5768 96 54.1972 93.568 32.2546 91.2709C14.4521 89.4072 0.756854 75.711 0.153876 57.8214C0.0565146 54.9328 0 51.8771 0 48.6752C0 44.4934 0.0963994 40.487 0.254294 36.7296Z"
          fill="#6CA448"
        />
        <path
          d="M52.5693 41.972L50.9523 41.699V40.397H57.6723V41.699L55.6563 41.972V54.509L60.1503 54.32L61.4733 50.393L63.1743 50.624L62.5233 56H50.9103V54.74L52.5693 54.53V41.972ZM69.6989 56.231C67.8509 56.231 66.4719 55.692 65.5619 54.614C64.6659 53.522 64.2179 52.038 64.2179 50.162C64.2179 48.902 64.4489 47.81 64.9109 46.886C65.3869 45.962 66.0519 45.255 66.9059 44.765C67.7599 44.275 68.7469 44.03 69.8669 44.03C71.2669 44.03 72.3449 44.401 73.1009 45.143C73.8569 45.871 74.2489 46.914 74.2769 48.272C74.2769 49.196 74.2209 49.882 74.1089 50.33H67.2839C67.3399 51.604 67.6409 52.598 68.1869 53.312C68.7329 54.012 69.5099 54.362 70.5179 54.362C71.0639 54.362 71.6239 54.271 72.1979 54.089C72.7859 53.907 73.2479 53.69 73.5839 53.438L74.1089 54.593C73.7309 54.999 73.1149 55.377 72.2609 55.727C71.4209 56.063 70.5669 56.231 69.6989 56.231ZM71.3369 49.07C71.3649 48.678 71.3789 48.377 71.3789 48.167C71.3789 46.305 70.7559 45.374 69.5099 45.374C68.8239 45.374 68.2919 45.647 67.9139 46.193C67.5359 46.739 67.3259 47.698 67.2839 49.07H71.3369ZM79.4808 56.189C78.5988 56.189 77.9478 55.986 77.5278 55.58C77.1078 55.174 76.8978 54.53 76.8978 53.648V45.941H75.5328V44.849C75.6448 44.807 75.8478 44.737 76.1418 44.639C76.4358 44.527 76.6598 44.436 76.8138 44.366C77.0518 44.184 77.2548 43.869 77.4228 43.421C77.5488 43.127 77.7798 42.399 78.1158 41.237H79.7958L79.8798 44.324H83.0928V45.941H79.9008V51.842C79.9008 52.626 79.9218 53.179 79.9638 53.501C80.0058 53.823 80.0968 54.033 80.2368 54.131C80.3768 54.215 80.6218 54.257 80.9718 54.257C81.3218 54.257 81.6858 54.222 82.0638 54.152C82.4418 54.068 82.7568 53.97 83.0088 53.858L83.4078 55.034C83.0158 55.328 82.4418 55.594 81.6858 55.832C80.9298 56.07 80.1948 56.189 79.4808 56.189ZM98.9795 56.21C98.5175 56.21 98.1815 56.112 97.9715 55.916C97.7615 55.72 97.6565 55.426 97.6565 55.034V54.467C97.2785 54.929 96.7465 55.342 96.0605 55.706C95.3745 56.056 94.6885 56.231 94.0025 56.231C92.6585 56.231 91.6995 55.888 91.1255 55.202C90.5515 54.502 90.2645 53.354 90.2645 51.758V45.836L89.2145 45.542V44.345L92.7845 44.072H92.8055L93.2255 44.366V51.758C93.2255 52.78 93.3515 53.494 93.6035 53.9C93.8555 54.306 94.3245 54.509 95.0105 54.509C95.8365 54.509 96.6065 54.187 97.3205 53.543V45.836L95.9135 45.521V44.345L99.7145 44.072H99.7565L100.26 44.366V54.698H101.436L101.415 55.895C101.359 55.909 101.1 55.965 100.638 56.063C100.176 56.161 99.6235 56.21 98.9795 56.21ZM105.252 54.278C105.364 54.446 105.616 54.607 106.008 54.761C106.414 54.901 106.82 54.971 107.226 54.971C107.884 54.971 108.374 54.838 108.696 54.572C109.032 54.292 109.2 53.928 109.2 53.48C109.2 53.018 108.997 52.647 108.591 52.367C108.185 52.073 107.499 51.716 106.533 51.296L105.945 51.044C104.979 50.638 104.258 50.148 103.782 49.574C103.306 49 103.068 48.258 103.068 47.348C103.068 46.718 103.257 46.158 103.635 45.668C104.013 45.164 104.545 44.772 105.231 44.492C105.917 44.212 106.708 44.072 107.604 44.072C108.262 44.072 108.822 44.114 109.284 44.198C109.76 44.282 110.257 44.394 110.775 44.534C111.055 44.632 111.265 44.688 111.405 44.702V47.453H109.746L109.263 45.857C109.179 45.717 108.99 45.591 108.696 45.479C108.402 45.367 108.066 45.311 107.688 45.311C107.114 45.311 106.652 45.437 106.302 45.689C105.966 45.927 105.798 46.263 105.798 46.697C105.798 47.089 105.917 47.418 106.155 47.684C106.393 47.936 106.652 48.132 106.932 48.272C107.212 48.412 107.73 48.643 108.486 48.965C109.242 49.287 109.865 49.595 110.355 49.889C110.859 50.183 111.272 50.568 111.594 51.044C111.93 51.506 112.098 52.073 112.098 52.745C112.098 53.781 111.692 54.621 110.88 55.265C110.068 55.909 108.899 56.231 107.373 56.231C106.659 56.231 106.015 56.168 105.441 56.042C104.881 55.916 104.23 55.748 103.488 55.538L103.026 55.391V52.619H104.769L105.252 54.278ZM119.781 40.649L118.185 40.376V39.242L122.091 38.78H122.154L122.7 39.179L122.721 43.862L122.574 45.689C123.008 45.297 123.596 44.933 124.338 44.597C125.094 44.261 125.885 44.093 126.711 44.093C127.593 44.093 128.279 44.261 128.769 44.597C129.259 44.919 129.602 45.416 129.798 46.088C129.994 46.76 130.092 47.656 130.092 48.776V54.551L131.436 54.74V56H125.913V54.74L127.131 54.551V48.776C127.131 48.048 127.082 47.481 126.984 47.075C126.886 46.669 126.704 46.368 126.438 46.172C126.186 45.976 125.808 45.878 125.304 45.878C124.87 45.878 124.422 45.983 123.96 46.193C123.512 46.389 123.113 46.627 122.763 46.907V54.551L124.044 54.74V56H118.605V54.74L119.781 54.572V40.649ZM138.154 56.231C136.306 56.231 134.927 55.692 134.017 54.614C133.121 53.522 132.673 52.038 132.673 50.162C132.673 48.902 132.904 47.81 133.366 46.886C133.842 45.962 134.507 45.255 135.361 44.765C136.215 44.275 137.202 44.03 138.322 44.03C139.722 44.03 140.8 44.401 141.556 45.143C142.312 45.871 142.704 46.914 142.732 48.272C142.732 49.196 142.676 49.882 142.564 50.33H135.739C135.795 51.604 136.096 52.598 136.642 53.312C137.188 54.012 137.965 54.362 138.973 54.362C139.519 54.362 140.079 54.271 140.653 54.089C141.241 53.907 141.703 53.69 142.039 53.438L142.564 54.593C142.186 54.999 141.57 55.377 140.716 55.727C139.876 56.063 139.022 56.231 138.154 56.231ZM139.792 49.07C139.82 48.678 139.834 48.377 139.834 48.167C139.834 46.305 139.211 45.374 137.965 45.374C137.279 45.374 136.747 45.647 136.369 46.193C135.991 46.739 135.781 47.698 135.739 49.07H139.792ZM145.626 40.649L144.072 40.376V39.242L147.957 38.78H147.999L148.566 39.179V54.572L150.099 54.74V56H144.156V54.74L145.626 54.551V40.649ZM163.158 49.784C163.158 50.96 162.913 52.038 162.423 53.018C161.947 53.998 161.24 54.782 160.302 55.37C159.378 55.944 158.272 56.231 156.984 56.231C156.704 56.231 156.41 56.203 156.102 56.147C155.808 56.105 155.57 56.049 155.388 55.979L155.451 57.722V59.633L157.404 59.885V61.082H151.167V59.885L152.532 59.633V46.319L151.167 45.941V44.492L154.632 44.051H154.674L155.199 44.471V45.647C155.549 45.213 156.025 44.835 156.627 44.513C157.229 44.191 157.887 44.03 158.601 44.03C159.931 44.03 161.023 44.506 161.877 45.458C162.731 46.396 163.158 47.838 163.158 49.784ZM157.509 45.773C157.089 45.773 156.69 45.864 156.312 46.046C155.934 46.228 155.647 46.431 155.451 46.655V54.446C155.549 54.586 155.745 54.705 156.039 54.803C156.347 54.901 156.683 54.95 157.047 54.95C157.957 54.95 158.678 54.558 159.21 53.774C159.756 52.976 160.029 51.73 160.029 50.036C160.029 48.608 159.798 47.544 159.336 46.844C158.874 46.13 158.265 45.773 157.509 45.773Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M207.854 43.6464C207.658 43.4512 207.342 43.4512 207.146 43.6464C206.951 43.8417 206.951 44.1583 207.146 44.3536L210.293 47.5L184.5 47.5C184.224 47.5 184 47.7239 184 48C184 48.2761 184.224 48.5 184.5 48.5L210.293 48.5L207.146 51.6464C206.951 51.8417 206.951 52.1583 207.146 52.3536C207.342 52.5488 207.658 52.5488 207.854 52.3536L211.854 48.3536C212.049 48.1583 212.049 47.8417 211.854 47.6464L207.854 43.6464Z"
          fill="white"
        />
        <circle opacity="0.2" cx="208" cy="48" r="13" stroke="white" />
      </svg>
    </Wrapper>
  );
};

export default ButtonPrimary;
