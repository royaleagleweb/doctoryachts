import { NextResponse, type NextRequest } from "next/server";
import {
  isBotUserAgent,
  localeFromPath,
  LOCALE_COOKIE,
  switchPathOrNull,
  type Locale,
} from "@/lib/i18n";

/**
 * Edge-safe locale header + cookie persistence.
 * Never redirects on Accept-Language. Never redirects known bots.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const locale = localeFromPath(pathname);
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-dy-locale", locale);
  requestHeaders.set("x-dy-pathname", pathname);

  const next = () =>
    NextResponse.next({
      request: { headers: requestHeaders },
    });

  if (
    pathname.startsWith("/api") ||
    pathname === "/sitemap.xml" ||
    pathname === "/robots.txt" ||
    pathname.startsWith("/versions")
  ) {
    return next();
  }

  const ua = request.headers.get("user-agent");
  if (isBotUserAgent(ua)) return next();

  const cookie = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookie !== "en" && cookie !== "es") return next();

  const preferred = cookie as Locale;
  if (preferred === locale) return next();

  const dest = switchPathOrNull(pathname, preferred);
  if (!dest || dest === pathname) return next();

  const url = request.nextUrl.clone();
  url.pathname = dest;
  const redirect = NextResponse.redirect(url);
  redirect.headers.set("x-dy-locale", preferred);
  return redirect;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|icon.png|icon-512.png|apple-icon.png|apple-touch-icon.png|icon-32.png|images/|textures/|.*\\..*).*)",
  ],
};
