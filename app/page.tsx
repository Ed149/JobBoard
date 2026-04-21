import { Suspense } from "react";
import { Home } from "./Home";

export default function index() {
    return (
        <Suspense>
            <Home />
        </Suspense>
    )
}