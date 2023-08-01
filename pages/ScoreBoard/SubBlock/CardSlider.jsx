import React from "react";
import { AppContext } from "../AppContext";
import Slider from "react-slick";
import { ClanCard } from "../../../components/Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ClanModalPopup from "../../../components/Modal";

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
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
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
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <ClanModalPopup open={open} setOpen={setOpen} clan={clanName} />
      <Slider {...settings}>
        {result.map((clan, idx) => (
          <div key={idx}>
            <ClanCard
              rank={idx + 1}
              clan={clan}
              onClick={() => handleOpen(clan)}
            ></ClanCard>
          </div>
        ))}
      </Slider>
    </div>
  );
}
