import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import checkout from "../components/checkout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center text-center m-auto h-screen">
        <button
          type="button"
          className="btn btn-primary m-auto border rounded-lg p-2 bg-blue-700 text-white"
          onClick={() => {
            checkout({
              lineItems: [
                {
                  price: "price_1MZot8SJnzQnh78OAd1QJft0",
                  quantity: 1,
                },
              ],
            });
          }}
        >
          Buynow
        </button>
      </div>
    </>
  );
}
