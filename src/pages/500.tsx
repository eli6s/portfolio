import Link from 'next/link';

export default function Custom500() {
  return (
    <div className="fg-muted flex h-screen w-screen flex-col items-center justify-center text-center">
      <h1 className="mono text-9xl">500</h1>
      <p className="max-w-xl">
        oops..
      </p>
      <Link className="fg-primary" href="/">
        take me home
      </Link>
    </div>
  );
}
