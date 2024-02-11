import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/home/home";
import AppLayout from "./AppLayout";
import Api from "./Pages/API/Api";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import Spinner from "./UI/Spinner";
import { useEffect, useState } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setIsLoaded(false);
    };
  }, []);

  return (
    <>
      {isLoaded && <Spinner />}
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Home />}></Route>
              <Route path="/api" element={<Api />}></Route>
              <Route path="/document" element={<Api />}></Route>
              <Route path="*" element={<PageNotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
