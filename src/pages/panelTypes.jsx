import { useState } from "react";
import Button from '../components/button'

export default function PanelTypes() {
  return (
    <div className="flex justify-center items-center gap-4 mb-4 flex-wrap ">
      <div className="w-full flex justify-center items-center gap-4 mb-4 flex-wrap">
        <h1 className="w-full h-min text-body-xxl font-bold border-b border-white-600 py-2">All About Solar Panels</h1>
        <p className="w-full h-min text-body-md text-gray-950 font-normal">The six main types of solar panels are polycrystalline, monocrystalline, thin-film, transparent, solar tiles, and perovskite. All of these are photovoltaic panels – meaning they use daylight to generate electricity – and they’re all categorised based on their material.</p>
        <p className="w-full h-min text-body-md text-gray-950 font-normal mb-4 ">Explore the variations below to understand its full potential and how you can integrate it effortlessly into your Tailwind-based projects.</p>
        <h3 className="w-full h-min text-body-lg font-semibold">Button</h3>
        <p className="w-full h-min text-body-md text-gray-950 font-normal">This is the foundational version of the DC Button, featuring a clean layout with a neutral color palette and a subtle gradient style. Interactive states like hover and active transitions provide smooth feedback to enhance user experience. It’s perfect for general use across dashboards, forms, and utility actions.</p>
        <div className="w-full border border-white-600 rounded-curve-xl justify-center items-center px-6 py-8 flex flex-wrap gap-4">
          <Button
            size="md"
            style="primary"
            variant="gradient"
            shape="rounded"
            iconSize="md"
            disabled={false}
            showLeftIcon={false}
            showRightIcon={false}
            iconLeftName="Placeholder-Outline"
            iconRightName="Placeholder-Filled"
            >
            Basic Button
          </Button>
        </div>
      </div>
    </div>
  );
}