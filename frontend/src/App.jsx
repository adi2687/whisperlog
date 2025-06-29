import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProfileProvider } from './contexts/ProfileContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
// import { WebSocketProvider } from './contexts/WebSocketContext';
import Loader from './components/Loader/Loader';
import Navbar from "./components/Navbar/Navbar";
import Homepage from './components/Homepage/Homepage';
import Main from "./components/message/main";
import Showcasing from './components/SHOWCASING/Showcasing';
import Intro from './components/Intro/Intro';
import Auth from './components/Auth/Auth';
import Footer from './components/Footer/Footer';
import Notfound from './components/Notfound/notfound';
import ProfileOthersPage from './components/profile/ProfilePage';
import ProfilePage from './components/profile/UserProfileSection';
import { CurrentUserProfileProvider } from './contexts/ProfileContext';
import AnimatedList from './components/List/list';
import Card from './components/profile/profilecard/card';
import AddFriend from './components/AddFriend/AddFriend';
import Message from './components/message/main';
import Aurora from './pages/main';
import Video from './components/message/video/video'; 
import Join from './components/message/video/JoinRoom';


// imp
// Protected route component



function App() {
  
  return (
    <Router>
      <AuthProvider>
        {/* <WebSocketProvider> */}
          <ProfileProvider>
            <CurrentUserProfileProvider>
                <div className="app">
                  <Navbar />
                  <main>
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/chat" element={<Main />} />
                    <Route path="/showcasing" element={<Showcasing />} />
                    <Route path="/intro" element={<Intro />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="/profile/:username" element={<ProfileOthersPage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="*" element={<Notfound />} />
                    <Route path="/list" element={<AnimatedList />} />
                    <Route path="/profilecard" element={<Card />} />
                    <Route path="/addFriend" element={<AddFriend />} />
                    <Route path="/chat/:id" element={<Message />} />
                    <Route path='/aurora' element={<Aurora />} />
                    <Route path='/video' element={<Video />} />
                    <Route path='/join' element={<Join />} />
                  </Routes>
                  </main>
                  <Footer />
                </div>
            </CurrentUserProfileProvider>
          </ProfileProvider>
        {/* </WebSocketProvider> */}
      </AuthProvider>
    </Router>
  );
}

export default App;
