import Landing from "../pages/Landing"
import LoginPage from "../pages/LoginPage"
import SignUpPage from "../pages/SignUpPage"
import Team from "../pages/Team"
const routes = [
    {
        path: '/',
        element: Landing, 
        desc: 'Trang mo dau'
    },
    {
        path: '/login', 
        element: LoginPage, 
        desc: 'Trang dang nhap', 
    }, 
    {
        path: '/register', 
        element: SignUpPage, 
        desc: 'Trang dang nhap', 
    }, 
    {
        path: 'app/teams', 
        element: Team, 
        desc: 'Trang team'
    }
]
export default routes 