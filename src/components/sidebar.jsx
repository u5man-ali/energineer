// src/components/sidebar.jsx
import { useState } from "react";
import Button from './button';

// Sidebar structure with parent and child sections
const sections = [
  { 
    id: "introduction",
    label: "Introduction"
  },
  { 
    id: "solarPanels",
    label: "Solar Panels",
    children: [
      { id: "panelMain", label: "About Solar Panels", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "panelSpecs", label: "Specs & Datasheets", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "panelCalculation", label: "Design Calculations", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "panelProcurement", label: "Procurement", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "panelInstallation", label: "Installation Guide", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "panelMaintenance", label: "Repair & Maintenance", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
    ]
  },
  { 
    id: "supportStructure",
    label: "Support Structures",
    children: [
      { id: "structTypes", label: "Load Types", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "structSpecs", label: "Specifications", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "structCalculation", label: "Design Calculations", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "structProcurement", label: "Procurement Tips", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "structInstallation", label: "Installation Guide", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "structMaintenance", label: "Structural Maintenance", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
    ]
  },
  { 
    id: "inverters",
    label: "Inverters",
    children: [
      { id: "inverterTypes", label: "Types", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "inverterSpecs", label: "Specifications", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "inverterCalculation", label: "Design Calculations", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "inverterProcurement", label: "Procurement", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "inverterInstallation", label: "Installation Guide", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "inverterMaintenance", label: "Troubleshooting", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
    ]
  },
  { 
    id: "connect",
    label: "Connectivity",
    children: [
      { id: "connectTypes", label: "Wiring & Connections", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "connectSpecs", label: "Specifications", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "connectCalculation", label: "Design Calculations", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "connectProcurement", label: "Procurement", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "connectInstallation", label: "Installation", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "connectMaintenance", label: "Maintenance", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
    ]
  },
  { 
    id: "storage",
    label: "Energy Storage",
    children: [
      { id: "storageTypes", label: "Battery Types", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "storageSpecs", label: "Specs", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "storageCalculation", label: "Design Calculations", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "storageProcurement", label: "Procurement", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "storageInstallation", label: "Installation", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "storageMaintenance", label: "Maintenance", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
    ]
  },
  { 
    id: "safety",
    label: "Safety",
    children: [
      { id: "safetyTypes", label: "Circuit Breakers ", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "safetySpecs", label: "Specs & Datasheets", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "safetyCalculation", label: "Design Calculations", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "safetyProcurement", label: "Procurement", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "safetyInstallation", label: "Installation", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
      { id: "safetyMaintenance", label: "Maintenance", showLeftIcon: true, iconLeftName: "Arrow-Turn-Down-Right-Outline"},
    ]
  },
];

export default function Sidebar({ onSelect }) {
  const [active, setActive] = useState("introduction");
  const [expanded, setExpanded] = useState({});

  const handleSelect = (id, parentId = null) => {
    setActive(id);
    onSelect(id);

  };

  const toggleDropdown = (id) => {
    setExpanded(prev => {
      if (prev[id]) {
        return{};
      }
      return { [id]: true};
    }) 
  };

  return (
    <aside className="h-screen w-full overflow-y-auto px-4 py-6">
      <nav className="flex flex-col gap-1">
        {sections.map((section) => {
          const isExpanded = expanded[section.id] || section.children?.some(child => child.id === active);
          const isActive = active === section.id;
          return (
            <div key={section.id} className="flex flex-col">
              <Button
                size="md"
                variant={isActive ? "solid" : isExpanded ? "link" : "transparent"}
                style={isActive ? "primary" : isExpanded ? "primary" : "secondary"}
                shape="rounded"
                iconSize="md"
                showLeftIcon={!!section.iconLeftName}
                showRightIcon={!!section.children}
                iconLeftName={section.iconLeftName}
                iconRightName={section.children ? (isExpanded ? "Chevron-Up-Outline" : "Chevron-Down-Outline") : null}
                onClick={() => {
                  if (section.children) {
                    toggleDropdown(section.id); // sidebar item has children, toggle dropdown
                  } else {
                    handleSelect(section.id); // sidebar item has no children, select it directly
                  }
                }}
                className="justify-start"
              >
                <span className="flex-1 truncate text-left">{section.label}</span>
              </Button>

              {section.children && (
                <div className={`overflow-hidden transition-all duration-300 ease-in-out
                ${isExpanded ? "max-h-80 py-1" : "max-h-0"} flex flex-col gap-1`}> {
                  section.children.map((child) => (
                    <Button
                      key={child.id}
                      size="sm"
                      variant={active === child.id ? "solid" : "transparent"}
                      style={active === child.id ? "primary" : "secondary"}
                      shape="rounded"
                      iconSize="sm"
                      showLeftIcon={true}
                      iconLeftName= "Arrow-Turn-Down-Right-Outline"
                      showRightIcon={false}
                      onClick={() => handleSelect(child.id, section.id)}
                      className="justify-start text-body-md text-left"
                    >
                      {child.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}