// const ListItem = ({
//     item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
//   }) => (
//     <div className='listItem-wrap'>
//       <img src={coverSrc} alt='' />
//       <header>
//         <h4>{title}</h4>
//         <span>🌟{rating}</span>
//       </header>
//       <footer>
//         <p>
//           <b>{serviceTime}</b> <span> Delivery Fee ${deliveryFee}</span>
//         </p>
//         <p>
//           <b>${price}</b>
//         </p>
//       </footer>
//     </div>
//   );
  
//   export default ListItem;
import Link from "next/link";
import {LikeOutlined } from "@ant-design/icons"
const ListItem = ({
  item: { avatar, description, id,  job_id, liked, location_id,name },
 top
}) => (
  <>
  <h5></h5>
  <div className= {top? 'listItem-wrap top-wrap':'listItem-wrap'}>
    <Link href={`user/${id}`}>
     <a>
    <img src={`https://test-task-api-optimo.herokuapp.com${avatar}`} alt='' />
    </a>
  </Link>
    <header>
     
       
      <h4>{description}</h4>
     
      <span><LikeOutlined />{liked}</span>
    </header>
    <footer>
      <p>
        <b>{name}</b> 
        
      </p>
      <p>
        {/* <b>{job_id}</b> */}
      </p>
    </footer>
  </div>
  </>
);

export default ListItem;
