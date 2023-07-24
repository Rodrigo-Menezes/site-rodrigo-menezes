import Link from "next/link";
import Layout from "./Layout";

export default function Footer() {
  return (
    <footer className="w-full border-t border-solid border-dark font-medium text-lg">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy;All Rights Reserved.</span>
        <div className="flex items-center">
          Build With <span className="text-primary text-2xl px-1">&#9825;</span>by&nbsp;<Link href="/" className="underline underline-offset-2">CodeBucks</Link>
        </div>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  );
}
