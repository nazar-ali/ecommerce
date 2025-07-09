import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 h-full bg-gray-100 border-r shadow-sm fixed left-0 top-0 pt-16">
      <ul className="flex flex-col gap-3 p-4">
        <li>
          <Link
            href="/dashboard"
            className="text-gray-700 hover:text-purple-600"
          >
            🏠 Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/products"
            className="text-gray-700 hover:text-purple-600"
          >
            📦 Products
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/orders"
            className="text-gray-700 hover:text-purple-600"
          >
            📑 Orders
          </Link>
        </li>
      </ul>
    </aside>
  );
}
