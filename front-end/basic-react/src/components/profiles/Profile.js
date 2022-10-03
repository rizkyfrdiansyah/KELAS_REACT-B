import React from "react";

const Profile = (props) => {
  const { name, hobby } = props;
  return (
    // React Fragment
    <>
      <h3>Halo, nama saya {name}</h3>
      <p>Hobby saya {hobby}</p>
    </>
  );
};

export default Profile;
