import {
  ArrowDownCircleIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
  EnvelopeIcon,
  EyeIcon,
  LinkIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';

type IconProps = React.SVGAttributes<SVGElement>;

const Icons = {
  Eye: EyeIcon,
  ChevronLeft: ChevronLeftIcon,
  ChevronRight: ChevronRightIcon,
  ChevronDown: ChevronDownIcon,
  ArrowDownCircle: ArrowDownCircleIcon,
  ArrowLongLeft: ArrowLongLeftIcon,
  ArrowLongRight: ArrowLongRightIcon,
  Envelope: EnvelopeIcon,
  Rocket: RocketLaunchIcon,
  Link: LinkIcon,
  ClipboardDocument: ClipboardDocumentIcon,
  ClipboardDocumentCheck: ClipboardDocumentCheckIcon,
  File: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625z" />
      <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
    </svg>
  ),
  TypeScriptFile: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5.625,1.5C4.589,1.5 3.75,2.34 3.75,3.375L3.75,20.625C3.75,21.66 4.59,22.5 5.625,22.5L18.375,22.5C19.41,22.5 20.25,21.66 20.25,20.625L20.25,12.75C20.25,10.693 18.557,9 16.5,9L14.625,9C13.596,9 12.75,8.154 12.75,7.125L12.75,5.25C12.75,3.193 11.057,1.5 9,1.5L5.625,1.5ZM13.507,18.611C13.046,18.611 12.59,18.492 12.362,18.366L12.548,17.61C12.794,17.736 13.172,17.862 13.562,17.862C13.982,17.862 14.204,17.688 14.204,17.424C14.204,17.172 14.012,17.028 13.526,16.854C12.854,16.62 12.417,16.249 12.417,15.661C12.417,14.972 12.992,14.444 13.946,14.444C14.401,14.444 14.737,14.54 14.977,14.647L14.773,15.385C14.509,15.257 14.22,15.191 13.927,15.193C13.531,15.193 13.34,15.374 13.34,15.583C13.34,15.841 13.568,15.955 14.089,16.153C14.803,16.417 15.139,16.789 15.139,17.358C15.138,18.036 14.616,18.611 13.507,18.611ZM11.966,15.275L10.863,15.275L10.863,18.549L9.946,18.549L9.946,15.275L8.861,15.275L8.861,14.507L11.966,14.507L11.966,15.275Z" />
      <path d="M12.971,1.816C13.797,2.769 14.252,3.989 14.25,5.25L14.25,7.125C14.25,7.332 14.418,7.5 14.625,7.5L16.5,7.5C17.761,7.498 18.981,7.953 19.934,8.779C19.039,5.377 16.373,2.711 12.971,1.816Z" />
    </svg>
  ),
  TsxFile: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5.625,1.5C4.589,1.5 3.75,2.34 3.75,3.375L3.75,20.625C3.75,21.66 4.59,22.5 5.625,22.5L18.375,22.5C19.41,22.5 20.25,21.66 20.25,20.625L20.25,12.75C20.25,10.693 18.557,9 16.5,9L14.625,9C13.596,9 12.75,8.154 12.75,7.125L12.75,5.25C12.75,3.193 11.057,1.5 9,1.5L5.625,1.5ZM11.64,18.611C11.179,18.611 10.723,18.492 10.495,18.366L10.681,17.61C10.927,17.736 11.305,17.862 11.695,17.862C12.115,17.862 12.337,17.688 12.337,17.424C12.337,17.172 12.145,17.028 11.659,16.854C10.987,16.62 10.55,16.249 10.55,15.661C10.55,14.972 11.125,14.444 12.079,14.444C12.534,14.444 12.87,14.54 13.11,14.647L12.906,15.385C12.642,15.257 12.353,15.191 12.06,15.193C11.664,15.193 11.473,15.374 11.473,15.583C11.473,15.841 11.701,15.955 12.222,16.153C12.936,16.417 13.272,16.789 13.272,17.358C13.271,18.036 12.749,18.611 11.64,18.611ZM10.1,15.275L8.997,15.275L8.997,18.549L8.08,18.549L8.08,15.275L6.995,15.275L6.995,14.506L10.1,14.506L10.1,15.275ZM15.95,18.549L15.585,17.818C15.435,17.536 15.339,17.325 15.226,17.092L15.213,17.092C15.13,17.325 15.028,17.535 14.901,17.818L14.566,18.549L13.521,18.549L14.692,16.504L13.563,14.506L14.613,14.506L14.967,15.244C15.088,15.489 15.177,15.687 15.273,15.915L15.286,15.915C15.382,15.657 15.46,15.477 15.562,15.244L15.903,14.506L16.946,14.506L15.807,16.48L17.005,18.549L15.95,18.549Z" />
      <path d="M12.971,1.816C13.797,2.769 14.252,3.989 14.25,5.25L14.25,7.125C14.25,7.332 14.418,7.5 14.625,7.5L16.5,7.5C17.761,7.498 18.981,7.953 19.934,8.779C19.039,5.377 16.373,2.711 12.971,1.816Z" />
    </svg>
  ),
  CssFile: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5.625,1.5C4.589,1.5 3.75,2.34 3.75,3.375L3.75,20.625C3.75,21.66 4.59,22.5 5.625,22.5L18.375,22.5C19.41,22.5 20.25,21.66 20.25,20.625L20.25,12.75C20.25,10.693 18.557,9 16.5,9L14.625,9C13.596,9 12.75,8.154 12.75,7.125L12.75,5.25C12.75,3.193 11.057,1.5 9,1.5L5.625,1.5ZM9.446,17.856C9.721,17.856 10.027,17.795 10.208,17.724L10.346,18.437C10.178,18.521 9.8,18.611 9.309,18.611C7.912,18.611 7.192,17.742 7.192,16.59C7.191,15.212 8.175,14.444 9.398,14.444C9.872,14.444 10.231,14.54 10.393,14.624L10.207,15.35C9.963,15.25 9.702,15.199 9.439,15.201C8.713,15.201 8.149,15.639 8.149,16.538C8.15,17.346 8.631,17.856 9.446,17.856ZM11.937,18.611C11.476,18.611 11.02,18.492 10.792,18.366L10.978,17.61C11.224,17.736 11.602,17.862 11.992,17.862C12.412,17.862 12.634,17.688 12.634,17.424C12.634,17.172 12.442,17.028 11.956,16.854C11.284,16.62 10.847,16.249 10.847,15.661C10.847,14.972 11.422,14.444 12.376,14.444C12.831,14.444 13.167,14.54 13.407,14.647L13.203,15.385C12.939,15.257 12.65,15.191 12.357,15.193C11.961,15.193 11.77,15.374 11.77,15.583C11.77,15.841 11.998,15.955 12.519,16.153C13.233,16.417 13.569,16.789 13.569,17.358C13.568,18.036 13.046,18.611 11.937,18.611ZM15.177,18.611C14.716,18.611 14.26,18.492 14.032,18.366L14.218,17.61C14.464,17.736 14.842,17.862 15.232,17.862C15.652,17.862 15.874,17.688 15.874,17.424C15.874,17.172 15.682,17.028 15.196,16.854C14.524,16.62 14.087,16.249 14.087,15.661C14.087,14.972 14.662,14.444 15.616,14.444C16.071,14.444 16.407,14.54 16.647,14.647L16.443,15.385C16.179,15.257 15.89,15.191 15.597,15.193C15.201,15.193 15.01,15.374 15.01,15.583C15.01,15.841 15.238,15.955 15.759,16.153C16.473,16.417 16.809,16.789 16.809,17.358C16.809,18.036 16.286,18.611 15.177,18.611Z" />
      <path d="M12.971,1.816C13.797,2.769 14.252,3.989 14.25,5.25L14.25,7.125C14.25,7.332 14.418,7.5 14.625,7.5L16.5,7.5C17.761,7.498 18.981,7.953 19.934,8.779C19.039,5.377 16.373,2.711 12.971,1.816Z" />
    </svg>
  ),
  JsonFile: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M5.625,1.5C4.589,1.5 3.75,2.34 3.75,3.375L3.75,20.625C3.75,21.66 4.59,22.5 5.625,22.5L18.375,22.5C19.41,22.5 20.25,21.66 20.25,20.625L20.25,12.75C20.25,10.693 18.557,9 16.5,9L14.625,9C13.596,9 12.75,8.154 12.75,7.125L12.75,5.25C12.75,3.193 11.057,1.5 9,1.5L5.625,1.5ZM7.242,17.061C7.242,18.21 6.691,18.611 5.807,18.611C5.596,18.611 5.321,18.576 5.141,18.515L5.244,17.78C5.368,17.821 5.529,17.851 5.711,17.851C6.093,17.851 6.333,17.678 6.333,17.05L6.333,14.512L7.243,14.512L7.243,17.061L7.242,17.061ZM12.941,18.611C11.744,18.611 11.044,17.708 11.044,16.558C11.044,15.348 11.817,14.444 13.008,14.444C14.246,14.444 14.923,15.372 14.923,16.486C14.922,17.81 14.121,18.611 12.941,18.611ZM8.987,18.605C8.527,18.605 8.071,18.485 7.845,18.36L8.03,17.605C8.274,17.731 8.653,17.857 9.042,17.857C9.461,17.857 9.681,17.683 9.681,17.421C9.681,17.168 9.491,17.025 9.006,16.851C8.334,16.618 7.898,16.246 7.898,15.66C7.898,14.971 8.473,14.444 9.425,14.444C9.879,14.444 10.213,14.54 10.455,14.648L10.249,15.384C10.088,15.306 9.8,15.193 9.406,15.193C9.011,15.193 8.819,15.372 8.819,15.581C8.819,15.838 9.046,15.953 9.568,16.151C10.281,16.414 10.616,16.785 10.616,17.354C10.617,18.031 10.095,18.605 8.987,18.605ZM18.859,18.545L17.899,18.545L17.037,16.988C16.779,16.526 16.545,16.051 16.337,15.565L16.318,15.571C16.343,16.103 16.355,16.672 16.355,17.331L16.355,18.546L15.516,18.546L15.516,14.512L16.582,14.512L17.42,15.99C17.66,16.414 17.899,16.917 18.081,17.372L18.097,17.372C18.038,16.84 18.02,16.295 18.02,15.69L18.02,14.512L18.859,14.512L18.859,18.545ZM12.984,15.169C12.366,15.169 12.008,15.756 12.008,16.539C12.008,17.33 12.38,17.886 12.989,17.886C13.607,17.886 13.96,17.3 13.96,16.515C13.96,15.793 13.612,15.169 12.984,15.169Z" />
      <path d="M12.971,1.816C13.797,2.769 14.252,3.989 14.25,5.25L14.25,7.125C14.25,7.332 14.418,7.5 14.625,7.5L16.5,7.5C17.761,7.498 18.981,7.953 19.934,8.779C19.039,5.377 16.373,2.711 12.971,1.816Z" />
    </svg>
  ),
  Warning: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
    </svg>
  ),
  PaperPlane: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      {...props}
    >
      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
    </svg>
  ),
  Discord: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z" />
    </svg>
  ),
  GitHub: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
      />
    </svg>
  ),
  Instagram: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20.947 8.305a6.53 6.53 0 0 0-.419-2.216 4.61 4.61 0 0 0-2.633-2.633 6.606 6.606 0 0 0-2.186-.42c-.962-.043-1.267-.055-3.709-.055s-2.755 0-3.71.055a6.606 6.606 0 0 0-2.185.42 4.607 4.607 0 0 0-2.633 2.633 6.554 6.554 0 0 0-.419 2.185c-.043.963-.056 1.268-.056 3.71s0 2.754.056 3.71c.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.043 1.268.056 3.71.056s2.755 0 3.71-.056a6.59 6.59 0 0 0 2.186-.419 4.615 4.615 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.187.043-.962.056-1.267.056-3.71-.002-2.442-.002-2.752-.058-3.709zm-8.953 8.297c-2.554 0-4.623-2.069-4.623-4.623s2.069-4.623 4.623-4.623a4.623 4.623 0 0 1 0 9.246zm4.807-8.339a1.077 1.077 0 0 1-1.078-1.078 1.077 1.077 0 1 1 2.155 0c0 .596-.482 1.078-1.077 1.078z" />
      <circle
        cx="11.994"
        cy="11.979"
        r="3.003"
      />
    </svg>
  ),
  LinkedIn: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
    </svg>
  ),
  Dribbble: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9.5"
      />
      <path d="M2.924,10.729C2.924,10.729 14.322,11.723 18.341,5.388" />
      <path d="M15.799,20.34C15.799,20.34 15.286,9.936 8.392,3.575" />
      <path d="M21.163,12.251C21.163,12.251 17.102,11.603 13.414,12.416C10.497,13.06 7.85,15.13 5.839,18.78" />
    </svg>
  ),
  Behance: ({ ...props }: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.939.187.387.28.871.28 1.443 0 .62-.14 1.138-.421 1.551-.283.414-.7.753-1.256 1.015.757.219 1.318.602 1.69 1.146.374.549.557 1.206.557 1.976 0 .625-.119 1.162-.358 1.613a3.11 3.11 0 0 1-.974 1.114 4.315 4.315 0 0 1-1.399.64 6.287 6.287 0 0 1-1.609.206H2V5.731h5.803zm-.351 4.972c.48 0 .878-.114 1.192-.345.312-.228.463-.604.463-1.119 0-.286-.051-.522-.151-.707a1.114 1.114 0 0 0-.417-.428 1.683 1.683 0 0 0-.597-.215 3.609 3.609 0 0 0-.697-.061H4.71v2.875h2.742zm.151 5.239c.267 0 .521-.023.76-.077.241-.052.455-.136.637-.261.182-.12.332-.283.44-.491.109-.206.162-.475.162-.798 0-.634-.179-1.085-.533-1.358-.355-.27-.831-.404-1.414-.404H4.71v3.39h2.893zm8.565-.041c.367.358.896.538 1.584.538.493 0 .919-.125 1.278-.373.354-.249.57-.515.653-.79h2.155c-.346 1.072-.871 1.838-1.589 2.299-.709.463-1.572.693-2.58.693-.702 0-1.334-.113-1.9-.337a4.033 4.033 0 0 1-1.439-.958 4.37 4.37 0 0 1-.905-1.485 5.433 5.433 0 0 1-.32-1.899c0-.666.111-1.289.329-1.864a4.376 4.376 0 0 1 .934-1.493c.405-.42.885-.751 1.444-.994a4.634 4.634 0 0 1 1.858-.362c.754 0 1.413.146 1.979.44a3.967 3.967 0 0 1 1.39 1.182c.363.493.622 1.058.783 1.691.161.632.217 1.292.171 1.983h-6.431c.001.704.238 1.371.606 1.729zm2.812-4.681c-.291-.322-.783-.496-1.385-.496-.391 0-.714.065-.974.199a1.97 1.97 0 0 0-.62.491 1.772 1.772 0 0 0-.328.628 2.82 2.82 0 0 0-.111.587h3.982c-.058-.624-.272-1.085-.564-1.409zm-3.918-4.663h4.989v1.215h-4.989z" />
    </svg>
  ),
};

export default Icons;
export { type IconProps };
