import React from "react";
import FeatureCard from "./FeatureCard";

function Features() {
  return (
    <div className="feature-parent">
      <FeatureCard
        img="https://www.amexglobalbusinesstravel.com/content/uploads/2021/03/axp_global_icon_travel_bblue_rgb_1x.png"
        title="Corporate Travel and Expense Management"
        subtitle="From a ready-to-go travel program to a customized approach, our solutions vary but our high-quality service remains."
      />
      <FeatureCard
        img="https://www.amexglobalbusinesstravel.com/content/uploads/2021/03/GBTp_icon_event_dblue_rgb@1x.png"
        title="Meetings & Events"
        subtitle="We go all out to create engaging experiences for you and your employees, whether your meeting is live, virtual, or a hybrid of both."
      />
      <FeatureCard
        img="https://www.amexglobalbusinesstravel.com/content/uploads/2021/03/GBTp_icon_management_bblue_cmyk_2x@2x.png"
        title="Global Business Consulting"
        subtitle="Whether you’re looking to get better rates with suppliers or you need an effective corporate travel policy, our consultants can set you up for success."
      />
    </div>
  );
}

export default Features;
