import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import style from "./Profile.module.scss";
const Cx = classNames.bind(style);

function Profile() {
  let { id } = useParams();

  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(
        `https://api-by-zilong.onrender.com/users/${id}`
      );
      const data = await response.json();
      if (data) {
        const { Image, firstname, lastname, email, password, bio } = data;
        setUserImage(Image);
        setUserFirstname(firstname);
        setUserLastname(lastname);
        setUserEmail(email);
        setUserPassword(password);
        setUserBio(bio);
        setAccount(data);
      }
    };
    fetchUser();
  }, []);
  const [userImage, setUserImage] = useState("");
  const [userFirstname, setUserFirstname] = useState("");
  const [userLastname, setUserLastname] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userBio, setUserBio] = useState("");

  const handleHome = async () => {
    const fetchUser = await fetch(
      `https://api-by-zilong.onrender.com/users/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Image: userImage,
          firstname: userFirstname,
          lastname: userLastname,
          password: userPassword,
          bio: userBio,
          id: id,
        }),
      }
    );
    localStorage.setItem(
      "account",
      JSON.stringify({
        Image: userImage,
        firstname: userFirstname,
        lastname: userLastname,
        password: userPassword,
        bio: userBio,
        id: id,
      })
    );
    alert("Update Success");
    navigate("/");
  };
  const handleViewAvatar = () => {
    const file = document.getElementById("up_file");
    const fileReader = new FileReader();

    fileReader.onload = () => {
      const result = fileReader.result;
      const img = document.querySelector(".img");
      img.src = result;
      setUserImage(result);
    };
    fileReader.readAsDataURL(file.files[0]);
  };
  const remoteAvatar = () => {
    const img = document.querySelector(".img");
    img.src = "https://via.placeholder.com/80/fff.png ";
    setUserImage("https://via.placeholder.com/80/fff.png ");
  };

  return (
    <div className={Cx("popup")}>
      <div className={Cx("popup__in")}>
        <h1>Profile</h1>
        <div className={Cx("popup_user")}>
          <div className={Cx("popup__category")}>
            {userFirstname} {userLastname}
          </div>
          <div className={Cx("popup__line")}>
            <div className={Cx("popup_user__image")}>
              <img
                className={Cx("img")}
                src={userImage || "https://via.placeholder.com/80/fff.png"}
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
                  value={userFirstname ?? ""}
                  onChange={(e) => setUserFirstname(e.target.value)}
                />
              </div>
            </div>
            <div className={Cx("popup__field", "field")}>
              <div className={Cx("field__label")}>Last Name</div>
              <div className={Cx("field__wrap")}>
                <input
                  className={Cx("field__input")}
                  type="text"
                  value={userLastname ?? ""}
                  onChange={(e) => setUserLastname(e.target.value)}
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
                  value={userEmail ?? ""}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
              </div>
            </div>
            <div className={Cx("popup__field", "field")}>
              <div className={Cx("field__label")}>Password</div>
              <div className={Cx("field__wrap")}>
                <input
                  className={Cx("field__input")}
                  type="text "
                  value={userPassword ?? ""}
                  onChange={(e) => setUserPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={Cx("popup__row")}></div>
          <div className={Cx("popup__field", "field")}>
            <div className={Cx("field__label")}>Bio</div>
            <textarea
              className={Cx("field__textarea")}
              value={userBio ?? ""}
              onChange={(e) => setUserBio(e.target.value)}
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
