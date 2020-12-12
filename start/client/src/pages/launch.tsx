import React, { Fragment } from "react";
import { RouteComponentProps } from "@reach/router";
import { gql, useQuery } from "@apollo/client";
import { LAUNCH_TILE_DATA } from "./launches";
import { Header, LaunchDetail, Loading } from "../components";
import { ActionButton } from "../containers";

interface LaunchProps extends RouteComponentProps {}

export const GET_LAUNCH_DETAILS = gql`
  query LaunchDetails($launchId: ID!) {
    launch(id: $launchId) {
      site
      rocket {
        type
      }
      ...LaunchTile
    }
  }
  ${LAUNCH_TILE_DATA}
`;

const Launch: React.FC<LaunchProps> = ({ launchId }: any) => {
  const { data, loading, error } = useQuery(GET_LAUNCH_DETAILS, {
    variables: { launchId },
  });
  if (loading) return <Loading />;
  if (!data || error) return <p>Error</p>;
  return (
    <Fragment>
      <Header image={data.launch.mission.missionPatch}>
        {data.launch.mission.name}
      </Header>
      <LaunchDetail {...data.launch} />
      <ActionButton {...data.launch} />
    </Fragment>
  );
};

export default Launch;
