import { useState } from "react";
import Button from '../components/button';
import Table from '../components/table';
import Tabs from '../components/tabs';

export default function PanelMain() {
const columns = ["Types", "Avg. Efficiency (%)", "Lifespan (Years)", "Pros", "Cons"];
const rows = [
  ["Polycrystalline", "18-21", "25-30", "cheaper than monocrystalline", "Discontinued (not available)"],
  ["Monocrystalline	", "20-25",	"30-40",	"Most efficient type available",	"More expensive than some types"],
  ["Thin-film",	"17-19",	"10-20",	"Most flexible option",	"Low power output"],
  ["Transparent",	"1",	"25-35",	"Blends in with windows",	"Low efficiency"],
  ["Solar tiles", "10-20",	"25-30",	"Blends in with roofs",	"Very expensive"],
  ["Perovskite",	"29-31",	"25-35",	"Highest efficiency",	"Not yet commercially available"],
];
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap ">
      <div className="w-full flex justify-start items-center gap-4 mb-4 flex-wrap text-neutral-hovered ">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2">All About Solar Panels</h1>
        <p className="mb-4">Solar panels are no longer a futuristic concept—they’re a mainstream energy solution powering millions of homes worldwide. But with so many types available, how do you choose the right one?
        </p>
        <p className="mb-4">This comprehensive guide explores the six main types of solar panels, their pros and cons, efficiency ratings, lifespans, and real-world applications. Whether you're a homeowner looking to cut energy bills or a tech enthusiast curious about next-gen solar innovations, this guide has everything you need</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold ">1. Monocrystalline Solar Panels: The Gold Standard</h3>
        <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">What Are They?</h5>
        <p className="mb-4">Monocrystalline panels are made from a single silicon crystal, giving them a sleek black appearance and superior efficiency. They dominate the market, making up 98% of global solar shipments in 2023.</p>
         <p className="mb-4">
          This type of solar panels have a high grade of efficiency ranging between 20-25% (highest among commercial panels). The lifespan of these solar panels is expected to be 30-40 years with an impressive power output range of 500W–700W under standard testing conditions. This makes them some of the most powerful panels available. The best use case for these solar panels is for homeowners with limited roof space who want maximum efficiency
        </p>
        <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">Pros & Cons</h5>
        <div className="w-full flex text-body-sm flex-wrap sm:flex-nowrap">
          <div className="w-full bg-semantic-success-bg p-4">
            <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">✅ Pros</h5>
            🔹 Highest efficiency<br></br>
            🔹 Long lifespan<br></br>
            🔹 Sleek, modern look<br></br>
            🔹 Best performance in hot weather (low temperature coefficient)
          </div>
          <div className="w-full bg-semantic-error-bg p-4">
            <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">❌ Cons</h5>
            🔹 More expensive than other types<br></br>
            🔹 Energy-intensive manufacturing<br></br>
          </div>
        </div>
        <p className="mb-4">Monocrystalline panels are made from a single silicon crystal, giving them a sleek black appearance and superior efficiency. They dominate the market, making up 98% of global solar shipments in 2023.</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold ">Which Solar Panel type is Best for You?</h3>
        <div className="w-full border border-neutral-regular rounded-curve-xl justify-center items-center flex flex-wrap gap-4">
          <div className="p-4">
            <Table columns={columns} rows={rows} size="md" style="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}