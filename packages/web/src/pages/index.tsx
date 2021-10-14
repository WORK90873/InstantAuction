import { NextPage } from "next";
import { useHelloQuery, useMeQuery } from "client-controllers";
import { OAuthButton } from "../components/OAuthButton";

const Landing: NextPage = () => {
  const { data: testData, loading: testLoading } = useHelloQuery();
  const { data, loading, error } = useMeQuery();
  return (
    <>
      <h1 className="text-3xl">
        {testLoading ? "Loading..." : testData?.hello || "No data returned"}
      </h1>
      <pre>
        {loading
          ? "loading..."
          : error
          ? JSON.stringify(error, null, 2)
          : JSON.stringify(data, null, 2)}
      </pre>
      <OAuthButton provider="google" href="https://www.google.com" />
    </>
  );
};

export default Landing;
