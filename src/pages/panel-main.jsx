import {useState} from "react";
import Table from '../components/table';
import Tabs from '../components/tabs';

const section = [
  {id: "type1", title: "Monocrystalline"},
  {id: "type2", title: "Polycrystalline"},
  {id: "type3", title: "Thin Film"},
  {id: "type4", title: "Transparent"},
  {id: "type5", title: "Solar Tiles"},
  {id: "type6", title: "Perovskite"}
  
]
export default function PanelMain() {
  const [selectedTab, setSelectedTab] = useState(section[0].id);
  const columns = ["Types", "Avg. Efficiency (%)", "Lifespan (Years)", "Pros", "Cons"];
  const rows = [
    ["Monocrystalline	", "20-25",	"30-40",	"Most efficient type available",	"More expensive than some types"],
    ["Polycrystalline", "18-21", "25-30", "cheaper than monocrystalline", "Discontinued (not available)"],
    ["Thin-film",	"17-19",	"10-20",	"Most flexible option",	"Low power output"],
    ["Transparent",	"1",	"25-35",	"Blends in with windows",	"Low efficiency"],
    ["Solar tiles", "10-20",	"25-30",	"Blends in with roofs",	"Very expensive"],
    ["Perovskite",	"29-31",	"25-35",	"Highest efficiency",	"Not yet commercially available"],
];
  return (
    <div className="flex justify-center items-start gap-4 flex-wrap h-screen">
      <div className="w-full flex justify-start items-center gap-4 mb-4 flex-wrap text-neutral-hovered ">
        <h1 className="w-full h-min text-body-xxl text-neutral-default font-bold border-b border-neutral-regular py-2">All About Solar Panels</h1>
        <p className="mb-4">Solar panels are no longer a futuristic concept—they’re a mainstream energy solution powering millions of homes worldwide. But with so many types available, how do you choose the right one?
        </p>
        <p className="mb-4">This comprehensive guide explores the six main types of solar panels, their pros and cons, efficiency ratings, lifespans, and real-world applications. Whether you're a homeowner looking to cut energy bills or a tech enthusiast curious about next-gen solar innovations, this guide has everything you need</p>
        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold py-4">Types of Solar Panels</h3>
        <div className="w-full"> 
            <Tabs 
            tabs={section}
            size="md"
            style="primary"
            defaultActive={0}
            onSelect={(id) => setSelectedTab(id)}
            tabClassName="flex-1"
            />
        </div>
        {selectedTab === "type1" && //tab1 selector and content div starting here
        <div>
            <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold text-center py-4"> Monocrystalline Solar Panels: The Gold Standard</h3>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold mb-4">What Are They?</h5>
            <p className="mb-4">Monocrystalline panels are made from a single silicon crystal, giving them a sleek black appearance and superior efficiency. They dominate the market, making up 98% of global solar shipments in 2023.</p>
            <p className="mb-4">
              This type of solar panels have a high grade of efficiency ranging between 20-25% (highest among commercial panels). The lifespan of these solar panels is expected to be 30-40 years with an impressive power output range of 500W–700W under standard testing conditions. This makes them some of the most powerful panels available. The best use case for these solar panels is for homeowners with limited roof space who want maximum efficiency
            </p>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold mb-4">Pros & Cons</h5>
            <div className="w-full flex text-body-sm flex-wrap sm:flex-nowrap mb-4">
              <p className="w-full bg-semantic-success-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">✅ Pros</h5>
                🔹 Highest efficiency<br></br>
                🔹 Long lifespan<br></br>
                🔹 Sleek, modern look<br></br>
                🔹 Best performance in hot weather (low temperature coefficient)
              </p>
              <p className="w-full bg-semantic-error-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">❌ Cons</h5>
                🔹 More expensive than other types<br></br>
                🔹 Energy-intensive manufacturing<br></br>
              </p>
            </div>
            <p className="mb-4">Monocrystalline panels are made from a single silicon crystal, giving them a sleek black appearance and superior efficiency. They dominate the market, making up 98% of global solar shipments in 2023.</p>
        </div>}
        {selectedTab === "type2" && //tab2 selector and content div starting here
        <div>
            <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold text-center py-4">Polycrystalline Solar Panels</h3>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">What Are They?</h5>
            <p className="mb-4">Polycrystalline panels were once popular but have vanished from production since 2023. They were made from multiple silicon fragments, giving them a blue, speckled appearance </p>
            <p className="mb-4">
              These solar panels are a story of past with efficiency of 18-21% a decent lifespan of 25-30 years with an average output of around 400W under standard testing conditions. But they are mostly discontinued and are not available new.
            </p>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold mb-4">Pros & Cons</h5>
            <div className="w-full flex text-body-sm flex-wrap sm:flex-nowrap mb-4">
              <p className="w-full bg-semantic-success-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">✅ Pros</h5>
                🔹 The only benefit of these solar panels is that they might be available for a cheap price
              </p>
              <p className="w-full bg-semantic-error-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">❌ Cons</h5>
                🔹 Lower efficiency<br></br>
                🔹 Bulkier and require more space<br></br>
                🔹 No longer in manufacturing
              </p>
            </div>
            <p className="mb-4">Nobody should use them or try to source them — unless you’re buying second-hand (which we don’t recommend due to degraded performance)</p>
        </div>}
        {selectedTab === "type3" && //tab3 selector and content div starting here
        <div>
            <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold text-center py-4">Thin Film Solar Panels: The Flexible Alternative</h3>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">What Are They?</h5>
            <p className="mb-4">Thin-film panels are lightweight, flexible sheets made from materials like amorphous silicon, cadmium telluride (CdTe), or copper indium gallium selenide (CIGS). They’re ideal for non-traditional installations like RVs, boats, or curved surfaces. </p>
            <p className="mb-4">
            These solar panels have a lower efficiency than their crystalline counterparts, ranging between 17-19%. Their lifespan is also shorter around 10-20 years. These are best for portable use or unconventional surfaces and conditions.
            </p>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold mb-4">Pros & Cons</h5>
            <div className="w-full flex text-body-sm flex-wrap sm:flex-nowrap mb-4">
              <p className="w-full bg-semantic-success-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">✅ Pros</h5>
                🔹 Lightweight & Flexible<br></br>
                🔹 Cheaper than monocrystalline panels<br></br>
                🔹 Performs better in low light conditions
              </p>
              <p className="w-full bg-semantic-error-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">❌ Cons</h5>
                🔹 Lower efficiency<br></br>
                🔹 Shorter lifespan<br></br>
                🔹 Not suitable for powering entire home or building
              </p>
            </div>
            <p className="mb-4">If you need flexible, portable solar (e.g., for camping or a tiny home), thin-film is a solid choice.</p>
        </div>}
        {selectedTab === "type4" && //tab4 selector and content div starting here
        <div>
            <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold text-center py-4">Transparent Solar Panels: The Future of Solar Windows</h3>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">What Are They?</h5>
            <p className="mb-4">Transparent solar panels are see-through or semi-transparent, designed to replace windows or glass facades. Currently, they have very low efficiency (1% for fully transparent, ~20% for semi-transparent).</p>
            <p className="mb-4">
            These solar panels have yet to find their foothold in the market as their efficiency is very low. Best use is for commercial buildings, greenhouses etc.
            </p>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold mb-4">Pros & Cons</h5>
            <div className="w-full flex text-body-sm flex-wrap sm:flex-nowrap mb-4">
              <p className="w-full bg-semantic-success-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">✅ Pros</h5>
                🔹 Blends into the architecture<br></br>
                🔹 Dual purpose serves as a window glass + energy generator
              </p>
              <p className="w-full bg-semantic-error-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">❌ Cons</h5>
                🔹 Very low efficiency<br></br>
                🔹 Very expensive
              </p>
            </div>
            <p className="mb-4">Only suitable for architects and businesses looking for aesthetic solar integration—but not yet practical for residential use.</p>
        </div>}
        {selectedTab === "type5" && //tab5 selector and content div starting here
        <div>
            <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold text-center py-4">Solar Tiles: An Invisible Solar Solution</h3>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">What Are They?</h5>
            <p className="mb-4">Solar tiles (like Tesla Solar Roof) replace traditional roof tiles while generating electricity. They blend in seamlessly but come at a high cost.</p>
            <p className="mb-4">
            This type of solar cell inegrated tiles are 10-20% efficient but can last upto 25-30 years. This a best solution for luxury homes where aesthetics is a priority over economy.
            </p>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold mb-4">Pros & Cons</h5>
            <div className="w-full flex text-body-sm flex-wrap sm:flex-nowrap mb-4">
              <p className="w-full bg-semantic-success-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">✅ Pros</h5>
                🔹 Looks like a normal roof<br></br>
                🔹 Takes not extra space or mounting structure.
              </p>
              <p className="w-full bg-semantic-error-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">❌ Cons</h5>
                🔹 Lower efficiency<br></br>
                🔹 Very expensive
              </p>
            </div>
            <p className="mb-4">Only suitable for home owners who prioritize aesthetics over cost-efficiency</p>
        </div>}
        {selectedTab === "type6" && //tab6 selector and content div starting here
        <div>
            <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold text-center py-4">Perovskite Solar Panels: The Next Big Thing</h3>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">What Are They?</h5>
            <p className="mb-4">Perovskite is a new synthetic material that could revolutionize solar efficiency (lab tests show up to 31% efficiency). However, they’re not yet commercially stable</p>
            <p className="mb-4">
            Perovskite is a calcium titanium oxide mineral, but in solar applications, it refers to human-made compounds with the same crystal structure. These lab-created materials can absorb sunlight more efficiently than silicon while being ultra-thin and flexible.</p>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold ">Why aren't Perovskite panels available?</h5>
            <p className="mb-4">
              Despite their promising stats, perovskite solar panels face three major hurdles before mass adoption can be possible:<br></br>
              1. <strong> Durability Issues</strong> Unlike silicon panels that last 25-40 years, perovskite panels degrade within months when exposed to Oxygen (due to oxidation), moisture (due to decomposition) and UV light (breaks down the material over time). Current research focuses on encapsulation techniques (protective coatings) to extend the lifespans.<br></br>
              2. <strong>Scaling Up Production</strong> Lab made perovskite cells are very tiny, only a few square centimeters. Mass production in large quantities is not feasible due to defects and durability challenges.<br></br>
              3. <strong>Lead Content Concerns</strong> Most perovskite formulations contain small amount fo lead, raising environmental and health concerns. Researchers have tried other materials in testing like tin-based alternatives but efficiency drops in that case.
            </p>
            <h5 className="w-full h-min text-body-md text-neutral-default font-semibold mb-4">Pros & Cons</h5>
            <div className="w-full flex text-body-sm flex-wrap sm:flex-nowrap mb-4">
              <p className="w-full bg-semantic-success-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">✅ Pros</h5>
                🔹 Potential for ultra-high efficiency<br></br>
                🔹 Cheaper to manufacture
              </p>
              <p className="w-full bg-semantic-error-bg p-4">
                <h5 className=" h-min text-body-md text-neutral-default font-semibold mb-2">❌ Cons</h5>
                🔹 Not yet durable or environementally friendly to mass adoption
              </p>
            </div>
            <p className="mb-4">Only suitable for home owners who prioritize aesthetics over cost-efficiency</p>
        </div>}

        <h3 className="w-full h-min text-body-lg text-neutral-default font-semibold ">Which Solar Panel type is Best for You?</h3>
        <div className="w-full overflow-x-auto border border-neutral-regular rounded-curve-xl justify-start items-center flex mb-40">
          <div className="p-4">
            <Table columns={columns} rows={rows} size="md" style="primary" />
          </div>
        </div>
      </div>
    </div>
  );
}