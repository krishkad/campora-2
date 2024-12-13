import { useEffect } from "react";

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? require("react").useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
