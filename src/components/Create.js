import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
export const Create = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [number, setNumber] = useState();
  const [userDetails, setUserDetails] = useState(
    JSON.parse(localStorage.getItem("userData")) !== null
      ? JSON.parse(localStorage.getItem("userData"))
      : []
  );

  const navigate = useNavigate();
  const submitForm = (e) => {
    e.preventDefault();
    const array = [...userDetails, { userName, email, dob, number }];
    setUserDetails(array);
    localStorage.setItem("userData", JSON.stringify(array));
    console.log(array);
    navigate("/read");
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <table>
          <tbody>
            <tr>
              <th>UserName</th>
              <td>
                <input
                  type="text"
                  required
                  value={userName}
                  onChange={(e) => {
                    const arr = (userName, e.target.value);
                    setUserName(arr);
                  }}
                />
              </td>
            </tr>
            <tr>
              <th>Email</th>

              <td>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => {
                    const arr = (email, e.target.value);
                    setEmail(arr);
                  }}
                />
              </td>
            </tr>

            <tr>
              <th>DOB</th>

              <td>
                <input
                  type="date"
                  required
                  value={dob}
                  onChange={(e) => {
                    const arr = (dob, e.target.value);
                    setDob(arr);
                  }}
                />
              </td>
            </tr>

            <tr>
              <th>Number</th>

              <td>
                <input
                  type="number"
                  required
                  value={number}
                  onChange={(e) => {
                    const arr = (number, e.target.value);
                    setNumber(arr);
                  }}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};
