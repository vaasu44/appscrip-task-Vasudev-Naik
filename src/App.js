import { useEffect } from "react";
import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
    HashRouter,
    BrowserRouter,
} from "react-router-dom";
import WebPLPWithFilterExpanded from "./pages/WebPLPWithFilterExpanded";

function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (action !== "POP") {
            window.scrollTo(0, 0);
        }
    }, [action, pathname]);

    useEffect(() => {
        let title = "";
        let metaDescription = "";

        switch (pathname) {
            case "/":
                title = "";
                metaDescription = "";
                break;
        }

        if (title) {
            document.title = title;
        }

        if (metaDescription) {
            const metaDescriptionTag = document.querySelector(
                'head > meta[name="description"]'
            );
            if (metaDescriptionTag) {
                metaDescriptionTag.content = metaDescription;
            }
        }
    }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={< WebPLPWithFilterExpanded />} />
    </Routes > 
    );
}
export default App;