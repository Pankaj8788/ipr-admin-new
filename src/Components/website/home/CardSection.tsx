import React from "react";
import HomeCard from "../card/home/HomeCard";
import { homeArr } from "ipadmin/utils/website/home";

export default function CardSection() {
  return (
    <section className="w-full main-container flex flex-col items-start justify-start gap-12 my-12 mt-96">
      {homeArr.map((item) => (
        <HomeCard item={item} key={item.id} />
      ))}
    </section>
  );
}
