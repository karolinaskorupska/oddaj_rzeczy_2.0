import React from "react";
import BtnGiveAway from './BtnGiveAway';
import BtnOrganize from './BtnOrganize';

const HeaderButtons = () => {
  return (
    <div className="headerButtons">
      <BtnGiveAway />
      <BtnOrganize />
    </div>
  );
};

export default HeaderButtons;
