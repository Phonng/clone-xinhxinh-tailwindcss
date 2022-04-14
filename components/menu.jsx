import Link from 'next/link';
import { domain } from '../constant/common';


export default function Menu() {
	return (
	  <div className="md:hidden">
		<input className="menu__btn" type="checkbox" id="menu__btn" />
		<label className="menu__icon" htmlFor="menu__btn">
		  <span className="navicon"></span>
		</label>
		<ul className="menu">
		  {/* <li>
			<Link href="/">
			  <a>GIỚI THIỆU</a>
			</Link>
		  </li> */}
		  <li>
			<Link href="/policy-and-regulations">
			  <a>ĐIỀU KHOẢN</a>
			</Link>
		  </li>
		  <li>
			<Link href="/contact">
			  <a>LIÊN HỆ</a>
			</Link>
		  </li>
		  <li className="wrap__try">
			<a href={`${domain}/login`} className="btn__try__now">
			  <span>ĐĂNG NHẬP</span>
			</a>
		  </li>
		</ul>
	  </div>
	);
  }
  