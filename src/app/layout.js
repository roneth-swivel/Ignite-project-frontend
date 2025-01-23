"use client";

import { Provider } from "react-redux";
import store from "../redux/store";
import AppHeader from "../components/AppHeader";
import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <AppHeader />
        <Provider store={store}>
          <main className="flex-grow">{children}</main>
        </Provider>
      </body>
    </html>
  );
}
