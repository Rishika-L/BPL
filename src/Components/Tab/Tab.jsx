import React, { useState, useEffect } from "react";
import styles from "./Tabs.module.css";
import Button from "../Buttons/Button";

const Tabs = ({ tabs, active }) => {
  const [activeTab, setActiveTab] = useState(active);

  useEffect(() => {
    active?setActiveTab(active): setActiveTab(tabs[0]?.id);
  }, [active]);

  const renderTabContent = () => {
    const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;
    return (
      activeTabContent || (
        <div className="p-4">Select a tab to see the content.</div>
      )
    );
  };

  return (
    <div>
      {/* TAB */}
      <div className="flex border-b border-secondary-400">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 -mb-px text-md ${
              activeTab === tab.id ? styles["tab-active"] : "text-secondary-800"
            }`}
          >
            {tab.label}
          </button>
        ))}

        {/* <Button className="ml-auto primary__btn mb-3"  label={"hello"} /> */}
      </div>

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};

export default Tabs;
