import { useEffect, useState } from "react";
import { getData } from "../apis/api";
import Card from "../components/card";
import './users.css';

const AllUsers = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    try {
      const res = await getData();
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="dis">
      {data.map((val) => (
        <Card {...val} key={val.id} />
      ))}
    </div>
  );
};

export default AllUsers;
// address={`${val?.address?.suite}, ${val?.address?.street}, ${val?.address?.city}`}