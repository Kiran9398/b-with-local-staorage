import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Read.css";
export const Read = () => {
  const [details, setDetails] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );
  const navigate = useNavigate();

  const editData = (e, index) => {
    console.log(index);
    navigate("/form");
  };
  const deleteData = (e, index) => {
    const rows = [...details];
    const deletedArr = rows.splice(index, 1);
    setDetails(rows);
    localStorage.setItem("userData", JSON.stringify(rows));
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>DOB</th>
            <th>Number</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {details.map((value, index) => {
            return (
              <>
                <tr>
                  <td>{value.userName}</td>
                  <td>{value.email}</td>
                  <td>{value.dob}</td>
                  <td>{value.number}</td>
                  <td>
                    <button
                      onClick={(e) => {
                        editData(e, index);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        deleteData(e, index);
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
