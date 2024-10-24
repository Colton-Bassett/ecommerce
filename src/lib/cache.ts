// v data cache, nextjs cache
import { unstable_cache as nextCache } from "next/cache";

// v request memoization
import { cache as reactCache } from "react";

type Callback = (...args: any[]) => Promise<any>;

export function cache<T extends Callback>(
	cb: T,
	keyParts: string[],
	options: { revalidate?: number | false; tags?: string[] } = {}
) {
	// first cache using react, then cache using next
	return nextCache(reactCache(cb), keyParts, options);
}
