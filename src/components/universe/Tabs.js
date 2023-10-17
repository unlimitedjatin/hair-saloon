'use client'
import React, { useState } from 'react';
import Shorthair from './shortHair';
import Mediumhair from './mediumHair';
import Longhair from './longHair';
function Tabs() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <ul className="flex justify-center gap-5">
        <li
          className={`hair-tab cursor-pointer ${
            activeTab === 1 ? 'hair-tab-active' : ''
          }`}
          onClick={() => handleTabClick(1)}
        >
          Short-length Haircuts
        </li>
        <li
          className={`hair-tab cursor-pointer ${
            activeTab === 2 ? 'hair-tab-active' : ''
          }`}
          onClick={() => handleTabClick(2)}
        >
          Medium-length Haircuts
        </li>
        <li
          className={`hair-tab cursor-pointer ${
            activeTab === 3 ? 'hair-tab-active' : ''
          }`}
          onClick={() => handleTabClick(3)}
        >
          Long-length Haircuts
        </li>
      </ul>
      <div className="mt-4">
        {activeTab === 1 && <div> < Shorthair /></div>}
        {activeTab === 2 && <div>< Mediumhair /></div>}
        {activeTab === 3 && <div> < Longhair /> </div>}
      </div>
    </div>
  );
}

export default Tabs;
