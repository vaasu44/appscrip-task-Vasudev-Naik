import { useCallback } from "react";
import FrameComponent1 from "./FrameComponent1";
import { useNavigate } from "react-router-dom";
import styles from "./ErrorHandlerChain.module.css";

const ErrorHandlerChain = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.errorHandlerChain}>
      <input className={styles.checkbox} type="checkbox" />
      <b className={styles.customizble}> Customizble </b>{" "}
      <div className={styles.seperator} />{" "}
      <div className={styles.name}>
        <b className={styles.idealFor}> IDEAL FOR </b>{" "}
        <div className={styles.vuesaxlineararrowLeftWrapper}>
          <img
            className={styles.vuesaxlineararrowLeftIcon}
            alt=""
            src="/vuesaxlineararrowleft-5@2x.png"
          />
        </div>{" "}
      </div>{" "}
      <div className={styles.all}> All </div>{" "}
      <div className={styles.unselectAll}> Unselect all </div>{" "}
      <input className={styles.checkbox1} type="checkbox" />
      <div className={styles.men}> Men </div>{" "}
      <input className={styles.checkbox2} type="checkbox" />
      <div className={styles.women}> Women </div>{" "}
      <input className={styles.checkbox3} type="checkbox" />
      <div className={styles.babyKids}> {`Baby & Kids`} </div>{" "}
      <div className={styles.seperator1} />{" "}
      <div className={styles.filter2}>
        <div className={styles.title}>
          <div className={styles.name1}>
            <b className={styles.occasion}> occasion </b>{" "}
            <img
              className={styles.vuesaxlineararrowLeftIcon1}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>{" "}
          <div className={styles.all1}> All </div>{" "}
        </div>{" "}
        <div className={styles.values}>
          <div className={styles.unselectAll1}> Unselect All </div>{" "}
          <div className={styles.value1}>
            <div className={styles.checkbox4} />{" "}
            <div className={styles.rainySeason1}> Rainy Season(1) </div>{" "}
          </div>{" "}
          <div className={styles.value2}>
            <div className={styles.checkbox5} />{" "}
            <div className={styles.casual3}> Casual(3) </div>{" "}
          </div>{" "}
          <div className={styles.value3}>
            <div className={styles.checkbox6} />{" "}
            <div className={styles.wedding1}> Wedding(1) </div>{" "}
          </div>{" "}
          <div className={styles.value4}>
            <div className={styles.checkbox7} />{" "}
            <div className={styles.party10}> Party(10) </div>{" "}
          </div>{" "}
          <div className={styles.value5}>
            <div className={styles.checkbox8} />{" "}
            <div className={styles.regular2}> Regular(2) </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.seperator2} />{" "}
      <div className={styles.filter3}>
        <div className={styles.title1}>
          <div className={styles.name2}>
            <b className={styles.work}> work </b>{" "}
            <img
              className={styles.vuesaxlineararrowLeftIcon2}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>{" "}
          <div className={styles.all2}> All </div>{" "}
        </div>{" "}
        <div className={styles.values1}>
          <div className={styles.unselectAll2}> Unselect All </div>{" "}
          <div className={styles.value11}>
            <div className={styles.checkbox9} />{" "}
            <div className={styles.frenchKnot2}> French Knot(2) </div>{" "}
          </div>{" "}
          <div className={styles.value21}>
            <div className={styles.checkbox10} />{" "}
            <div className={styles.zardosi2}> Zardosi(2) </div>{" "}
          </div>{" "}
          <div className={styles.value31}>
            <div className={styles.checkbox11} />{" "}
            <div className={styles.fancy1}> Fancy(1) </div>{" "}
          </div>{" "}
          <div className={styles.value41}>
            <div className={styles.checkbox12} />{" "}
            <div className={styles.embroidery1}> Embroidery(1) </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <b className={styles.productName}> Product Name </b>{" "}
      <div className={styles.signInOrContainer}>
        <span className={styles.signIn}> Sign in </span> or Create an account to
        see pricing{" "}
      </div>{" "}
      <img
        className={styles.vuesaxlinearheartIcon}
        alt=""
        src="/vuesaxlinearheart-1.svg"
      />
      <div className={styles.productCard}>
        <div className={styles.image}>
          <img className={styles.hoverPicIcon} alt="" src="/hover-pic@2x.png" />
          <img
            className={styles.frontPicIcon}
            loading="lazy"
            alt=""
            src="/front-pic@2x.png"
          />
        </div>{" "}
        <FrameComponent1 />
      </div>{" "}
      <div className={styles.productCard1}>
        <div className={styles.image1}>
          <div className={styles.hoverPic} />{" "}
          <img
            className={styles.frontPicIcon1}
            loading="lazy"
            alt=""
            src="/front-pic-1@2x.png"
          />
        </div>{" "}
        <FrameComponent1 />
      </div>{" "}
      <div className={styles.frameParent}>
        <div className={styles.vuesaxlineararrowLeftParent}>
          <img
            className={styles.vuesaxlineararrowLeftIcon3}
            alt=""
            src="/vuesaxlineararrowleft-8.svg"
          />
          <div className={styles.hideFilter}> HIDE FILTER </div>{" "}
        </div>{" "}
        <div className={styles.frameChild} />{" "}
        <div className={styles.lineParent}>
          <div className={styles.frameItem} />{" "}
          <div className={styles.frameInner} />{" "}
        </div>{" "}
        <div className={styles.frameGroup}>
          <div className={styles.headerContainerParent}>
            <div className={styles.headerContainer}>
              <b className={styles.items}> 3425 Items </b> <br /> <br />
            </div>{" "}
            <div className={styles.childLinksParent}>
              <div className={styles.childLinks}>
                <img
                  className={styles.vuesaxlineararrowLeftIcon4}
                  alt=""
                  src="/vuesaxlineararrowleft-8.svg"
                />
              </div>{" "}
              <div className={styles.hideFilter1}> HIDE FILTER </div>{" "}
            </div>{" "}
          </div>{" "}
          <div
            className={styles.rectangleParent}
            onClick={onGroupContainerClick}
          >
            <div className={styles.rectangleDiv} />{" "}
            <div className={styles.sort}> sort </div>{" "}
            <div className={styles.lineDiv} />{" "}
            <b className={styles.recommended}> RECOMMENDED </b>{" "}
            <div className={styles.childLinks1}>
              <img
                className={styles.vuesaxlineararrowLeftIcon5}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>{" "}
            <div className={styles.newestFirst}> Newest first </div>{" "}
            <div className={styles.priceHigh}> Price: high to low </div>{" "}
            <div className={styles.popular}> popular </div>{" "}
            <div className={styles.priceLow}> Price: low ot high </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className={styles.filterParent}>
          <div className={styles.filter}> Filter </div>{" "}
          <div className={styles.frameChild1} />{" "}
          <div className={styles.frameWrapper}>
            <div className={styles.loremParent}>
              <b className={styles.lorem}> Lorem </b>{" "}
              <img
                className={styles.vuesaxlineararrowLeftIcon6}
                alt=""
                src="/vuesaxlineararrowleft@2x.png"
              />
            </div>{" "}
          </div>{" "}
          <div className={styles.frameChild2} />{" "}
          <div className={styles.loremGroup}>
            <b className={styles.lorem1}> Lorem </b>{" "}
            <img
              className={styles.vuesaxlineararrowLeftIcon7}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>{" "}
          <div className={styles.frameChild3} />{" "}
          <div className={styles.loremContainer}>
            <b className={styles.lorem2}> Lorem </b>{" "}
            <img
              className={styles.vuesaxlineararrowLeftIcon8}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>{" "}
          <div className={styles.frameChild4} />{" "}
          <div className={styles.frameDiv}>
            <b className={styles.lorem3}> Lorem </b>{" "}
            <img
              className={styles.vuesaxlineararrowLeftIcon9}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>{" "}
          <div className={styles.frameChild5} />{" "}
          <div className={styles.loremParent1}>
            <b className={styles.lorem4}> LOREM </b>{" "}
            <img
              className={styles.vuesaxlineararrowLeftIcon10}
              alt=""
              src="/vuesaxlineararrowleft@2x.png"
            />
          </div>{" "}
        </div>{" "}
        <div className={styles.lineGroup}>
          <div className={styles.frameChild6} />{" "}
          <div className={styles.frameChild7} />{" "}
        </div>{" "}
      </div>{" "}
      <div className={styles.rectangleGroup}>
        <img
          className={styles.rectangleIcon}
          alt=""
          src="/rectangle-29438@2x.png"
        />
        <div className={styles.rectangleContainer}>
          <div className={styles.frameChild8} />{" "}
          <div className={styles.sort1}> Sort </div>{" "}
          <div className={styles.frameChild9} />{" "}
          <div className={styles.shortestPath}>
            <div className={styles.nearestNeighbor}>
              <img
                className={styles.materialSymbolscheckSmallRIcon}
                loading="lazy"
                alt=""
                src="/materialsymbolschecksmallrounded.svg"
              />
            </div>{" "}
            <b className={styles.recommended1}> recommended </b>{" "}
          </div>{" "}
          <div className={styles.newestFirst1}> Newest first </div>{" "}
          <div className={styles.popular1}> popular </div>{" "}
          <div className={styles.priceHigh1}> Price: high to low </div>{" "}
          <div className={styles.priceLow1}> Price: low to high </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ErrorHandlerChain;
