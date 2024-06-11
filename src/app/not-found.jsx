import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div>
      <h1>Page could no be found</h1>
      <Link href={"/"}>Back to Home</Link>
    </div>
  );
}

export default NotFoundPage;
