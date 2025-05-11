import React from "react";
import HomeSlider from "../components/HomeSlider";
import WhyChooseUs from "../components/WhyChooseUs";
import PartnerBanks from "../components/PartnerBanks";
import UserReview from "../components/UserReview";
import MissionVision from "../components/MissionVision";

const HomeLayout = () => {
  return (
    <>
      <HomeSlider />
      <WhyChooseUs />
      <UserReview />
      <PartnerBanks />
      <MissionVision />
    </>
  );
};

export default HomeLayout;
