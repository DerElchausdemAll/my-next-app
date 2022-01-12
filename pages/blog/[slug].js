import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return <div>my blog page {router.query.slug}</div>;
};

export default Home;
