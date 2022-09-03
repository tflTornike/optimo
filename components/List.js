import ListItem from './ListItem';
import {AppstoreAddOutlined} from "@ant-design/icons"

const List = ({top, list }) => (
 
  <div className='list-wrap'>
    {list.map((item) => (
      <ListItem top={  top[0].liked == item.liked || top[1].liked == item.liked || top[2].liked == item.liked ?true :false} key={item.id} item={item} />
    ))}
  </div>
);

export default List;