import React from "react";
import Head from "../Head/Head";
import UseFetch from "../../Hooks/UseFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
import UserStatsGraphs from "./UserStatsGraphs";

const UserStats = () => {
  const { data, error, loading, request } = UseFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }

    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data) {
    return (
      <div>
        <Head title="Estatitica" />
        <UserStatsGraphs data={data} />
      </div>
    );
  } else return null;
};

export default UserStats;
