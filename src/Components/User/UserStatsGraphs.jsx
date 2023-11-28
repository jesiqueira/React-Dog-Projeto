import React from "react";
import styles from "./UserStatsGraphs.module.css";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

const UserStatsGraphs = () => {
  const data = [
    { x: "Category A", y: 30 },
    { x: "Category B", y: 145 },
    { x: "Category C", y: 225 },
    { x: "Category D", y: 125 },
    { x: "Category E", y: 25 },
    { x: "Category F", y: 125 },
  ];

  const total = data.reduce((sum, entry) => sum + entry.y, 0);
  // const [graph, setGraph] = React.useState([]);
  // const [total, setTotal] = React.useState(0);

  // React.useEffect(() => {
  //   const graphData = data.map((item) => {
  //     return {
  //       x: item.title,
  //       y: Number(item.acessos),
  //     };
  //   });
  //   if (data["length"] > 0) {
  //     setTotal(
  //       data.map(({ acessos }) => Number(acessos)).reduce((a, b) => a + b)
  //     );
  //   }
  //   setGraph(graphData);
  // }, [data]);
  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={styles.victory}>
        <VictoryPie
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={data}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          innerRadius={50}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className={styles.total}>
        <p>Acessos: {total}</p>
      </div>
    </section>
  );

  // return (
  //   <div style={{ textAlign: "center" }}>
  //     <VictoryChart
  //       containerComponent={<VictoryContainer responsive={false} />}
  //       width={400}
  //       height={400}
  //     >
  //       <VictoryPie
  //         colorScale={["tomato", "orange", "gold"]}
  //         data={data}
  //         innerRadius={70}
  //         //   labelRadius={({ innerRadius }) =>
  //         //     innerRadius + (70 - innerRadius) / 2
  //         //   }
  //       />
  //       <VictoryLabel
  //         textAnchor="middle"
  //         verticalAnchor="middle"
  //         x={200}
  //         y={200}
  //         text={`Total: ${total}`}
  //         style={{ fontSize: 18, fill: "#333" }}
  //       />
  //     </VictoryChart>
  //   </div>
  // );
};

export default UserStatsGraphs;
