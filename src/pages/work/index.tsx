import Link from 'next/link';

export default function Work() {
  return (
    <div className="fg-muted flex h-screen w-screen flex-col items-center justify-center text-center">
      <h1 className="mono text-7xl">WIP</h1>
      <p className="max-w-xl">
        Coming Soon..
      </p>
      <Link className="fg-primary" href="/">
        take me home
      </Link>
    </div>
  );
}
