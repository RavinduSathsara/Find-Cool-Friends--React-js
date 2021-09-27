import React, { useState, useEffect } from "react";
import Names from "./Names";

function NameList() {
  const [loaddata, setLoadData] = useState(Math.random());
  const [nameList, setNameList] = useState([
    {
      id: 1,
      name: {
        title: "mr",
        first: "Ravindu ",
        last: "Sathsara",
      },
      location: {
        city: "kilcoole",
      },
      email: "brad.gibson@example.com",
      dob: {
        date: "1993-07-20T09:44:18.674Z",
        age: 21,
      },
      picture: {
        medium: "https://randomuser.me/api/portraits/med/men/75.jpg",
      },
    },
  ]);

  useEffect(() => {
    fetch("https://randomuser.me/api")
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
        setNameList((nameList) => [...nameList, responseData.results[0]]);
      });
  }, [loaddata]);
  const namelistComponent = () => {
    return nameList.map((aName) => {
      return (
        <Names
          key={aName.id}
          name={`${aName.name.first}  ${aName.name.last}`}
          city={aName.location.city}
          email={aName.email}
          birthday={aName.dob.date}
          avatar={aName.picture.medium}
        />
      );
    });
  };

  const adduserhandler = () => {
    setLoadData(Math.random());
  };

  return (
    <div className="container  mt-4">
      <button
        className="btn btn-primary mb-4 rounded-pill"
        onClick={adduserhandler}
      >
        add Friend
      </button>
      <ul className="list-group">{namelistComponent()}</ul>
    </div>
  );
}
export default NameList;
