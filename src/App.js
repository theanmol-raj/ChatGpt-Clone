import React, { useEffect, useState } from 'react'
import LoginScreen from './screens/LoginScreen'
import SignInFlow from './screens/SignInFlow'
import AppScreen from './screens/AppScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './utils/NotFound'
import Auth from './utils/Auth'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import ChatScreen from './screens/ChatScreen'


// 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  

function App() {
  const [user, setUser] = useState(() => auth.currentUser);


  useEffect(()=>{
     onAuthStateChanged(auth , (u) => {
      if(u){
        setUser(u)
      }else{
        setUser(null)
      }
     })
  },[])






  

  return (
    <div>
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={ user ? <AppScreen user={user} setFn={setUser}  /> : <LoginScreen />} />
            <Route path="/auth/:id" element={ <SignInFlow user={user} setFn={setUser} />} />
            <Route path="/c" element={<NotFound />} />
            <Route path="/c/:chatID" element={user ? <ChatScreen setFn={setUser} user={user} /> : <NotFound />} />
            {/* <Route path="/share/:sharedID" element={user ? <AppScreen /> : <NotFound />} /> */}
          </Routes>
        </BrowserRouter>


      {/* <LoginScreen /> */}

 
    </div>
  )
}

export default App


// <Route path="/" element={<Dashboard />}>
//     <Route
//       path="messages"
//       element={<DashboardMessages />}
//     />
//     <Route path="tasks" element={<DashboardTasks />} />
//   </Route>