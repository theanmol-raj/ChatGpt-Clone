import React, { useEffect, useState } from 'react'
import LoginScreen from './screens/LoginScreen'
import SignInFlow from './screens/SignInFlow'
import AppScreen from './screens/AppScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NotFound from './utils/NotFound'
import Auth from './utils/Auth'
import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'




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




    console.log(user)




  

  return (
    <div>
      <BrowserRouter basename="/">
          <Routes>
            <Route path="/" element={ user ? <AppScreen /> : <LoginScreen />} />
            <Route path="/auth/:id" element={ <SignInFlow setFn={setUser} />} />
            <Route path="/c" element={<NotFound />} />
            <Route path="/c/:chatID" element={user ? <AppScreen /> : <NotFound />} />
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