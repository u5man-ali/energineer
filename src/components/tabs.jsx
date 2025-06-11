// src/components/Tabs.jsx
import clsx from "clsx";
import { useEffect, useState } from "react";

const sizes = {
  sm: {
    text: "text-body-sm",
    padding: "px-6 py-2",
    corner: "rounded-tl-curve-sm rounded-tr-curve-sm",
  },
  md: {
    text: "text-body-md",
    padding: "px-6 py-3",
    corner: "rounded-tl-curve-md rounded-tr-curve-md",
  },
  lg: {
    text: "text-body-lg",
    padding: "px-6 py-4",
    corner: "rounded-tl-curve-lg rounded-tr-curve-lg",
  },
};

const styles = {
  primary: {
    base: "border border-brand-primary-strong text-brand-primary-focused",
    active: "border border-brand-primary-strong bg-brand-primary-rest text-neutral-white",
  },
  neutral: {
    base: " text-neutral-focused",
    active: "border border-neutral-regular bg-neutral-secondary",
  },
  transparent: {
    base: "bg-transparent text-neutral-default",
    active: "bg-neutral-secondary",
  },
};

export default function Tabs({
  tabs = [],
  size = "md",
  style = "neutral",
  iconName = null,
  defaultActive = 0,
  className = "",
  onSelect = () => {},
}) {
  const [activeTab, setActiveTab] = useState(defaultActive);
  const [Icon, setIcon] = useState(null);

  const handleSelect = (id, index) => {
    setActiveTab(index);
    onSelect(id); // returns tab id to parent
  };

  useEffect(() => {
    if (iconName) {
      import(`../icons/${iconName}.svg?react`)
        .then((icon) => setIcon(() => icon.default))
        .catch((error) =>
          console.error(`Error loading icon '${iconName}':`, error)
        );
    }
  }, [iconName]);

  return (
    <div className={clsx("w-full", className)}>
      <div className="flex">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            onClick={() => handleSelect(tab.id, index)}
            role="button"
            className={clsx(
              "transition-all duration-300 ease-in-out font-medium cursor-pointer color-collapse focus:outline-none",
              sizes[size]?.padding,
              sizes[size]?.corner,
              styles[style]?.base,
              index === activeTab && styles[style]?.active,
              sizes[size]?.text
            )}
          >
            <div className="flex items-center gap-2">
              {Icon && <Icon className="w-4 h-4" />}
              <span>{tab.title}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}