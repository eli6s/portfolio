import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="fg-muted flex h-screen w-screen flex-col items-center justify-center text-center">
      <h1 className="mono text-9xl">404</h1>
      <p className="max-w-xl">Looks like you're lost..</p>
      <Link className="fg-primary" href="/">
        take me home
      </Link>
    </div>
  );
}
