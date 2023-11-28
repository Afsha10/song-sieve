import React from "react";

const ContentCheckbox = ({ label, checked, onChange }) => {
  return (
    <div>
      <label>
        Yes
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
      <label>
        No
        {label}
        <input type="checkbox" checked={checked} onChange={onChange} />
      </label>
    </div>
  );
};

export default ContentCheckbox;
