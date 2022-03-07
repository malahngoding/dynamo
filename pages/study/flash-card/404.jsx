import { PrimaryButton } from '@/components/design/button'
import { LayoutWrapper } from '@/components/LayoutWrapper'
import Link from '@/components/Link'
import { PageSeo } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { signIn } from 'next-auth/react'

export default function ForbidenAccess() {
  return (
    <>
      <PageSeo
        title={siteMetadata.titleHandler('Halaman tidak ditemukan')}
        description={siteMetadata.description}
      />

      <LayoutWrapper>
        <div className="flex flex-col items-center justify-center md:justify-center md:items-center md:flex-row md:space-x-6 mx-4 my-24">
          <div className="pt-6 pb-8 space-x-2 md:space-y-5">
            <h1 className="text-6xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-black-100 md:text-8xl md:leading-14 md:border-r-2 md:px-6">
              <svg width="309" height="330" viewBox="0 0 309 330" fill="none">
                <circle cx="154.5" cy="154.5" r="154.5" fill="#FFF4CC" />
                <g clipPath="url(#clip0)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M236.032 222.605C235.238 220.291 236.397 217.983 237.04 215.744C239.324 207.981 241.818 200.217 245.347 192.977C246.683 190.555 244.484 187.584 241.936 188.267C237.575 188.916 233.077 188.399 228.707 188.113C227.109 183.723 222.845 181.903 219.488 179.375C215.679 176.85 211.974 173.951 208.012 171.738C207.792 169.647 205.404 169.129 203.944 170.624C199.933 167.975 195.124 168.467 190.824 166.732C187.558 161.125 187.313 155.23 186.448 149.821C186.071 147.463 186.471 145.188 184.954 143.086C179.857 135.474 159.717 132.174 152.292 136.685C148.295 134.038 148.199 138.832 147.564 141.79C146.858 143.27 146.476 144.947 146.594 146.713C142.301 156.235 132.479 160.539 123.682 164.026C122.578 162.899 121.001 163.041 119.951 163.974C112.326 165.734 104.926 168.828 98.538 173.659C91.2801 175.912 86.1687 182.18 82.4726 188.901C82.0653 189.609 81.9693 190.332 82.0883 190.995C70.7223 208.685 65.2976 229.864 64.5356 251.254C57.2264 255.911 68.0097 297.753 70.5199 306.439C70.5224 306.438 70.5249 306.437 70.5275 306.436C72.156 309.497 74.0051 318.232 78.0807 317.557C80.8764 320.913 85.3317 320.253 89.1256 320.511C88.5077 323.028 88.8113 325.907 89.5468 328.394C90.4166 331.355 94.6852 331.455 95.2906 328.227C133.071 336.021 171.836 329.803 210.042 330.972C221.089 331.056 232.134 331.419 243.154 332.254C244.706 332.372 246.279 330.688 246.173 329.048C243.804 302.284 241.579 267.075 238.93 240.573C238.301 234.529 237.804 228.419 236.032 222.605Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M148.187 138.337C148.295 138.023 148.737 138.064 148.745 138.417C148.919 145.942 147.155 155.138 141.484 160.221C138.572 162.831 134.723 164.025 131.189 165.397L130.79 165.553L124.545 168.023C122.889 168.678 121.102 169.686 119.639 168.761C120.823 171.878 121.817 175.081 123.259 178.085C125.054 181.824 127.224 185.246 129.879 188.358C140.401 200.687 157.052 204.447 171.995 200.835C179.69 198.975 187.177 195.449 192.427 189.019C196.417 184.132 198.709 177.572 199.249 171.101C199.091 171.128 198.926 171.127 198.756 171.087C196.865 170.65 194.956 169.573 193.293 168.518L193.132 168.416C191.532 167.393 189.863 166.22 188.715 164.631C187.574 163.052 186.376 157.902 186.376 157.902C186.05 155.967 185.744 152.111 185.797 150.155C185.801 149.971 186.573 149.862 186.655 150.053C187.368 151.714 187.598 155.363 188.148 157.092L188.259 157.437C188.847 159.242 189.35 161.44 190.568 162.899C192.855 165.639 196.305 166.799 199.385 168.174C199.606 165.077 204.264 165.149 204.205 168.379C204.202 168.554 204.195 168.728 204.189 168.903C204.556 169.117 204.91 169.363 205.24 169.599L205.562 169.832C206.782 170.713 208.011 171.55 209.31 172.297C211.824 173.744 214.486 174.892 217.063 176.205C219.669 177.535 222.107 179.118 224.383 181.013C225.452 181.903 226.477 182.851 227.449 183.858L227.713 184.134C228.639 185.113 229.843 186.207 230.37 187.493C230.486 187.777 231.068 188.436 231.384 188.458C236.279 188.799 241.164 189.28 246.029 190.002C247.288 190.188 247.786 190.877 247.32 191.992C245.721 195.822 239.458 211.118 237.793 215.223C237.987 218.239 237.724 221.789 237.9 224.806C238.156 229.208 238.492 233.608 238.894 237.998C240.334 253.701 242.517 269.327 244.49 284.961C245.477 292.785 246.378 300.621 247.266 308.459C247.715 312.419 248.095 316.384 248.389 320.362C248.511 322.019 248.621 323.678 248.719 325.337L248.803 326.809C248.92 328.661 249.186 330.43 248.107 332.019C247.617 332.74 246.5 333.146 245.856 332.327C245.047 331.297 244.747 330.528 244.669 329.175C244.61 328.14 244.596 327.099 244.552 326.063C244.456 323.816 244.335 321.57 244.193 319.326C243.911 314.839 243.589 310.353 243.216 305.874C241.908 290.167 239.422 274.578 237.768 258.91C236.935 251.011 236.342 243.097 236.029 235.154C235.872 231.188 235.815 227.222 235.852 223.252C235.866 221.769 235.932 220.293 236.028 218.82C233.55 224.797 230.945 230.717 228.221 236.557L227.576 237.941C225.85 241.632 224.078 245.338 222.003 248.818L221.647 249.411C220.806 250.825 219.658 253.054 218.126 253.5C217.059 253.811 215.754 253.592 214.66 253.57C213.574 253.548 212.486 253.543 211.401 253.496C210.183 253.444 209.022 253.274 207.845 252.937C207.65 252.882 207.465 252.821 207.296 252.744C206.111 254.803 204.097 256.372 202.038 257.286C200.388 258.018 198.659 258.52 196.928 258.984L196.316 259.147C194.46 259.638 192.336 259.872 191.289 261.775L191.046 262.216C190.268 263.621 189.521 264.854 188.233 265.86C186.846 266.944 185.203 267.626 183.566 268.157C181.891 268.7 180.176 269.115 178.474 269.561L178.011 269.683C176.887 269.982 175.754 270.255 174.637 270.58C174.161 270.719 173.676 270.861 173.209 271.032C172.662 271.232 172.264 271.543 171.832 271.882C171.444 273.322 169.786 274.104 168.422 274.003C167.706 273.951 167.063 273.693 166.479 273.314C165.458 274.237 164.335 275.063 163.295 275.917C161.838 277.114 160.376 278.302 158.905 279.479C155.874 281.905 152.819 284.299 149.733 286.646C144.254 290.812 138.657 294.787 132.964 298.615C130.591 300.211 128.201 301.805 125.788 303.36L126.046 303.462L126.557 303.667C127.764 304.145 129.109 304.918 129.343 306.414C129.529 307.6 128.905 308.418 127.802 308.563C126.491 308.735 125.47 307.751 124.654 306.812C124.294 306.398 123.891 306.014 123.546 305.587C123.405 305.413 123.297 305.213 123.201 305.002C120.82 306.492 118.414 307.932 115.969 309.279L115.357 309.613C109.294 312.905 103.393 316.511 97.279 319.709C95.6841 320.544 93.7395 321.446 91.7126 322.062C92.2504 324.276 92.2421 326.706 92.2557 328.953C92.2686 331.142 88.9916 331.132 89.0608 328.953L89.0942 327.9C89.1539 326.131 89.2513 324.294 89.6467 322.572C83.6746 323.624 77.7086 321.338 76.5978 320.652C75.3717 319.895 74.2589 318.684 73.3327 317.56C71.3507 315.154 69.9753 312.271 68.7551 309.371C66.1413 303.159 64.2894 296.519 62.9355 289.879C57.9441 265.397 60.091 239.193 68.197 215.725C70.2222 209.861 72.6132 204.127 75.3531 198.6L75.6933 197.917C78.4274 192.451 81.4661 187.006 85.3261 182.355C89.3466 177.511 94.3062 173.743 99.7061 170.819C102.341 169.392 105.053 168.155 107.824 167.059C108.27 166.883 108.718 166.725 109.167 166.574C112.055 164.619 115.56 162.749 119.067 162.822C119.305 162.827 119.498 162.923 119.642 163.067C119.811 163.099 119.98 163.137 120.149 163.189C120.523 163.304 120.918 163.739 120.864 164.186L120.846 164.334C120.836 164.407 120.824 164.477 120.802 164.546C120.927 164.565 121.05 164.597 121.171 164.641C124.526 163.635 127.827 162.096 131.1 160.855L131.846 160.576C134.588 159.556 137.401 158.556 139.65 156.537C141.888 154.528 143.57 151.926 144.787 149.114C146.285 145.648 146.956 141.894 148.187 138.337ZM215.354 321.103C216.018 320.578 216.804 321.187 217.052 321.836C217.868 323.968 217.465 327.279 216.315 329.164C215.123 331.116 212.27 330.346 212.201 327.981C212.129 325.515 213.479 322.585 215.354 321.103ZM222.215 262.251C222.275 261.974 222.68 261.977 222.741 262.251C223.294 264.752 223.281 267.445 223.443 270.01L223.462 270.294C223.657 273.122 223.821 275.957 223.937 278.789C224.166 284.362 224.44 289.936 224.747 295.504C224.9 298.266 225.063 301.027 225.237 303.787C225.782 303.464 226.344 303.181 226.926 302.931C227.798 302.557 228.647 302.514 229.584 302.524C230.725 302.536 231.585 303.602 231.433 304.789C231.269 306.082 230.197 306.636 229.084 306.451C227.851 306.246 226.613 305.929 225.368 305.798C225.506 307.932 225.65 310.066 225.802 312.198C226.003 315.021 226.265 317.841 226.45 320.665C226.468 320.935 226.486 321.205 226.506 321.475C227.248 321.065 228.036 320.856 228.93 320.597L229.162 320.528C230.459 320.133 231.847 319.586 233.047 320.512C233.854 321.134 234.015 322.159 233.347 322.98C232.333 324.226 230.834 323.984 229.434 323.921L228.68 323.892C227.971 323.862 227.316 323.814 226.66 323.624C226.78 325.464 226.843 327.311 226.631 329.124C226.516 330.104 225.301 330.361 224.979 329.361C224.139 326.748 223.966 323.931 223.658 321.194C223.371 318.639 223.197 316.064 223.009 313.497L222.952 312.727C222.529 307.08 222.191 301.429 221.943 295.77C221.696 290.111 221.548 284.454 221.488 278.789C221.462 276.218 221.502 273.637 221.597 271.065L221.627 270.294C221.736 267.649 221.659 264.843 222.215 262.251ZM111.199 321.52C111.231 321.158 111.504 320.709 111.909 320.765C112.283 320.817 112.668 320.792 113.037 320.857C113.525 320.943 113.918 321.249 114.371 321.442C115.109 321.755 115.913 321.917 116.67 322.173C118.089 322.654 118.863 324.241 118.275 325.722C117.657 327.28 116.103 327.634 114.761 326.98C113.703 326.465 112.914 325.641 112.203 324.688L112.001 324.417C111.695 324.007 111.347 323.55 111.218 323.054C111.093 322.571 111.155 322.011 111.199 321.52ZM180.169 314.196C181.937 313.932 183.447 314.574 185.083 315.179L185.216 315.228C186.882 315.838 189.311 316.26 190.165 318.07C190.679 319.161 190.28 320.61 189.068 320.933C187.149 321.444 185.428 319.955 183.841 318.953L183.758 318.9C182.227 317.948 180.646 317.147 179.668 315.504C179.407 315.066 179.633 314.276 180.169 314.196ZM118.444 164.889C117.736 165.057 117.027 165.206 116.32 165.35C113.628 166.881 111.015 168.471 108.236 169.836C105.287 171.284 102.349 172.78 99.5479 174.532C93.889 178.072 89.224 182.674 85.3692 188.315C78.7106 198.059 73.7575 209.296 70.2127 220.699C69.302 223.628 68.4869 226.59 67.7659 229.577C69.0407 228.325 70.55 227.556 72.2424 226.897C72.9597 226.618 73.8525 227.09 74.2161 227.75C74.3795 228.046 74.4717 228.339 74.4548 228.686C74.4172 229.453 73.9473 230.324 73.1717 230.476C71.3635 230.829 69.6054 231.518 67.8619 232.124C67.5976 232.216 67.3705 232.182 67.1891 232.073C65.4583 239.858 64.3755 247.802 63.992 255.795C63.6676 262.561 63.8677 269.381 64.5735 276.138C65.116 275.879 65.6465 275.636 66.2412 275.489C67.0125 275.299 67.7712 275.067 68.5236 274.805C70.6948 274.049 71.6851 277.855 69.4659 278.435C68.64 278.651 67.8091 278.83 66.9676 278.961C66.2341 279.075 65.5854 279.025 64.8939 278.905C65.4222 283.121 66.1437 287.306 67.0628 291.431L67.2656 292.334C68.4595 297.603 69.851 302.922 71.8632 307.901C72.8503 310.344 74.1572 312.663 75.7708 314.7C76.5636 315.701 77.4436 316.56 78.4031 317.373C79.2019 318.051 81.9174 319.519 85.1334 319.519C88.3494 319.519 89.2201 319.196 90.8426 318.603C94.0514 317.431 97.098 315.558 100.107 313.891L100.418 313.719C101.749 312.988 103.075 312.247 104.397 311.498C104.23 310.067 104.522 308.865 105.224 307.543C105.984 306.113 107.865 306.825 108.005 308.288L108.009 308.344C108.03 308.673 108.082 309.01 108.147 309.345C116.987 304.203 125.64 298.701 134.155 292.968C139.64 289.275 145.067 285.472 150.415 281.557C153.088 279.6 155.738 277.608 158.361 275.577C159.736 274.513 161.104 273.44 162.466 272.358C163.033 271.908 163.589 271.434 164.157 270.981C164.019 270.798 163.885 270.615 163.754 270.433C161.632 267.483 160.254 263.965 159.568 260.337C159.154 258.147 158.954 255.874 158.893 253.642L158.866 252.671C158.824 251.036 158.813 249.324 159.097 247.74C158.711 247.965 158.316 248.186 157.923 248.423C156.511 249.272 155.099 250.119 153.684 250.962C150.85 252.65 148.008 254.318 145.13 255.919C139.989 258.779 134.798 261.499 129.466 263.937L126.872 265.124C122.37 267.18 117.831 269.199 113.15 270.728C110.509 271.589 107.849 272.326 105.171 272.984L106.254 274.331C106.988 275.245 107.001 276.555 106.062 277.324C105.14 278.08 103.902 277.765 103.287 276.761L102.167 274.931C101.927 274.54 101.791 274.174 101.714 273.788C100.481 274.062 99.2436 274.325 98.0033 274.58L95.6586 275.055C92.3106 275.741 89.0644 277.1 86.0718 278.838C85.0314 279.443 84.7416 278.268 85.8439 277.45C89.0669 275.058 92.8265 273.704 96.7056 272.568L96.8962 272.512C98.3193 272.098 99.7399 271.667 101.157 271.22C101.002 270.621 100.912 270 100.93 269.315C100.969 267.789 101.097 266.257 101.173 264.732C101.333 261.532 101.537 258.341 101.777 255.146C101.869 253.915 101.972 252.681 102.09 251.448C101.33 251.015 100.674 250.441 99.8266 250.158L99.6835 250.114C98.7771 249.855 99.083 248.614 99.8882 248.508C100.618 248.412 101.343 248.456 102.062 248.62C102.174 248.646 102.279 248.675 102.38 248.707C102.512 247.565 102.658 246.426 102.825 245.293C103.265 242.3 103.577 239.146 104.493 236.27C104.561 236.057 104.859 235.981 104.97 236.204C106.303 238.898 106.349 242.202 106.5 245.201L106.518 245.559C106.695 248.832 106.705 252.136 106.648 255.412C106.59 258.789 106.481 262.157 106.338 265.531C106.281 266.889 106.283 268.299 106.065 269.598C114 266.859 121.795 263.581 129.266 259.699C134.536 256.961 139.761 254.113 144.926 251.158C147.515 249.678 150.115 248.222 152.7 246.736C153.606 246.215 154.511 245.693 155.416 245.169L156.773 244.384C158.042 243.648 159.102 242.916 160.581 242.864C161.022 242.849 161.417 243.068 161.698 243.4C162.493 242.802 163.411 242.434 164.376 242.443C165.827 240.314 167.3 238.204 168.832 236.139L169.964 234.61C171.923 231.972 173.998 229.294 176.496 227.287C177.611 226.391 178.837 225.719 180.116 225.164C179.815 225.086 179.521 224.929 179.258 224.67C178.037 223.467 177.868 221.234 177.62 219.556C177.363 217.815 177.462 216.258 177.716 214.523C177.815 213.849 178.867 213.709 179.123 214.328C179.664 215.633 180.237 216.885 180.729 218.205L180.874 218.603C181.403 220.089 182.528 221.652 182.454 223.265C182.434 223.706 182.294 224.091 182.079 224.401C183.152 224.022 184.241 223.685 185.313 223.333C188.688 222.226 192.075 221.15 195.515 220.291C196.43 220.063 197.35 219.85 198.274 219.656C198.758 217.216 199.464 214.821 200.295 212.469C199.508 212.04 198.998 211.322 198.32 210.684C197.685 210.085 197.249 209.357 196.708 208.67C196.215 208.046 196.492 206.917 197.378 206.953L197.629 206.964C198.546 207.01 199.435 207.111 200.267 207.565L200.564 207.727C200.97 207.952 201.415 208.208 201.812 208.512C202.33 207.246 202.869 205.992 203.413 204.751L204.12 203.146C205.952 198.969 207.779 194.633 210.08 190.743C211.102 189.014 212.463 187.934 214.417 187.767C216.428 187.595 218.519 187.817 220.534 187.894C222.869 187.982 225.203 188.088 227.536 188.218C226.938 187.553 226.393 186.812 225.792 186.174C224.795 185.116 223.742 184.113 222.635 183.185C220.444 181.35 218.034 179.838 215.532 178.536C213.029 177.234 210.453 176.098 208.103 174.489C206.616 173.471 205.287 172.19 204.075 170.804C203.312 179.546 199.336 187.668 193.363 193.77C187.159 200.108 178.586 203.59 170.199 205.071C161.645 206.581 152.717 206.027 144.534 202.87C140.314 201.242 136.267 198.916 132.658 195.999C132.619 196.253 132.571 196.504 132.477 196.739C132.352 197.056 132.198 197.326 132.021 197.604L131.707 198.093C131.508 198.4 131.306 198.704 131.081 198.989C130.535 199.679 129.762 199.981 128.93 199.978C127.336 199.972 126.129 198.313 126.558 196.671C126.828 195.64 127.404 195.019 128.305 194.616C128.589 194.488 128.879 194.381 129.171 194.276L129.39 194.197C129.685 194.09 129.977 193.988 130.281 193.928C128.572 192.327 126.986 190.585 125.567 188.706C121.113 182.812 116.721 174.558 118.21 166.73C118.235 166.596 118.349 166.512 118.472 166.49C118.559 165.941 118.834 165.409 119.211 165.052C118.957 164.981 118.701 164.926 118.444 164.889ZM164.687 300.221C165.569 299.7 166.48 300.938 165.763 301.702L164.693 302.839C163.7 303.898 162.733 304.969 161.883 306.177L161.677 306.472C160.53 308.13 159.306 310.05 157.426 310.67C155.152 311.419 152.966 308.478 154.283 306.329C155.434 304.451 157.649 303.743 159.559 302.967C161.366 302.232 162.998 301.218 164.687 300.221ZM91.3198 291.555C91.8379 290.835 93.1891 291.215 92.8351 292.234C91.6853 295.544 91.2167 300.057 88.3128 302.256C87.376 302.965 85.9044 302.639 85.1331 301.82C84.2567 300.889 84.2216 299.579 84.7228 298.444C85.3341 297.059 86.8377 296.055 87.8916 295L87.9862 294.904C89.12 293.734 90.3463 292.909 91.3198 291.555ZM212.686 295.365C213.61 294.941 216.021 294.118 216.735 295.093C216.769 295.128 216.797 295.167 216.82 295.21C216.995 295.534 217.021 295.989 216.82 296.31C215.988 297.638 215.121 298.63 213.937 299.575L213.804 299.68C212.516 300.686 211.306 301.867 209.736 302.321C207.56 302.95 206.04 300.057 207.568 298.368C208.799 297.007 210.679 296.3 212.31 295.542L212.686 295.365ZM125.301 276.453C124.937 275.755 125.68 274.898 126.354 275.335C128.275 276.582 130.513 277.517 132.672 278.189C133.545 278.461 134.333 279.401 134.268 280.415L134.258 280.569C134.232 280.927 134.186 281.283 133.971 281.581C133.219 282.624 132.144 283.027 130.996 282.409C128.437 281.032 126.685 279.11 125.301 276.453ZM181.457 274.338C181.41 274.044 181.613 273.817 181.894 273.874C183.518 274.201 185.017 275.033 186.412 275.99C187.16 276.504 187.881 277.068 188.627 277.586C189.549 278.226 189.894 278.755 190.03 279.93C190.12 280.705 189.438 281.413 188.813 281.628C187.108 282.211 185.156 280.296 184.001 279.052L183.949 278.996C182.741 277.688 181.744 276.141 181.457 274.338ZM230.225 272.306C229.855 271.244 231.13 270.365 231.964 270.886C232.75 271.376 233.602 271.783 234.343 272.346C235.024 272.863 235.645 273.475 236.298 274.035L236.62 274.306C237.818 275.329 239.795 277.857 238.082 279.323C236.453 280.719 234.292 278.936 233.198 277.633L233.122 277.541C232.493 276.769 231.717 275.93 231.26 275.029C230.831 274.18 230.539 273.206 230.225 272.306ZM214.154 190.154C212.113 190.575 211.281 193.25 210.421 194.993C208.393 199.108 206.527 203.299 204.654 207.495C204.077 208.785 203.515 210.086 202.949 211.384C202.914 211.485 202.87 211.585 202.817 211.684C201.656 214.338 200.461 216.975 199.064 219.494C200.342 219.239 201.628 219.023 202.918 218.852C202.853 217.562 203.685 215.836 204.096 214.75L204.131 214.659C204.644 213.267 205.182 211.075 206.502 210.353C206.943 210.112 207.413 210.413 207.447 210.928C207.547 212.46 206.136 214.213 205.446 215.513C205.029 216.299 204.623 217.089 204.227 217.888C204.078 218.187 203.954 218.48 203.802 218.744C204.467 218.667 205.133 218.599 205.801 218.55L206.237 218.518C208.713 218.345 211.343 218.295 213.581 219.592C215.657 220.794 216.718 223.362 215.577 225.7C214.156 228.612 211.028 228.998 208.276 229.234C204.84 229.528 201.396 230.06 197.984 230.578C194.454 231.114 191.131 232.495 187.654 233.205C187.33 233.271 187.129 232.822 187.426 232.631C190.168 230.858 193.502 229.883 196.569 228.889L196.817 228.809C198.48 228.266 200.105 227.646 201.826 227.339C203.496 227.04 205.177 226.798 206.861 226.614L207.025 226.598C208.88 226.433 213.611 226.489 213.411 223.574C213.279 221.644 210.325 221.311 208.976 221.288C202.793 221.182 196.565 222.925 190.689 224.792L189.377 225.21C186.971 225.978 184.562 226.769 182.201 227.67C179.525 228.691 177.417 230.283 175.469 232.462C173.308 234.879 171.216 237.349 168.974 239.684C167.561 241.156 166.13 242.601 164.687 244.035C164.361 244.483 164.1 244.971 163.92 245.603C163.615 246.671 163.685 247.664 163.8 248.761C164.091 251.532 164.155 254.331 164.519 257.093C164.856 259.652 165.328 262.305 166.329 264.679C166.725 265.619 167.241 266.542 167.828 267.368L168.302 268.022C168.509 268.306 168.74 268.617 168.983 268.91C169.339 268.449 169.854 268.148 170.453 268.223C171.726 268.383 172.727 268.344 173.976 268.034C174.942 267.794 175.902 267.512 176.864 267.252C178.753 266.74 180.661 266.274 182.531 265.687L182.852 265.584C184.246 265.13 185.64 264.561 186.8 263.606C188.148 262.495 188.563 260.894 189.561 259.509C191.693 256.551 196.3 256.613 199.419 255.803C202.07 255.115 204.621 254.029 206.455 251.987L206.562 251.865C206.481 251.501 206.613 251.089 206.931 250.9L207.001 250.859C207.125 250.786 207.259 250.755 207.39 250.758C207.561 250.492 207.725 250.218 207.874 249.926C207.997 249.686 208.304 249.863 208.264 250.101C208.24 250.242 208.206 250.381 208.175 250.52C209.952 250.034 211.903 250.127 213.707 250.128L216.049 250.12C216.454 250.114 217.058 250.093 217.112 250.067L217.167 250.041C217.313 249.973 217.105 250.085 217.207 249.941C217.32 249.782 217.43 249.622 217.539 249.46C217.927 248.884 218.294 248.29 218.653 247.691C214.733 248.751 210.671 249.411 206.668 249.961C202.373 250.552 198.021 250.962 193.688 250.966C192.494 250.968 192.505 249.053 193.688 249.005C198.277 248.819 202.841 248.561 207.399 247.937C209.756 247.613 212.103 247.208 214.437 246.734C215.338 246.551 216.237 246.357 217.133 246.152L217.805 245.996C218.227 245.897 219.418 245.755 219.999 245.341C220.114 245.132 220.228 244.924 220.341 244.716C220.285 243.985 218.535 244.083 218.125 244.082C216.961 244.08 215.798 244.09 214.634 244.093C212.307 244.1 209.98 244.079 207.653 244.059C203.003 244.018 198.336 243.846 193.69 244.057C192.562 244.108 191.97 242.188 193.085 241.683C198.006 239.452 203.468 238.967 208.723 238.281C211.486 237.921 214.25 237.505 216.952 236.775L217.619 236.594C219.316 236.133 221.19 235.569 222.619 234.469C220.471 233.546 217.802 233.652 215.576 233.521L215.405 233.511C212.288 233.307 209.165 233.203 206.042 233.199C199.652 233.189 193.259 233.429 186.876 233.751C186.716 233.759 186.683 233.491 186.838 233.455C193.399 231.935 200.067 231.202 206.781 231.09C209.908 231.037 213.037 231.084 216.161 231.231L217.307 231.287C219.971 231.409 222.927 231.442 225.156 233.15C225.495 233.41 225.675 233.743 225.703 234.094C228.692 227.768 231.452 221.31 234.224 214.894C236.379 209.906 238.453 204.875 240.686 199.926L241.409 198.325C242.378 196.188 243.369 194.051 244.471 191.992C240.352 191.407 236.211 191.002 232.067 190.691C228.292 190.408 215.972 189.78 214.154 190.154ZM212.331 258.718C212.8 258.441 213.52 258.667 213.636 259.282C213.722 259.74 213.869 260.248 213.869 260.716C213.869 261.278 213.68 261.887 213.579 262.436C213.347 263.699 213.062 264.724 212.457 265.849C212.079 266.552 211.316 267.03 210.548 267.011C209.94 266.997 209.402 266.823 208.984 266.324C208.485 265.725 208.142 264.845 208.416 264.039C209.134 261.928 210.454 259.825 212.331 258.718ZM112.715 256.612C113.814 254.568 116.419 252.742 118.692 252.922C122.106 253.194 122.802 258.074 119.497 259.238C117.522 259.934 114.804 259.22 113.076 258.074C112.61 257.766 112.44 257.124 112.715 256.612ZM77.6337 249.63C77.3841 249.244 77.7967 248.804 78.1686 248.891C78.9935 249.083 79.8828 249.167 80.6907 249.428C81.5181 249.696 82.319 250.139 83.1385 250.444C84.8555 251.082 86.6894 251.403 88.351 252.174C89.0152 252.482 89.5377 253.503 89.4763 254.256L89.4606 254.432C89.4239 254.806 89.3629 255.132 89.166 255.474C88.6373 256.39 87.5896 256.864 86.6007 256.582C84.7663 256.059 82.9738 254.715 81.4097 253.598L81.1207 253.394C80.4373 252.916 79.7025 252.416 79.1519 251.801C78.5771 251.158 78.1047 250.357 77.6337 249.63ZM140.692 242.196C140.481 241.389 141.427 240.856 141.978 241.401C143.08 242.491 144.233 243.502 145.312 244.62L145.384 244.696C146.157 245.521 147.282 247.11 146.276 248.177C144.988 249.544 143.195 247.515 142.504 246.458C141.628 245.117 141.102 243.765 140.692 242.196ZM225.025 235.521C223.39 237.359 220.871 238.204 218.653 238.905C216.024 239.735 213.315 240.23 210.603 240.638C207.982 241.032 205.381 241.384 202.802 241.836C204.753 241.862 206.704 241.877 208.65 241.914C210.895 241.957 213.139 242.009 215.382 242.078C217.017 242.128 218.934 241.89 220.487 242.535C220.767 242.651 221.029 242.812 221.257 243.008C222.563 240.543 223.814 238.044 225.025 235.521ZM124.185 218.327C125.892 217.752 127.496 216.988 129.305 217.186C129.786 217.239 130.13 217.736 129.868 218.227C129.011 219.828 127.617 220.733 126.244 221.804L126.123 221.899C124.621 223.085 123.009 224.166 121.376 225.14C118.563 226.815 116.043 222.019 118.883 220.612C120.592 219.765 122.387 218.934 124.185 218.327ZM154.906 214.164C157.517 214.346 160.126 214.47 162.74 214.582C165.767 214.712 164.75 219.659 162.22 218.658C159.722 217.669 157.223 216.692 154.702 215.769C153.934 215.488 153.996 214.15 154.858 214.162L154.906 214.164ZM87.95 205.363C88.6266 205.313 89.309 205.47 89.9866 205.539L90.7076 205.614C92.1938 205.771 93.5874 205.964 95.0048 206.607C97.6201 207.792 96.2154 212.256 93.59 212.153C91.6494 212.078 89.9901 211.193 88.3515 210.162C86.919 209.262 86.0408 208.135 85.0735 206.721C84.7531 206.253 85.1995 205.728 85.6358 205.681C86.4044 205.598 87.1812 205.42 87.95 205.363ZM219.05 196.247C218.617 199.114 217.543 201.802 215.924 204.141C215.111 205.317 213.683 205.362 212.876 204.141C211.736 202.415 212.439 200.437 213.298 198.779L213.553 198.294C213.937 197.566 214.528 196.504 215.203 195.771L215.215 195.696C215.576 192.694 219.496 193.293 219.05 196.247ZM113.463 177.845C114.113 177.223 115.312 177.41 115.523 178.423C115.819 179.841 115.999 181.44 115.805 182.88C115.7 183.66 115.661 184.536 115.372 185.264C115.061 186.046 114.463 186.647 113.9 187.235C112.776 188.409 110.406 188.021 110.105 186.171L110.066 185.944C109.915 185.069 109.721 184.134 109.946 183.266C110.115 182.612 110.493 181.944 110.806 181.337L110.872 181.208C111.499 179.968 112.477 178.788 113.463 177.845ZM204.942 180.863L205.177 180.866C206.994 180.904 210.315 181.374 210.332 183.757C210.337 184.319 209.945 184.901 209.419 185.03C208.334 185.297 207.632 184.616 206.858 183.928C206.225 183.365 205.487 182.916 204.721 182.592C203.893 182.243 203.947 180.862 204.942 180.863Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M208.079 87.9793C207.141 80.0334 204.195 71.597 201.097 64.1893C194.131 48.5271 178.182 46.3707 163.885 43.1415C149.776 40.9606 134.837 38.9914 120.941 43.3427C113.129 45.3747 110.078 55.2534 111.311 63.049C112.014 67.9068 114.097 72.5044 115.873 77.0065C119.402 86.2521 121.642 96.1503 121.645 106.16C121.403 112.702 120.534 120.169 127.614 122.939C134.351 126.497 134.92 136.14 143.356 141.611C146.767 148.947 156.059 149.593 162.746 151.295C166.973 152.154 171.248 152.786 175.534 153.194C187.946 154.883 197.874 151.064 204.371 139.325C208.719 132.181 211.957 123.932 211.157 115.273C210.36 106.155 209.033 97.0849 208.079 87.9793Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M163.992 24.1067C164.701 23.2542 165.792 23.5466 166.454 24.2208C166.886 24.3557 167.303 24.5563 167.698 24.8219C168.59 24.7004 169.525 24.7004 170.4 24.7345C170.612 24.6081 170.839 24.4957 171.087 24.3991C172.855 23.7127 174.421 24.0614 175.713 24.9804C176.335 24.3554 177.12 23.9632 178.124 24.0225C179.019 24.0756 179.658 24.5231 180.205 25.1124C180.75 24.2774 181.632 23.6816 182.73 23.5987C184.266 23.4828 185.741 24.1365 186.965 25.1486C187.677 24.2806 188.649 23.7816 189.732 23.7768C190.444 23.6395 191.196 23.6936 191.876 23.9115C192.862 24.2277 193.728 24.8203 194.418 25.5894C195.509 24.4799 196.845 23.6816 198.385 23.798C200.378 23.9509 202.03 25.507 202.798 27.4223C204.147 27.9961 205.393 28.8146 206.434 29.9815C206.489 30.0429 206.542 30.1073 206.598 30.1719C207.159 30.3916 207.687 30.7031 208.152 31.1132C209.625 32.4145 209.953 34.2977 209.465 36.143C209.534 36.4383 209.592 36.7387 209.645 37.0389C211.024 37.2616 212.277 38.1068 212.99 39.483C213.965 41.3715 213.773 43.8606 212.717 45.6635C212.263 46.439 211.687 47.0925 211.039 47.6639C211.771 49.429 211.42 51.5353 210.24 52.9629C209.953 53.4552 209.6 53.8994 209.202 54.3015C209.641 56.1264 208.861 58.0093 207.305 58.9844L207.172 59.3381C207.149 59.3969 207.127 59.4554 207.103 59.5134C207.086 59.5885 207.065 59.6612 207.044 59.7344C207.007 60.382 206.806 61.0175 206.407 61.6162C205.591 62.8433 204.579 63.6434 204.043 65.0759L203.989 65.2263C203.759 65.9042 203.014 66.3825 202.379 66.1733C205.903 73.8563 207.75 82.4052 209.018 90.7833C209.651 94.963 210.139 99.1571 210.534 103.367L210.923 107.56C211.264 111.287 211.568 115.026 211.57 118.765C211.575 127.223 209.296 135.359 204.405 142.089C199.779 148.452 193.233 153.063 185.838 154.879C178.204 156.752 169.248 156.014 162.401 151.728C160.382 150.467 162.151 147.435 164.205 148.45C168.093 150.37 172.044 151.798 176.354 152.117C180.556 152.43 184.767 151.872 188.751 150.413C195.343 147.996 200.951 142.934 204.557 136.631C206.333 133.524 207.619 130.152 208.303 126.59C209.156 122.149 209.027 117.56 208.714 113.063L208.692 112.756C208.073 104.091 207.257 95.3731 205.939 86.7946C204.773 79.2087 202.98 71.7765 200.653 64.5088C199.742 63.6568 198.722 62.9518 197.631 62.4164C189.641 62.062 181.636 62.1656 173.656 62.7509C166.851 63.2534 160.078 64.1034 153.356 65.3424L152.636 65.4766C151.148 65.758 149.496 65.919 148.094 66.555C146.891 67.1022 146.404 68.1538 146.101 69.4465C145.338 72.7165 145.221 76.2952 145.093 79.6484C144.966 82.9262 145.252 86.2313 145.004 89.4983C144.794 92.2318 144.135 95.0297 142.228 97.007C141.23 98.0422 140.002 98.6082 138.85 99.3942C138.105 99.9014 137.789 100.424 137.885 101.363C138.092 103.418 139.651 106.007 137.9 107.766C137.592 108.075 137.059 108.115 136.755 107.766C136.033 106.932 135.035 106.296 134.178 105.623C133.82 105.344 134.118 104.802 134.525 104.995C135.06 105.25 135.606 105.551 136.164 105.814C134.931 104.735 133.178 104.207 131.718 103.893C130.983 103.737 130.209 103.692 129.444 103.764C128.878 104.051 128.3 104.317 127.721 104.577C126.986 104.904 126.243 105.202 125.495 105.484C122.901 107.729 121.663 111.38 122.203 114.95C122.499 116.922 123.355 119.065 124.97 120.216C126.882 121.579 129.444 120.994 131.511 122.005C133.446 122.952 134.623 124.865 135.505 126.845L135.872 127.669C136.691 129.494 137.532 131.27 138.65 132.931C139.944 134.854 141.528 136.582 143.256 138.066C144.094 138.784 144.988 139.43 145.911 140.018L146.164 140.177C147.099 140.759 147.768 141.314 147.831 142.545C147.851 142.974 147.596 143.366 147.268 143.589C145.853 144.541 144.446 143.35 143.268 142.518C141.998 141.622 140.783 140.614 139.658 139.514C137.521 137.427 135.672 134.949 134.249 132.258C133.165 130.209 132.549 127.325 130.836 125.737C129.79 124.768 128.312 124.76 127.006 124.583C125.791 124.417 124.641 124.149 123.56 123.513C119.162 120.919 117.919 114.639 118.962 109.787C119.139 108.968 119.386 108.171 119.692 107.404C118.055 107.694 116.216 105.897 116.88 104.083C116.931 103.946 116.989 103.818 117.044 103.686C115.966 102.932 115.114 101.79 114.71 100.295C114.503 99.5229 114.473 98.7423 114.581 97.9885C114.058 97.6159 113.626 97.1033 113.348 96.4729C112.479 96.0464 111.709 95.4082 111.249 94.4961C110.612 93.2378 110.693 92.0789 111.178 91.0354C111.11 90.9043 111.044 90.7701 110.981 90.633C109.2 89.4342 107.957 87.3684 108.098 85.0775C108.144 84.3184 108.321 83.6343 108.594 83.0176C108.571 82.9398 108.548 82.8591 108.528 82.7813C107.037 81.9765 105.804 80.6543 105.365 78.8892C104.925 77.1131 105.443 75.3427 106.479 73.9799C104.963 72.8026 104.051 71.1582 104.604 68.6712C104.829 67.6602 105.281 66.7398 105.893 65.9646C105.89 65.9407 105.885 65.9165 105.88 65.8921L105.738 65.7753C103.867 64.2074 102.791 62.2093 103.94 59.7518C104.455 58.6469 105.19 57.8768 106.055 57.3698L106.097 57.2249C105.478 55.8166 105.269 54.2527 105.696 52.6083C106.044 51.2539 106.871 50.1752 107.927 49.4593C107.856 48.8528 107.866 48.2065 107.98 47.5061C108.169 46.3234 108.722 45.2906 109.531 44.5583C109.561 44.4024 109.599 44.2498 109.642 44.0966C109.915 43.1607 110.425 42.144 111.016 41.39C111.504 40.7649 112.05 40.5369 112.717 40.5128C112.676 39.9363 112.704 39.3513 112.815 38.7584C113.156 36.9292 114.253 35.2094 115.877 34.4288C116.544 34.1096 117.246 34.016 117.924 34.0935C118.5 32.8059 119.624 31.8726 121.006 31.6715C121.544 31.591 122.044 31.5961 122.504 31.6688C122.764 31.5397 123.035 31.4247 123.317 31.3198C123.504 31.25 123.694 31.1857 123.883 31.1215C124.523 30.2792 125.364 29.6056 126.347 29.2009C127.481 28.7314 128.636 28.7794 129.659 29.1738L129.985 29.1013C130.495 28.1625 131.308 27.4355 132.559 27.1055C133.979 26.7327 135.437 27.2531 136.553 28.2003C136.558 28.2003 136.563 28.2003 136.571 28.1973C137.155 26.8105 138.153 25.8448 139.828 25.9118C140.871 25.9547 141.813 26.5049 142.541 27.2882C142.945 27.2343 143.349 27.186 143.756 27.138C144.186 26.6039 144.663 26.1052 145.191 25.6572C146.055 24.922 147.179 24.9812 147.816 26.0164C147.955 26.2418 148.084 26.4698 148.213 26.6978L148.796 26.6549C149.483 25.6704 150.421 25.0051 151.704 24.9517C152.881 24.9005 153.72 25.5124 154.359 26.3678C154.88 26.3544 155.403 26.344 155.926 26.3357C156.535 25.5872 157.252 24.9273 158.071 24.3801C158.697 23.9616 159.622 24.1041 160.13 24.662C160.473 25.0413 160.792 25.4373 161.089 25.8472C161.854 24.9362 162.888 24.3361 163.992 24.1067ZM126.809 109.29C127.989 108.577 129.575 109.349 130.717 109.955C132.109 110.693 133.491 111.806 134.343 113.201C135.502 115.1 132.776 116.635 131.556 114.931C130.806 113.883 130.207 112.826 129.297 111.908C128.466 111.066 127.261 110.503 126.784 109.392C126.766 109.355 126.771 109.312 126.809 109.29ZM127.639 63.1907L127.661 63.1238C127.996 62.1492 126.532 61.7291 126.199 62.6956C125.695 64.1606 126.276 65.7532 127.639 66.3857C128.017 66.5611 128.448 66.5002 128.676 66.0971C128.867 65.7577 128.778 65.1697 128.404 64.9962C127.637 64.6402 127.38 64.0118 127.639 63.1907ZM115.022 60.4657C115.755 59.779 114.68 58.644 113.95 59.3278C113.27 59.9657 112.765 60.8321 112.896 61.8287C113.03 62.8443 113.751 63.5613 114.54 64.0681C115.377 64.6054 116.14 63.2142 115.305 62.6782L115.212 62.6174C114.861 62.3864 114.451 62.0688 114.392 61.6144C114.329 61.1315 114.714 60.7546 115.022 60.4657ZM119.184 48.3483L119.236 48.3077C120.023 47.7111 119.267 46.3146 118.471 46.9179C117.741 47.4713 117.155 48.1902 117.093 49.1817C117.034 50.1453 117.495 50.9806 118.099 51.6585C118.771 52.4125 119.842 51.273 119.171 50.5205C118.518 49.7872 118.39 48.987 119.184 48.3483Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M191.065 127.344C191.24 127.294 191.395 127.544 191.249 127.681C190.655 128.241 190.277 129.285 189.843 129.997C189.43 130.674 189.032 131.344 188.669 132.053C188.262 132.847 187.869 133.638 187.552 134.479L187.49 134.648C187.584 134.888 187.659 135.125 187.713 135.28L187.729 135.324C188.27 136.791 187.134 138.422 185.853 138.832C183.662 139.534 181.782 137.623 181.729 135.35C181.688 133.563 182.829 131.97 183.989 130.788C185.003 129.755 186.139 128.875 187.41 128.23C187.97 127.946 188.553 127.708 189.161 127.571C189.784 127.43 190.455 127.519 191.065 127.344ZM186.936 133.823C187.096 133.903 187.234 134.1 187.349 134.329C187.291 134.135 187.172 133.941 186.936 133.823ZM188.307 108.984C190.214 110.216 193.121 113.087 191.069 116.139C188.653 118.831 185.175 115.745 183.461 114.349C181.872 113.268 180.086 116.049 181.561 117.312C193.946 127.049 198.972 109.306 189.272 107.537C188.204 107.342 187.807 108.603 188.307 108.984ZM172.624 97.1613L172.961 97.1312C174.423 96.9944 175.904 96.7859 177.346 97.1371C179.282 97.6092 179.141 100.601 177.346 101.152C175.763 101.636 174.01 101.426 172.377 101.443C172.12 101.446 171.864 101.453 171.607 101.457C171.557 102.106 171.356 102.665 171.05 103.223C170.83 103.624 170.549 104.005 170.274 104.361C169.618 105.207 168.071 105.188 167.409 104.361C166.919 103.748 166.529 103.044 166.523 102.216C166.522 102.003 166.546 101.778 166.594 101.557L165.702 101.573C163.521 101.608 161.322 101.593 159.18 101.225C158.418 101.392 157.795 99.9323 158.847 99.4953C161.706 98.308 164.9 97.9585 167.934 97.602C169.493 97.4185 171.061 97.2922 172.624 97.1613ZM196.982 95.9343L197.059 95.9261C198.951 95.7204 201.037 95.3641 202.933 95.5691C205.763 95.8746 205.759 99.9375 202.933 100.241C201.896 100.353 200.803 100.299 199.713 100.192C200.27 101.447 199.609 102.946 198.267 103.137C197.019 103.315 195.726 102.028 196.136 100.648L196.155 100.587C196.235 100.347 196.306 100.079 196.391 99.8152L195.94 99.7748C194.591 99.6481 192.718 99.3895 192.221 98.2583C192.072 97.9173 192.106 97.6008 192.337 97.3095C193.283 96.1141 195.614 96.0747 196.982 95.9343ZM176.862 86.6319C178.231 86.1037 179.655 87.3398 179.832 88.7328C180.037 90.3381 178.946 91.395 177.564 91.5867L177.495 91.5956C174.444 91.9524 171.416 92.6048 168.361 92.9736C166.974 93.1409 165.576 93.251 164.179 93.2906L163.181 93.3144C161.958 93.3473 160.646 93.3769 159.516 92.9296L159.521 92.9216C159.221 92.8293 159.083 92.3701 159.417 92.119C160.619 91.2163 162.24 90.8751 163.639 90.4461C165.046 90.0145 166.464 89.6167 167.885 89.243C170.87 88.4592 173.97 87.7473 176.862 86.6319ZM189.491 87.0071C189.854 84.9762 192.564 84.7584 193.559 86.2362C194.202 86.4706 195.145 86.7153 195.73 86.8993C196.748 87.2199 197.767 87.5385 198.788 87.8473C200.902 88.4868 202.966 89.2975 205.045 90.0531C205.259 90.1312 205.2 90.4198 204.994 90.4485C202.093 90.8495 199.24 91.0361 196.32 90.9075L195.722 90.8789C193.15 90.7725 188.783 90.9755 189.491 87.0071Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M193.658 139.013C191.305 136.787 188.667 132.313 185.287 135.853C184.451 136.854 184.113 139.096 182.834 139.536C181.137 140.121 179.454 138.214 178.876 136.749C176.508 128.611 186.294 126.379 191.869 127.694C194.592 128.881 196.598 133.661 196.72 136.156C196.798 137.833 195.461 140.298 193.658 139.013ZM211.408 126.47C211.385 126.362 211.353 126.264 211.314 126.175C210.274 125.758 209.45 126.183 208.942 126.979C208.958 127.177 209.014 127.377 209.049 127.573C208.656 128.452 208.302 129.538 207.77 130.297C207.665 130.306 207.556 130.294 207.451 130.262C198.631 131.24 202.937 121.441 193.991 119.007C187.076 117.796 174.576 119.183 171.314 126.826C168.741 139.034 155.659 130.527 151.363 124.179C146.78 118.401 143.817 111.34 140.959 104.489C140.355 103.039 138.471 104.076 138.676 105.467C136.035 111.093 136.123 117.85 135.469 124.013C134.356 136.308 133.272 153.551 144.031 161.058C158.049 177.882 193.055 183.819 209.223 168.361C214.82 155.584 214.13 139.997 211.408 126.47Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="287" height="330" fill="white" transform="translate(11)" />
                  </clipPath>
                </defs>
              </svg>
            </h1>
          </div>
          <div className="max-w-md flex flex-col justify-center">
            <p className="mb-4 text-xl font-bold leading-normal md:text-xl">
              Silahkan Masuk Dahulu Sebelum Melanjutkan, Terima Kasih!{' '}
            </p>
            <PrimaryButton className="w-[90px]" onClick={() => signIn()} variant="success">
              Masuk
            </PrimaryButton>
          </div>
        </div>
      </LayoutWrapper>
    </>
  )
}
