import { useCallback, useEffect, useRef } from "react";

export default function useDebounce(delay: number) {
	const timeOutRef = useRef<number>(undefined);
	const debounce = useCallback(
		(callback: (...args: any) => void) => {
			return (...args: any) => {
				clearTimeout(timeOutRef.current);
				timeOutRef.current = setTimeout(callback, delay, ...args);
			};
		},
		[delay],
	);

	useEffect(() => {
		return () => clearTimeout(timeOutRef.current);
	}, []);

	return debounce;
}
