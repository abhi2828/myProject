import { useState } from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import header_src from "../../assets/images/awt/header.png";
import wrappedMenu_src from "../../assets/images/awt/wrappedMenu.png";
import * as styles from "./Header.css";
import { Link } from "react-router-dom";
import { TELEGRAM_LINK, TWITTER_LINK } from "constants/contants";
import { StyledA } from ".";

const Flex = styled.div`
  height: 110px;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  padding: 2.5vw;
`;

const RelativeA = styled.a`
  position: relative;
  text-decoration: none;
`;

const StyledImg = styled.div<{ src: string }>`
  width: 83px;
  height: 83px;
  background-image: ${({ src }) => `url(${src})`};
  background-position: right;
  background-size: 93px;
  border: none;
  border-radius: 50px;
`;

const StyledP = styled.p`
  color: #000;

  text-align: center;
  font-family: "Poppins";
  font-size: 50px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 0;
`;

const StyledP1 = styled.p`
  color: ${({ theme }) => theme.primary_text};
  text-align: center;
  font-family: "Poppins";
  font-size: 11px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  position: absolute;
  bottom: -5px;
  margin: 0;
`;

const PaddingDiv = styled.div`
  padding: 10px;
`;

const MobileHeader = () => {
  return (
    <>
      <Menu
        burgerButtonClassName={styles.customBuggerBtnStyle}
        menuClassName={styles.customMenuStyle}
      >
        <Link id="home" className={styles.customMenuItemStyle} to="/">
          HOME
        </Link>
        <a
          id="about"
          className={styles.customMenuItemStyle}
          href={TELEGRAM_LINK}
          target="_blank"
          rel="noreferrer"
        >
          VIBE
        </a>
        <Link
          id="contact"
          className={styles.customMenuItemStyle}
          to="/blackpaper"
        >
          BLACKPAPER
        </Link>
        <a
          className={styles.customMenuItemStyle}
          href={TWITTER_LINK}
          target="_blank"
          rel="noreferrer"
        >
          MEME PROPAGANDA
        </a>
        <div className={styles.customMenuItemStyle}>AUDIT</div>
      </Menu>
      <Flex>
        <StyledImg src={header_src}>
          <StyledA
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          ></StyledA>
        </StyledImg>
        <RelativeA href={TWITTER_LINK} target="_blank" rel="noreferrer">
          <StyledP>$AWT</StyledP>
          <StyledP1>STOP BEING A WOKE CUNT</StyledP1>
        </RelativeA>
        <PaddingDiv>
          <img
            src={wrappedMenu_src}
            alt="Wrapped Menu"
            width={43}
            height={43}
          />
        </PaddingDiv>
      </Flex>
    </>
  );
};

export default MobileHeader;
