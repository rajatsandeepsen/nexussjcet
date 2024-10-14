"use client";

import formbricks from "@formbricks/js";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function FormbricksProvider() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    formbricks.init({
      environmentId: process.env.FORMBRICKS_ENV_ID ?? "",
      apiHost: "https://app.formbricks.com",
      // userId: "<user-id>", //optional
    });

    formbricks
  }, []);

  useEffect(() => {
    formbricks?.registerRouteChange();
  }, [pathname, searchParams]);

  return null;
}