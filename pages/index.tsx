import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Omaha React/Node/NextJs Group</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">Site will be available soon!</h1>
        <p className="mt-5">
          This is the placeholder text for the Omaha React/Node/NextJs Group as
          this site has not been built. Check back soon!
        </p>
      </main>
    </div>
  );
}
