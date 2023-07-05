import Head from 'next/head';

export default function Todo() {
  return (
    <div>
      <Head>
        <title>My Homepage</title>
        <meta name="description" content="Welcome to my homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to My Homepage</h1>
        <p>Feel free to explore!</p>
      </main>

      <footer>
        <p>© 2023 My Homepage. All rights reserved.</p>
      </footer>
    </div>
  );
}
