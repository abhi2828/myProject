// import { useEffect, useState } from "react";
import styled from "styled-components";

import mail_src from "../../assets/images/awt/mail.svg";
import twitter_src from "../../assets/images/awt/partners/twitter.png";
import { TWITTER_LINK } from "constants/contants";
// import tk_src from "../../assets/images/awt/flags/TK.png";
// import ru_src from "../../assets/images/awt/flags/RU.png";
// import ukr_src from "../../assets/images/awt/flags/UKR.png";
// import eng_src from "../../assets/images/awt/flags/ENG.png";
// import { useActiveLocale } from "hooks/useActiveLocale";
// import { useDispatch } from "react-redux";
// import { updateUserLocale } from "state/user/reducer";
// import { useUserLocaleManager } from "state/user/hooks";
// import { useNavigate } from "react-router-dom";

const StyledAlert = styled.div`
  position: absolute;
  left: 0;
  background-color: white;
  display: flex;
  justify-content: center;
  gap: 10px;
  height: 80px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.light};
`;

const StyledDiv = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
`;

// const StyledDiv2 = styled.div`
//   display: flex;
//   align-items: center;
//   padding-left: 52px;
//   @media only screen and (max-width: ${({ theme }) =>
//       `${theme.breakpoint.sm}px`}) {
//         padding-left: 20px;
//   }
//   @media only screen and (max-width: ${({ theme }) =>
//       `${theme.breakpoint.xs}px`}) {
//         padding-left: 10px;
//   }
//   gap: 6px;
// `;

// const StyledDiv3 = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 6px;
// `;

const AlertText = styled.p`
  color: ${({ theme }) => theme.primary_text};
  font-size: 15px;
  font-weight: 600;
`;

// const LocaleFlag = styled.div<{ src: string }>`
//   background-image: ${({ src }) => `url(${src})`};
//   width: 39px;
//   height: 39px;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-size: cover;
// `;

// const LocaleSymbol = styled.button<{ active: boolean; last: boolean }>`
//   margin: 0;
//   color: ${({ active, theme }) =>
//     active ? theme.primary : theme.secondary_text};
//   font-size: 18px;
//   font-style: normal;
//   font-weight: 500;
//   line-height: normal;
//   position: relative;
//   padding-left: 0;
//   padding-right: 5px;
//   background: none;
//   border: none;
//   outline: none;
//   &::after {
//     content: "";
//     position: absolute;
//     width: 1px;
//     height: 18px;
//     background-color: ${({ theme }) => theme.secondary_text};
//     margin: 0 5px;
//     visibility: ${({ last }) => (last ? "hidden" : "visible")};
//   }
// `;

interface LocaleType {
  locale: string;
  text: string;
  src: string;
}

// const locales: LocaleType[] = [
//   { locale: "tr-TR", text: "TK", src: tk_src },
//   {
//     locale: "ru-RU",
//     text: "RU",
//     src: ru_src,
//   },
//   { locale: "uk-UA", text: "UKR", src: ukr_src },
//   {
//     locale: "en-US",
//     text: "ENG",
//     src: eng_src,
//   },
// ];

const Alert = () => {
  // const [activeLocale, setActiveLocale] = useState<LocaleType | undefined>();
  // const locale = useActiveLocale();
  // const navigate = useNavigate()
  // useEffect(() => {
  //   const selectedLocale = locales.find(
  //     (each: LocaleType) => each.locale === locale
  //   );
  //   setActiveLocale(selectedLocale);
  // }, [locale]);
  return (
    <StyledAlert>
      {/* <StyledDiv2>
        <LocaleFlag src={activeLocale?.src || ""} />
        <StyledDiv3>
          {locales.map((each, index) => (
            <LocaleSymbol
              key={index}
              active={each.locale === activeLocale?.locale}
              last={index === locales.length - 1}
              onClick={() =>
                navigate(`/?lng=${each.locale}`)
              }
            >
              {each.text}
            </LocaleSymbol>
          ))}
        </StyledDiv3>
      </StyledDiv2> */}
      <StyledDiv href={TWITTER_LINK} target="_blank" rel="noreferrer">
        <img src={twitter_src} alt="Twitter" width={15} />
        <AlertText>STOP BEING A WOKE CUNT</AlertText>
      </StyledDiv>
    </StyledAlert>
  );
};

export default Alert;
