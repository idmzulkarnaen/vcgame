import Footer from "./Footer";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

interface SideBarProps{
  activeMenu: 'overview' | 'transactions' | 'settings'
}
export default function SideBar(props: SideBarProps) {
  const {activeMenu}=props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem title="Overview" icon="Ic-Menu-Overview" active={activeMenu ==='overview'} href="/member" />
          <MenuItem title="Transactions" icon="Ic-Menu-Transaction" active={activeMenu === 'transactions'} href="/member/transactions"  />
          <MenuItem title="Messages" icon="Ic-Menu-Messages" href="/member" />
          <MenuItem title="Card" icon="Ic-Menu-Card" href="/member" />
          <MenuItem title="Reward" icon="Ic-Menu-Reward" href="/member" />
          <MenuItem title="Setting" icon="Ic-Menu-Setting" active={activeMenu === "settings"} href="/member/edit-profile" />
          <MenuItem title="Log Out" icon="Ic-Menu-Logout" href="/sign-in" />
          
        </div>
        <Footer />
      </div>
    </section>
  );
}
