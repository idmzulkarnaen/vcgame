import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

export default function SideBar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="Ic-Menu-Overview" active />
          <MenuItem title="Transactions" icon="Ic-Menu-Transaction"  />
          <MenuItem title="Messages" icon="Ic-Menu-Messages" />
          <MenuItem title="Card" icon="Ic-Menu-Card" />
          <MenuItem title="Reward" icon="Ic-Menu-Reward" />
          <MenuItem title="Setting" icon="Ic-Menu-Setting" />
          <MenuItem title="Log Out" icon="Ic-Menu-Logout" />
          
        </div>
        <Footer />
      </div>
    </section>
  );
}
