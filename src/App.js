import "./App.css";
import Router from "./routes/Router";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import styled from "styled-components";

export default function App() {
  return (
    <div>
      <PageContent>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PageContent>

      <Footer />
    </div>
  );
}
const PageContent = styled.div`
  min-height: calc(100vh - 39.2px);
  padding-bottom: 50px;
  box-sizing: border-box;
`;
