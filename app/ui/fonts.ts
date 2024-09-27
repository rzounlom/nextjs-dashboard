import { Inter, Lusitana } from "next/font/google";

import { Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
});
