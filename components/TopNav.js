import { useState } from "react";
import { Menu } from "antd";
import Link from "next/link";
import axios from "axios";
import SubMenu from "antd/lib/menu/SubMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
const { Item } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("/");

 
  return (
    <div className="top-nav">

    <Menu  mode="horizontal" selectedKeys={[current]}>
    

        
      <Item
        key="/"
        onClick={(e) => setCurrent(e.key)} 
        
      >
      
        <Link href="/">
        <img src='/23.png'/>
        </Link>
      </Item>

     
        
          <Item
        key="/Employees"
        onClick={(e) => setCurrent(e.key)}       
      >
        <Link href="/user">
          <a>Employees</a>
        </Link>
      </Item>

      <Item
        key="/contact"
        onClick={(e) => setCurrent(e.key)}
        
      >
        <Link href="/contact">
          <a>Contact Us</a>
        </Link>
      </Item>
           
    
    </Menu>
    </div>
  );
};

export default TopNav;

