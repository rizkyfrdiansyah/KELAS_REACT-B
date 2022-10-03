import React, { useState } from "react";
import "./ListItem.css";

const ListItem = () => {
  const [profiles, setProfiles] = useState([
    {
      id: 1,
      name: "Thousand Sunny",
      image: "https://images.tokopedia.net/img/cache/500-square/product-1/2017/3/25/741112/741112_5896c910-6019-491d-9774-3ec8fd76b5cb_2048_1386.jpg",
      details: `Strawhat pirates`,
      type: "caravel",
    },
    {
      id: 2,
      name: "Merry Go",
      image: "https://static.wikia.nocookie.net/onepiece/images/b/b1/Thousand_Sunny_Infobox.png/revision/latest?cb=20220904012119",
      details: `Strawhat pirates ex`,
      type: "boat",
    },
    {
      id: 3,
      name: "Oro Jackson",
      image: "https://www.greenscene.co.id/wp-content/uploads/2020/06/Roger.jpg",
      details: `King pirates`,
      type: "galleon",
    },
  ]);

  return (
    <>
      <div className="container">
        <div className="row">
          {profiles.map((profile) => {
            const { id, name, image, details, type } = profile;
            return (
              <div key={id} className="col-md-3">
                <div className="card">
                  <div className="card-img-top">
                    <img className="img-fluid" src={image} alt="" />
                  </div>
                  <div className="card-body">
                    <h5>{name}</h5>
                    <p>{details}</p>
                    <small className="badge bg-primary">{type}</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ListItem;
