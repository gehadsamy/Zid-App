import "./Homepage.scss";
import Header from "../Header/Header";
import AppsReview from "../AppsReview/AppsReview";

import Footer from "../../shared/Footer/Footer";
import Features from "../Features/FeaturesSection/Features";

export default function Homepage() {
  return (
    <div className="homepage">
      <a href="#home" className="btn-scrollup active">
        <img
          src="https://grow.zid.sa/hs-fs/hubfs/to%20top.png?width=50&name=to%20top.png"
          alt="zid-logo"
        ></img>
      </a>

      <Header />
      <AppsReview />
      <Features />
      <Footer />
      <a href="#header" className="chat-scrollup">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="32"
          height="30"
          viewBox="0 0 39 37"
          className="conversations-visitor-open-icon"
        >
          <defs>
            <path
              id="conversations-visitor-open-icon-path-10.27512619555732076"
              d="M31.4824242 24.6256121L31.4824242 0.501369697 0.476266667 0.501369697 0.476266667 24.6256121z"
            ></path>
          </defs>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g transform="translate(-1432 -977) translate(1415.723 959.455)">
              <g transform="translate(17 17)">
                <g transform="translate(6.333 .075)">
                  <path
                    fill="#33475b"
                    d="M30.594 4.773c-.314-1.943-1.486-3.113-3.374-3.38C27.174 1.382 22.576.5 15.36.5c-7.214 0-11.812.882-11.843.889-1.477.21-2.507.967-3.042 2.192a83.103 83.103 0 019.312-.503c6.994 0 11.647.804 12.33.93 3.079.462 5.22 2.598 5.738 5.728.224 1.02.932 4.606.932 8.887 0 2.292-.206 4.395-.428 6.002 1.22-.516 1.988-1.55 2.23-3.044.008-.037.893-3.814.893-8.415 0-4.6-.885-8.377-.89-8.394"
                  ></path>
                </g>
                <g fill="#33475b" transform="translate(0 5.832)">
                  <path d="M31.354 4.473c-.314-1.944-1.487-3.114-3.374-3.382-.046-.01-4.644-.89-11.859-.89-7.214 0-11.813.88-11.843.888-1.903.27-3.075 1.44-3.384 3.363C.884 4.489 0 8.266 0 12.867c0 4.6.884 8.377.889 8.393.314 1.944 1.486 3.114 3.374 3.382.037.007 3.02.578 7.933.801l2.928 5.072a1.151 1.151 0 001.994 0l2.929-5.071c4.913-.224 7.893-.794 7.918-.8 1.902-.27 3.075-1.44 3.384-3.363.01-.037.893-3.814.893-8.414 0-4.601-.884-8.378-.888-8.394"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </a>
    </div>
  );
}
