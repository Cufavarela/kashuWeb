import React from "react";

function FeatureItem({ icon, title, description }) {
  return (
    <div className="mt-3">
      <div className="d-flex justify-content-center align-items-center">
        <div className="feature-icon-wrapper p-2 mx-2">
          <i className={`${icon}`} />
        </div>
        <h4>{title}</h4>
      </div>
      <p className="mt-3">{description}</p>
    </div>
  );
}

export default FeatureItem;
