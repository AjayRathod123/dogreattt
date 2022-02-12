import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "../CSS/Work.css";

const Work = () => {
  const [userData, setUserData] = useState({
    firstname: "",
    lastname: "",
    work: "",
    email: "",
    contact: "",
  });

  const history = useHistory();

  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstname, lastname, work, email, contact } = userData;

    if (firstname && lastname && work && email && contact) {
      const res = await fetch(
        "https://dogreat-44561-default-rtdb.firebaseio.com/userDataRecord.json",
        {
          method: "POST",
          Header: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstname,
            lastname,
            work,
            email,
            contact,
          }),
        }
      );
      if (res) {
        alert(`${firstname} Successfully Submited`);
        history.push("/");
      }
    } else {
      alert(`Please Fill The Complete Data`);
    }
  };

  return (
    <>
      <div className="work">
        <div className="work__heading">
          <h1>WORK</h1>
        </div>
        <div className="work__form">
          <div className="form__left" method="POST">
            <div className="form__leftheading">
              <h4>Welcome</h4>
            </div>
            <div className="form__inputs">
              <input
                type="text"
                name="firstname"
                autoComplete="off"
                placeholder="First Name"
                value={userData.firstname}
                onChange={postUserData}
              />
            </div>
            <div className="form__inputs">
              <input
                type="text"
                name="lastname"
                autoComplete="off"
                placeholder="Last Name"
                value={userData.lastname}
                onChange={postUserData}
              />
            </div>
            <div className="form__inputs">
              <input
                type="text"
                name="work"
                autoComplete="off"
                placeholder="Work"
                value={userData.work}
                onChange={postUserData}
              />
            </div>
            <div className="form__inputs">
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Email"
                value={userData.email}
                onChange={postUserData}
              />
            </div>
            <div className="form__inputs">
              <input
                type="tel"
                name="contact"
                autoComplete="off"
                placeholder="Contact Number"
                value={userData.contact}
                onChange={postUserData}
              />
            </div>
            <div className="form__submit">
              <button type="submit" onClick={submitData} className="form__btn">
                Submit
              </button>
            </div>
          </div>
          <div className="form__right">
            <div className="form__rightheading">
              <h4>Let's get in touch</h4>
            </div>
            <div className="form__rightinfo">
              <p>
                In the work input filled write your work,what you need. By
                filling the form and submit it,after some time we will contact
                you to start your work or project. So stay connected with us.
              </p>
            </div>
            <div className="form__contact">
              <div className="form__location">
                <i className="fas fa-map-marker-alt"></i>
                <p>C.B.D Belapur Navi Mumbai,400614</p>
              </div>
              <div className="form__email">
                <i className="fas fa-envelope"></i>
                <p>rajay2766@gmail.com</p>
              </div>
              <div className="form__call">
                <i className="fas fa-phone"></i>
                <p>9930539816</p>
              </div>
            </div>
            <div className="form__follow">
              <div className="form__heading">
                <h5>Follow Us On</h5>
              </div>
              <div className="form__socialmedias">
                <div className="form__instatweet">
                  <div className="form__twitter">
                    <i className="fab fa-twitter "></i>
                    <p>Ajay Rathod</p>
                  </div>
                  <div className="form__instagram">
                    <i className="fab fa-instagram"></i>
                    <p>ajayrathod_2001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
