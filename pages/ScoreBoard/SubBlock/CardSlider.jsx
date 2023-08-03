import React from "react";
import { AppContext } from "../AppContext";
import Slider from "react-slick";
import { ClanCard } from "../../../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClanModalPopup from "../../../components/Modal";
import CardHighlight from "./CardHighlight";

export default function CardSlider() {
  const [open, setOpen] = React.useState(false);
  const [clanName, setClan] = React.useState("");
  const handleOpen = (clan) => {
    setClan(clan);
    setOpen(true);
  };

  const { data, loading, result, setResult, theme, setTheme } =
    React.useContext(AppContext);

  const settings = {
    dots: true,
    className: "center",
    centerPadding: "50px",
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <ClanModalPopup open={open} setOpen={setOpen} clan={clanName}>
        <CardHighlight clan={clanName} />
      </ClanModalPopup>
      <Slider {...settings}>
        {result?.map((clan, idx) => (
          <ClanCard
            key={idx}
            rank={idx + 1}
            clan={clan}
            onClick={() => handleOpen(clan)}
          ></ClanCard>
        ))}
      </Slider>
    </div>
  );
}
