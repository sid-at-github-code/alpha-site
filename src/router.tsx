import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime:            60_000,  // 1 min — don't refetch data that's fresh
        gcTime:               5 * 60_000, // 5 min — keep unused data in cache
        retry:                1,       // one retry on failure, not three
        refetchOnWindowFocus: false,   // don't hammer the server on tab switch
      },
    },
  });

  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration:       true,
    defaultPreload:          "intent",  // prefetch route on link hover
    defaultPreloadStaleTime: 30_000,    // prefetched data valid for 30 s
  });

  return router;
};
