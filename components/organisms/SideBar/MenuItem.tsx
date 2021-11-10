import Image from "next/image";
import Link from "next/link";
const cx = require("classnames");

interface MenuItemProps {
  title: string;
  icon:
    | "Ic-Menu-Overview"
    | "Ic-Menu-Transaction"
    | "Ic-Menu-Messages"
    | "Ic-Menu-Card"
    | "Ic-Menu-Reward"
    | "Ic-Menu-Setting"
    | "Ic-Menu-Logout";
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active, href, onClick } = props;
  const classItem = cx({
    item: true,
    "mb-30": true,
    active,
  });

  return (
    <div className={classItem} onClick={onClick}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>

      <p className="item-title m-0">
        {onClick ? (
          <a className="text-lg text-decoration-none">{title}</a>
        ) : (
          <Link href={href}>
            <a className="text-lg text-decoration-none">{title}</a>
          </Link>
        )}
      </p>
    </div>
  );
}
