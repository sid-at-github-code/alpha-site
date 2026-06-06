import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";

import appCss from "../styles.css?url";
import logoUrl from "../assets/Alphafirms-logo-modified.png?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { PageLoader } from "../components/PageLoader";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AlphaFirms — India's Interior Ecosystem" },
      { name: "description", content: "AlphaFirms connects homeowners, designers, architects, and suppliers in India's most trusted interior & living space platform." },
      { name: "author", content: "AlphaFirms" },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: "AlphaFirms — India's Interior Ecosystem" },
      { property: "og:description", content: "India's only trusted interior & living space ecosystem." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "AlphaFirms" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: "https://www.alphafirms.com/og-image.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "AlphaFirms — India's Interior Ecosystem" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@alphafirms" },
      { name: "twitter:image", content: "https://www.alphafirms.com/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon",             href: logoUrl, type: "image/png" },
      { rel: "apple-touch-icon", href: logoUrl },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://images.unsplash.com" },
      { rel: "preconnect", href: "https://framerusercontent.com" },
      { rel: "preload", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap", as: "style" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const orgSchema = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.alphafirms.com/#organization",
  "name": "AlphaFirms",
  "alternateName": "Alpha Firms",
  "url": "https://www.alphafirms.com",
  "logo": "https://www.alphafirms.com/og-image.png",
  "description": "India's only trusted interior & living space ecosystem connecting homeowners, designers, architects, and suppliers.",
  "foundingDate": "2024",
  "areaServed": { "@type": "Country", "name": "India" },
  "contactPoint": {
    "@type": "ContactPoint",
    "email": "hello@alphafirms.com",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "sameAs": ["https://www.alphafirms.com"]
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* Prevents dark-mode flash by reading localStorage before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: orgSchema }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LazyMotion features={domAnimation} strict>
        <PageLoader />
        <Outlet />
      </LazyMotion>
    </QueryClientProvider>
  );
}
