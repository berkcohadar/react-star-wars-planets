import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Planet({ planet, key }) {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [toggle, setToggle] = useState(false);

  const getResidents = async () => {
    setLoading(true);
    const data = await Promise.all(
      planet.residents.map(async (resident) => (await axios.get(resident)).data)
    );
    if (data) {
      setResponse(data);
      setTimeout(() => {
        setLoading(false);
      }, 250);
    }
  };

  useEffect(() => {
    getResidents();
  }, [planet]);

  const toggleResidents = () => {
    setToggle(!toggle);
  };

  return (
    <li onClick={() => toggleResidents()} className="sw-planet-area" key={key}>
      <div className="sw-planet">
        {toggle ? (
          <>
            <h1>Residents</h1>
            {loading ? <h3> Loading... </h3> :
              response && response.length > 0 ?
              response.map((resident, key) => <h3>{resident.name}</h3>) : (
                <h3>No residents.</h3>
              )}
          </>
        ) : (
          <>
            <h1>{planet.name}</h1>
            <h3>{planet.residents.length} Residents</h3>
            <button> See Residents </button>
          </>
        )}
      </div>
    </li>
  );
}
