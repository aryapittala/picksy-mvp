// hooks/useDeals.ts
import { useEffect, useState } from "react";
import deals from "../constants/deals";

export default function useDeals() {
  const [todayDeals, setTodayDeals] = useState<any[]>([]);

  useEffect(() => {
    // simulate fetching
    setTodayDeals(deals);
  }, []);

  return { todayDeals };
}
