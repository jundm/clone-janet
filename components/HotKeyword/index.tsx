import React, { useEffect, useState } from "react";
import { HotKeyword_section, ListHot_ul, Purple_span, Tit_h1 } from "./style";
import ListHotLi from "./ListHotLi";
import axios from "axios";
import { StaticImageData } from "next/image";

interface HotKeywordProps {}
interface ListHotProps {
  background: string;
  type_p: string;
  period: string;
  link: string;
  esRegdt: string;
  id: number;
  licenseOrgan: string;
  title: string;
}

function HotKeyword({}: HotKeywordProps) {
  // const data = [
  //   {
  //     background: "#e9b107",
  //     image: one,
  //     title: "토익(TOEIC)",
  //     d_day_h5: "D-1",
  //     licenseOrgan: "미국 ETS",
  //     date_span: "2202-06-12",
  //     type_p: "제463회",
  //     period: "2202-04-25 ~ 30",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=155",
  //   },
  //   {
  //     background: "#4b3962",
  //     image: two,
  //     title: "한국사능력검정시험",
  //     d_day_h5: "D-0",
  //     licenseOrgan: "국사편찬위원회",
  //     date_span: "2202-06-11",
  //     type_p: "제 59회",
  //     period: "2202-05-16 ~ 23",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=144",
  //   },
  //   {
  //     background: "#e16045",
  //     image: three,
  //     title: "전기기사",
  //     d_day_h5: "D-21",
  //     licenseOrgan: "한국산업인력공단",
  //     date_span: "2022-07-02",
  //     type_p: "국가기술자격 기사 (2202년도 제3회) 필기",
  //     period: "2022-06-07 ~ 10",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91",
  //   },
  //   {
  //     background: "#474756",
  //     image: four,
  //     title: "공인중개사",
  //     d_day_h5: "D-140",
  //     licenseOrgan: "한국산업인력공단",
  //     date_span: "2022-10-29",
  //     type_p: "전문자격 (2022년도 33회 2차) 필기",
  //     period: "2022-08-08 ~ 14",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=331",
  //   },
  //   {
  //     background: "#305a7e",
  //     image: five,
  //     title: "산업안전기사",
  //     d_day_h5: "D-21",
  //     licenseOrgan: "한국산업인력공단",
  //     date_span: "2022-07-02",
  //     type_p: "국가기술자격 기사 (2022년도 제3회) 필기",
  //     period: "2022-06-07 ~ 10",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=96",
  //   },
  //   {
  //     background: "#b13c2f",
  //     image: six,
  //     title: "KBS한국어능력시험",
  //     d_day_h5: "D-8",
  //     licenseOrgan: "KBS 한국어진흥원",
  //     date_span: "2202-06-19",
  //     type_p: "제67회 KBS한국어능력시험",
  //     period: "2022-05-02 ~ 03",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=145",
  //   },
  //   {
  //     background: "#383f4e",
  //     image: seven,
  //     title: "요양보호사",
  //     d_day_h5: "D-56",
  //     licenseOrgan: "한국보건의료인국가시험원",
  //     date_span: "2022-08-06",
  //     type_p: "40회",
  //     period: "2022-06-03 ~ 10",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=1622601017",
  //   },
  //   {
  //     background: "#cd9308",
  //     image: eight,
  //     title: "ITQ",
  //     d_day_h5: "D-0",
  //     licenseOrgan: "한국생산성본부",
  //     date_span: "2022-06-11",
  //     type_p: "2022년 제6회 ITQ정기시험(2022.6.11)",
  //     period: "2022-05-06 ~ 11",
  //     link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=176",
  //   },
  // ];
  const data = [
    {
      background: "#e9b107",
      type_p: "제463회",
      period: "2202-04-25 ~ 30",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=155",
    },
    {
      background: "#4b3962",
      type_p: "제 59회",
      period: "2202-05-16 ~ 23",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=144",
    },
    {
      background: "#e16045",
      type_p: "국가기술자격 기사 (2202년도 제3회) 필기",
      period: "2022-06-07 ~ 10",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=91",
    },
    {
      background: "#474756",
      type_p: "전문자격 (2022년도 33회 2차) 필기",
      period: "2022-08-08 ~ 14",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=331",
    },
    {
      background: "#305a7e",
      type_p: "국가기술자격 기사 (2022년도 제3회) 필기",
      period: "2022-06-07 ~ 10",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=96",
    },
    {
      background: "#b13c2f",
      type_p: "제67회 KBS한국어능력시험",
      period: "2022-05-02 ~ 03",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=145",
    },
    {
      background: "#383f4e",
      type_p: "40회",
      period: "2022-06-03 ~ 10",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=1622601017",
    },
    {
      background: "#cd9308",
      type_p: "2022년 제6회 ITQ정기시험(2022.6.11)",
      period: "2022-05-06 ~ 11",
      link: "https://janet.co.kr/jnLics/licenseInfo.php?ld_id=176",
    },
  ];
  const [keywords, setKeywords] = useState([]);
  useEffect(() => {
    const word: {
      esRegdt: string;
      id: number;
      licenseOrgan: string;
      title: string;
      background: string;
      type_p: string;
      period: string;
      link: string;
    }[] = [];
    axios.get("http://localhost:3000/api/ranks").then((ranked) => {
      ranked.data.map(
        (
          api: {
            esRegdt: string;
            id: number;
            licenseOrgan: string;
            title: string;
          },
          index: number
        ) => {
          word.push({ ...data[index], ...api });
        }
      );
      setKeywords(word as []);
    });
  }, []);

  console.log(keywords, "keywords");
  return (
    <HotKeyword_section>
      <Tit_h1>
        <b>
          <Purple_span>HOT</Purple_span>
          키워드
        </b>
        TOP20
      </Tit_h1>
      <ListHot_ul>
        {keywords.map((ele: ListHotProps, index: number) => {
          const {
            background,
            esRegdt,
            id,
            licenseOrgan,
            link,
            period,
            title,
            type_p,
          } = ele;

          return (
            <ListHotLi
              key={id}
              index={index}
              background={background}
              name_h3={title}
              subtxt_p={licenseOrgan}
              type_p={type_p}
              period={period}
              link={link}
              esRegdt={esRegdt}
            />
          );
        })}
      </ListHot_ul>
    </HotKeyword_section>
  );
}

export default HotKeyword;
