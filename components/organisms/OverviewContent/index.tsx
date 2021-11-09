import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getMemberOverview } from "../../../services/player";
import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  const [count, setCount] = useState([]);
  const [data, setData] = useState([]);
  useEffect(async () => {
    const response = await getMemberOverview();
    if (response.error) {
      toast.error(response.message);
    } else {
      console.log("data: ", response.data);
      setCount(response.data.count);
      setData(response.data.data);
    }
  }, []);
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              {count.map(item =>{ 
                return (
                <Category nominal={18000500} icon="ic-desktop">
                  Game
                  <br />
                  Desktop
                </Category>
                )
              })}
              <Category nominal={18000500} icon="ic-desktop">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={8455000} icon="ic-mobile">
                Game
                <br />
                Desktop
              </Category>
              <Category nominal={5000000} icon="ic-desktop">
                Other
                <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  title="Mobile Legends: The New Battle 2021"
                  categori="Desktop"
                  item={200}
                  price={290000}
                  status="Pending"
                  image="overview-1"
                />
                <TableRow
                  title="Call of Duty:Modern"
                  categori="Desktop"
                  item={320}
                  price={300000}
                  status="Success"
                  image="overview-2"
                />
                <TableRow
                  title="Clash of Clans"
                  categori="Mobile"
                  item={120}
                  price={20000}
                  status="Failed"
                  image="overview-3"
                />
                <TableRow
                  title="The Royal Game"
                  categori="Mobile"
                  item={120}
                  price={20000}
                  status="Pending"
                  image="overview-4"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
