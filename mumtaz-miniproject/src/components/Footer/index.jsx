import React from "react";

const Footer = () => {
  return (
    <>
      <div className="mx-4 pt-3 footer">
        <div className="row">
          <div className="col footer_logo">
            Mari<span className="logo">Baca.co</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="footer_text">Rumah bagi para pencurah tinta hati, pemerhati makna hidup, alur hidup, siklus kehidupan. Siapapun dapat berkontribusi di maribaca.co.</p>
          </div>
        </div>
      </div>
      <div className="bg_primary">
        <p className="text-center">copyright 2022</p>
      </div>
    </>
  );
};

export default Footer;
