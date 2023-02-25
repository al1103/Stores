import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Profile.module.scss";
import { Bags } from "../../App";
const Cx = classNames.bind(style);

function Profile() {
  const navigate = useNavigate();
  const [account, setAccount] = useContext(Bags).account;

  const [image, setImage] = useState(account.image ? account.image : "");
  const [fullName, setFullName] = useState(
    account.firstname ? account.firstname : ""
  );
  const [displayName, setDisplayName] = useState(
    account.lastname ? account.lastname : ""
  );
  const [role, setRole] = useState(account.email ? account.email : "");
  const [location, setLocation] = useState(
    account.password ? account.password : ""
  );
  const [bio, setBio] = useState(account.bio ? account.bio : "");

  const handleHome = async () => {
    setAccount({
      ...account,
      image,
      fullName,
      displayName,
      role,
      location,
    });

    const fetchUser = await fetch(
      `https://api-by-zilong.onrender.com/users/${account.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          displayName,
          role,
          location,
          image,
        }),
      }
    );
    navigate("/");
  };
  const handleViewAvatar = () => {
    const file = document.getElementById("up_file");
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const result = fileReader.result;
      const img = document.querySelector(".img");
      img.src = result;
      setImage(result);
      console.log(result);
    };
    fileReader.readAsDataURL(file.files[0]);
  };
  const remoteAvatar = () => {
    const img = document.querySelector(".img");
    img.src = "https://via.placeholder.com/80/fff.png ";
  };

  return (
    <div className={Cx("popup")}>
      <div className={Cx("popup__in")}>
        <h1>Profile</h1>
        <div className={Cx("popup_user")}>
          <div className={Cx("popup__category")}>Your Avatar</div>
          <div className={Cx("popup__line")}>
            <div className={Cx("popup_user__image")}>
              <img
                className={Cx("img")}
                src={image || "https://via.placeholder.com/80/fff.png"}
                alt="avatar"
              />
            </div>
            <div className={Cx("popup__details")}>
              <div className={Cx("popup__loading")}>
                <input
                  type="file"
                  onChange={handleViewAvatar}
                  id="up_file"
                  className={Cx("popup__file")}
                />
                <label
                  htmlFor="up_file"
                  className={Cx("popup__btn", "btn_file")}
                >
                  Upload New
                </label>
              </div>
              <button
                className={Cx("popup__btn", "btn_gray")}
                onClick={remoteAvatar}
              >
                Delete Avatar
              </button>
            </div>
          </div>
        </div>
        <div className={Cx("popup__fieldset")}>
          <div className={Cx("popup__row")}>
            <div className={Cx("popup__field", "field")}>
              <div className={Cx("field__label")}>First Name</div>
              <div className={Cx("field__wrap")}>
                <input
                  className={Cx("field__input")}
                  type="text"
                  value={fullName ?? ""}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
            </div>
            <div className={Cx("popup__field", "field")}>
              <div className={Cx("field__label")}>Last Name</div>
              <div className={Cx("field__wrap")}>
                <input
                  className={Cx("field__input")}
                  type="text"
                  value={displayName ?? ""}
                  onChange={(e) => setDisplayName(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={Cx("popup__row")}>
            <div className={Cx("popup__field", "field")}>
              <div className={Cx("field__label")}>Email</div>
              <div className={Cx("field__wrap")}>
                <input
                  className={Cx("field__input")}
                  type="text"
                  value={role ?? ""}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>
            </div>
            <div className={Cx("popup__field", "field")}>
              <div className={Cx("field__label")}>Password</div>
              <div className={Cx("field__wrap")}>
                <input
                  className={Cx("field__input")}
                  type="text "
                  value={location ?? ""}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={Cx("popup__row")}></div>
          <div className={Cx("popup__field", "field")}>
            <div className={Cx("field__label")}>Bio</div>
            <textarea
              className={Cx("field__textarea")}
              value={bio ?? ""}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
        </div>
        <button
          className={Cx("popup__btn", "btn_purple")}
          onClick={handleHome}
          type="submit"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
}

export default Profile;
