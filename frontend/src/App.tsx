import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import { Journal } from './components/journal/Journal';
import { Home } from './components/home/Home';
import { Chat } from './components/chat/Chat';
import { Privacy } from './components/pages/Privacy';
import { Terms } from './components/pages/Terms';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
