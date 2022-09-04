import React from "react";
import styles from "../../styles/About/AboutMe.module.css";

export default function AboutMe() {
  return (
    <div className={styles.about_me}>
      <div className={styles.title}>Hey there! 👋</div>
      <div className={styles.paragraph}>
        I'm Santi, a passionate technology enthusiast, finishing my studies to
        become a Full Stack Web Developer as I make this Web App.
      </div>
      <div className={styles.paragraph}>
        My passion for technology came bit later than I would have wanted but,
        nevertheless, it is here to make me thrive.
      </div>
      <div className={styles.paragraph}>
        Programming has become my all day, sun-to-sun activity of choice. I find
        it extremely satisfying to plan out, structure, code and design an
        entire product, as I did with this site. As musician Marc Anthony once
        said:{" "}
        <i className={styles.i}>
          If you love what you do, you'll never have to work a day in your life.
        </i>{" "}
        And I'm happy to say... I did it! I've found something I love doing.
      </div>
      <div className={styles.paragraph}>
        If you have any feedback, feel free to contact me. Please by nice, this
        was my first project ever...
      </div>

      <div className={styles.center}>
        <div className={styles.contact_container}>
          <div className={styles.contact}>
            <div>
              <a
                href="mailto:s.ostrovsky@hotmail.com"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <svg
                  width="48px"
                  height="48px"
                  viewBox="0 0 490 490"
                  style={{ enableBackground: "new 0 0 490 490" }}
                >
                  <g>
                    <g>
                      <polygon
                        style={{ fill: "#FDC147" }}
                        points="480,95 245,235 10,95 		"
                      />
                      <polygon
                        style={{ fill: "#FFD248" }}
                        points="480,95 480,395 10,395 10,95 245,235 		"
                      />
                    </g>
                    <path
                      style={{ fill: "#231F20" }}
                      d="M480,85H10C4.478,85,0,89.478,0,95v300c0,5.522,4.478,10,10,10h470c5.522,0,10-4.478,10-10V95
		C490,89.478,485.522,85,480,85z M245,223.36L46.324,105h397.352L245,223.36z M20,385V112.597l150.807,89.842l-107.014,84.72
		l12.414,15.682l112.986-89.447l50.688,30.197C241.459,244.53,243.229,245,245,245s3.541-0.47,5.118-1.409l50.688-30.197
		l112.986,89.447l12.414-15.682L319.193,202.44L470,112.597V385H20z"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div>E-mail</div>
          </div>

          <div className={styles.contact}>
            <div>
              <a
                href="https://www.linkedin.com/in/sostro/"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <svg
                  x="0px"
                  y="0px"
                  width="48px"
                  height="48px"
                  viewBox="0 0 112.196 112.196"
                  style={{ enableBackground: "new 0 0 112.196 112.196" }}
                >
                  <g>
                    <circle
                      style={{ fill: "#007AB9" }}
                      cx="56.098"
                      cy="56.097"
                      r="56.098"
                    />
                    <g>
                      <path
                        style={{ fill: "#F1F2F2" }}
                        d="M89.616,60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118
			c-3.705,0-5.906,2.491-6.878,4.903c-0.353,0.862-0.444,2.059-0.444,3.268v22.524H48.684c0,0,0.18-36.546,0-40.329h13.411v5.715
			c-0.027,0.045-0.065,0.089-0.089,0.132h0.089v-0.132c1.782-2.742,4.96-6.662,12.085-6.662
			C83.002,42.462,89.616,48.226,89.616,60.611L89.616,60.611z M34.656,23.969c-4.587,0-7.588,3.011-7.588,6.967
			c0,3.872,2.914,6.97,7.412,6.97h0.087c4.677,0,7.585-3.098,7.585-6.97C42.063,26.98,39.244,23.969,34.656,23.969L34.656,23.969z
			 M27.865,83.739H41.27V43.409H27.865V83.739z"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div className={styles.in}>LinkedIn</div>
          </div>

          <div className={styles.contact}>
            <div>
              <a
                href="https://github.com/Santi-Ostrovsky"
                rel="noreferrer"
                target="_blank"
                referencepolicy="no-referrer-when-downgrade"
              >
                <svg width="53px" height="53px" viewBox="0 0 72 72">
                  <g id="color">
                    <path
                      fill="#d0cfce"
                      stroke="none"
                      d="m 29.043969,61.611125 c 0,-0.927468 -0.03474,-3.979828 -0.03474,-7.764543 0,-2.646092 0.874013,-4.372735 1.862956,-5.252093 -6.227673,-0.721661 -12.778757,-3.153928 -12.778757,-14.034982 0,-3.0978 1.095858,-5.631632 2.886648,-7.614865 -0.285992,-0.71899 -1.253553,-3.605637 0.277973,-7.513301 0,0 2.354755,-0.764427 7.716434,2.90803 2.23715,-0.628113 4.637344,-0.946179 7.026845,-0.951526 2.384156,0.0054 4.784349,0.323413 7.026846,0.951526 5.356333,-3.672457 7.711088,-2.90803 7.711088,-2.90803 1.531527,3.907664 0.569311,6.794311 0.277974,7.513301 1.796134,1.983233 2.8813,4.514393 2.8813,7.614865 0,10.905109 -6.559101,13.307975 -12.816176,14.008253 1.013001,0.882032 1.908395,2.611346 1.908395,5.262785 0,3.792732 -0.03474,6.85044 -0.03474,7.78058 0,0.761755 0.505162,1.641114 1.929775,1.368486 11.145665,-3.757987 19.17749,-14.395813 19.17749,-26.931342 0,-15.678767 -12.567603,-28.3880299 -28.067291,-28.3880299 -15.494341,0 -28.0592708,12.7065899 -28.0592708,28.3880299 0,12.540875 8.0398428,23.181374 19.2015438,26.934015 1.395212,0.261936 1.905721,-0.614749 1.905721,-1.371159 z"
                    />
                  </g>
                  <g id="hair" />
                  <g id="skin" />
                  <g id="skin-shadow" />
                  <g id="line">
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m 29.043969,61.611125 c 0,-0.927468 -0.03474,-3.979828 -0.03474,-7.764543 0,-2.646092 0.874013,-4.372735 1.862956,-5.252093 -6.227673,-0.721661 -12.778757,-3.153928 -12.778757,-14.034982 0,-3.0978 1.095858,-5.631632 2.886648,-7.614865 -0.285992,-0.71899 -1.253553,-3.605637 0.277973,-7.513301 0,0 2.354755,-0.764427 7.716434,2.90803 2.23715,-0.628113 4.637344,-0.946179 7.026845,-0.951526 2.384156,0.0054 4.784349,0.323413 7.026846,0.951526 5.356333,-3.672457 7.711088,-2.90803 7.711088,-2.90803 1.531527,3.907664 0.569311,6.794311 0.277974,7.513301 1.796134,1.983233 2.8813,4.514393 2.8813,7.614865 0,10.905109 -6.559101,13.307975 -12.816176,14.008253 1.013001,0.882032 1.908395,2.611346 1.908395,5.262785 0,3.792732 -0.03474,6.85044 -0.03474,7.78058 0,0.761755 0.505162,1.641114 1.929775,1.368486 11.145665,-3.757987 19.17749,-14.395813 19.17749,-26.931342 0,-15.678767 -12.567603,-28.3880299 -28.067291,-28.3880299 -15.494341,0 -28.0592708,12.7065899 -28.0592708,28.3880299 0,12.540875 8.0398428,23.181374 19.2015438,26.934015 1.395212,0.261936 1.905721,-0.614749 1.905721,-1.371159 z"
                    />
                    <path
                      fill="none"
                      stroke="#000000"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="2"
                      d="m 16.289268,48.089327 c 2.56858,0.780462 3.58158,1.635766 4.789693,3.661764 1.205444,2.025998 2.619366,4.287204 7.932933,2.998904"
                    />
                  </g>
                </svg>
              </a>
            </div>
            <div>GitHub</div>
          </div>
          {/*  */}
        </div>
      </div>

      <div>
        <div className={styles.discord_logo}>
          <a
            href="https://discord.gg/FHhaSdaWgz"
            rel="noreferrer"
            target="_blank"
            referencepolicy="no-referrer-when-downgrade"
            className={styles.link}
          >
            Join my Discord Community Server!
            <div className={styles.svg_container}>
              <svg
                width="48px"
                height="48px"
                viewBox="0 0 256 256"
                preserveAspectRatio="xMidYMid"
              >
                <g>
                  <path
                    d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                    fill="#5865F2"
                    fillRule="nonzero"
                  ></path>
                </g>
              </svg>
            </div>
          </a>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
