
// import { BrowserRouter as Router,Routes , Route } from 'react-router'
// import { PublicLayout } from '@/Layouts/public-layout'
// import AuthenticationLayout from '@/Layouts/auth-layout'
// import { MainLayout } from './Layouts/main-layout'
// import {Dashboard} from './routes/dashboard'
// import HomePage from '@/routes/home'
// import  {SignInPage } from './routes/sign-in';
// import  {SignUpPage } from './routes/sign-up';
// import ProtectedRoutes from './Layouts/protected-routes';
// import { Generate } from './components/generate'
// import { LayoutDashboard } from 'lucide-react'

// const App = () => {
//   return (
//        <Router>
//          <Routes>

//           {/* public routes */}
           
//           <Route element={<PublicLayout />}>
//           <Route index element={<HomePage />} />
//           </Route>
  
//           {/* authentication layout */}
//            <Route element={<AuthenticationLayout />}>
//           <Route path="/signin/*" element={<SignInPage />} />
//            <Route path="/signup/*" element={<SignUpPage />} />
//           </Route>

//           {/* protected routes */}
//           <Route element={<ProtectedRoutes><MainLayout /></ProtectedRoutes>}>


//            {/* add all the protected routes */}

//   </Route>
//           </Route>
//          </Routes>
//        </Router>
//   )
// }

// export default App


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PublicLayout } from '@/Layouts/public-layout';
import AuthenticationLayout from '@/Layouts/auth-layout';
import { MainLayout } from './Layouts/main-layout';
import { Dashboard } from './routes/dashboard';
import HomePage from '@/routes/home';
import { SignInPage } from './routes/sign-in';
import { SignUpPage } from './routes/sign-up';
import ProtectedRoutes from './Layouts/protected-routes';
import { Generate } from './components/generate';
import {CreateEditPage} from './routes/create-edit-page';
import { MockLoadPage } from './routes/mock-load-page';
import { MockInterviewPage } from './routes/mock-interview-page';
import { Feedback } from './routes/feedback';
import { SSORedirectHandler } from "./routes/sso-callback";
import ContactPage from './routes/ContactPage';
import AboutPage from './routes/AboutPage';
import ServicesPage from './routes/ServicePage';
const App = () => {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
       <Route path="/about" element={<AboutPage />} />
       <Route path="/services" element={<ServicesPage />} />
        </Route>

        {/* Authentication Routes */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
           <Route path="/signin/sso-callback" element={<SSORedirectHandler />} />

        </Route>

        {/* Protected Routes */}
        <Route
          // path="/"
          element={
            <ProtectedRoutes>
              <MainLayout />
            </ProtectedRoutes>
          }
        >
         <Route element={<Generate />} path="/generate">
          <Route index element={<Dashboard/>} />

          <Route path=":interviewId" element={<CreateEditPage />} />
           <Route path="interview/:interviewId" element={<MockLoadPage />} />

           <Route path="interview/:interviewId/start"
           element={<MockInterviewPage />} />

           <Route path='feedback/:interviewId' element={<Feedback />} />
         </Route>
        
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
