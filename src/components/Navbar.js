import styles from "./PatternDetector.module.css";

const Navbar = () => {
  return (
    <div className={styles.patternDetector}>
      <header className={styles.header}>
        <div className={styles.errorHandler}>
          <img
            className={styles.logoIcon}
            loading="lazy"
            alt=""
            src="/logo.svg"
          />
        </div>{" "}
        <img className={styles.indiaInIcon} alt="" src="/india-in.svg" />
        <img className={styles.headerChild} alt="" src="/star-1.svg" />
        <div className={styles.icons}>
          <img
            className={styles.vuesaxlinearsearchNormalIcon}
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
          <img
            className={styles.vuesaxlinearsearchNormalIcon1}
            alt=""
            src="/vuesaxlinearsearchnormal.svg"
          />
          <div className={styles.language}>
            <img className={styles.indiaInIcon1} alt="" src="/india-in.svg" />
            <img className={styles.languageChild} alt="" src="/star-1.svg" />
            <b className={styles.eng}> ENG </b>{" "}
            <img
              className={styles.vuesaxlineararrowLeftIcon}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>{" "}
        </div>{" "}
        <div className={styles.linkConnector}>
          <div className={styles.imageRecognizer}>
            <div className={styles.shapeExtractor}>
              <h1 className={styles.logo}> LOGO </h1>{" "}
              <div className={styles.dataMerger}>
                <div className={styles.vuesaxlinearsearchNormalParent}>
                  <img
                    className={styles.vuesaxlinearsearchNormalIcon2}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearsearchnormal.svg"
                  />
                  <img
                    className={styles.vuesaxlinearheartIcon}
                    loading="lazy"
                    alt=""
                    src="/vuesaxlinearheart.svg"
                  />
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className={styles.sequenceProcessor}>
              <div className={styles.tabs}>
                <div className={styles.tab1Parent}>
                  <div className={styles.tab1}>
                    <b className={styles.shop}> SHOP </b>{" "}
                  </div>{" "}
                  <div className={styles.frameChild} />{" "}
                </div>{" "}
                <div className={styles.tab2Parent}>
                  <div className={styles.tab2}>
                    <b className={styles.skills}> SKILLS </b>{" "}
                  </div>{" "}
                  <div className={styles.frameItem} />{" "}
                </div>{" "}
                <div className={styles.tab3}>
                  <b className={styles.stories}> STORIES </b>{" "}
                  <div className={styles.tab3Child} />{" "}
                </div>{" "}
                <div className={styles.tab4}>
                  <b className={styles.about}> ABOUT </b>{" "}
                  <div className={styles.tab4Child} />{" "}
                </div>{" "}
                <div className={styles.tab5}>
                  <b className={styles.contactUs}> CONTACT US </b>{" "}
                  <div className={styles.tab5Child} />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className={styles.sizeComparator}>
            <img
              className={styles.vuesaxlinearshoppingBagIcon}
              loading="lazy"
              alt=""
              src="/vuesaxlinearshoppingbag.svg"
            />
          </div>{" "}
          <div className={styles.inputField}>
            <img
              className={styles.vuesaxtwotoneprofileIcon}
              loading="lazy"
              alt=""
              src="/vuesaxtwotoneprofile.svg"
            />
          </div>{" "}
          <div className={styles.inputCollector}>
            <div className={styles.outputDistributor}>
              <div className={styles.valueComparer}>
                <b className={styles.eng1}> ENG </b>{" "}
              </div>{" "}
              <img
                className={styles.vuesaxlineararrowLeftIcon1}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </header>{" "}
    </div>
  );
};

export default Navbar;
