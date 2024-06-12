"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function page() {
  //   CLIENT SIDE NAVIGATION
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  console.log(pathName, searchParams.get("q"), searchParams.get("w"), "POST");
  return (
    <div>
      <button onClick={() => router.push("/")}>Home</button>
    </div>
  );
}

export default page;
