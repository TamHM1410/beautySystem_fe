import MainNavBar from '../Navbar/MainNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <div style={{ display: 'flex' ,height:'100vh'}}>
        <MainNavBar />
        <div style={{padding:10 ,width:'100%'}}>
         <Outlet/>
        </div>
      </div>
    </>
  );
};
export default DashboardLayout;
