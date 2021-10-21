import Image from "next/image";
const cx = require('classnames');

interface MenuItemProps {
  title: string;
  icon: 'Ic-Menu-Overview' | 'Ic-Menu-Transaction' | 'Ic-Menu-Messages' | 'Ic-Menu-Card' | 'Ic-Menu-Reward' | 'Ic-Menu-Setting' | 'Ic-Menu-Logout';
  active?: boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, active } = props;
  const classItem = cx({
      'item':true,
      'mb-30':true,
      'active':active
  })
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image src={`/icon/${icon}.svg`} width={25} height={25} />
      </div>

      <p className="item-title m-0">
        <a href="" className="text-lg text-decoration-none">
          {title}
        </a>
      </p>
    </div>
  );
}
