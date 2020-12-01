function Home(props) {
  return (
    <div>
      <p>
        🔥MONGODB_URI🔥: <b>{process.env.NEXT_PUBLIC_MONGODB_URI}</b>
      </p>
      <p>
        🔥SECRET_KEY🔥: <b>{process.env.SECRET_KEY}</b>
      </p>
      <pre>{JSON.stringify(props, null, 4)}</pre>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      mongodbUri: process.env.NEXT_PUBLIC_MONGODB_URI,
      secretKey: process.env.SECRET_KEY,
    },
  };
}

export default Home;
