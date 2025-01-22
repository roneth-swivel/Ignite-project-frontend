import { Link } from "@mui/material";

export default function AppHeader({ headerTitle }) {
  return (
    <Link href="/">
      <header className="bg-purple-700 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">{headerTitle}</h1>
      </header>
    </Link>
  );
}
