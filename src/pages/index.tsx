import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";

const roomQuery = gql`
  query {
    rooms {
      id
      name
      options
      ownerToken
    }
  }
`;

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(roomQuery);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={styles.container}>
      <Head>
        <title>JAPIP</title>
        <meta name="description" content="Just another PlanitPoker" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ul>
          {data.rooms.map((room) => (
            <li key={room.id}>
              <a href={`/room/${room.id}`}>{room.name}</a>
            </li>
          ))}
        </ul>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
