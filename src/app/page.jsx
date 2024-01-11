import Link from "next/link";
import Login from "../Components/Login";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-400">
      <Login />
    </main>
  );
}
