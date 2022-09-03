import React,{useState,useEffect} from "react";
import List from "../../components/List";
import axios  from "axios";
import Info from "../../components/Info";
const Users =()=>{
    const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedRating, setSelectedRating] = useState(null);
  const [resultsFound, setResultsFound] = useState(true);
  const [users,setUsers]= useState([]);
  const [selectPosition,setSelectPosition]=useState([]);
  const [location,setLocation]=useState([]);
  const [sortData,setSortData]=useState([]);
  const [list, setList] = useState([]);

 
  const idlist = async()=>{
   const ger =  users.map((dataid)=>  dataid.liked)
   console.log("idlist", ger.sort(function(a,b) {return a.id - b.id}))
   console.log("new sort",ger.sort((a, b) => (a < b) ? 1 : -1))

  } 
  

  const applyFilters =()=>{
       let updatedList = users;
       if (selectedRating) {
        updatedList = updatedList.filter(
          (item) => item.location_id == selectedRating
        );
      }
  
      // Category Filter
      if (selectedCategory) {
        updatedList = updatedList.filter(
          (item) => item.job_id == selectedCategory
        );
      }
      setList(updatedList);
      !updatedList.length ? setResultsFound(false) : setResultsFound(true);

  }
  const handleCategoryChange =(e)=>{
    // e.preventdefault()
         setSelectedCategory(e.target.value)
    console.log("was selected",e.target.value)
  }
  const handleRaitingChange =(e)=>{
    // e.preventdefault()
    setSelectedRating(e.target.value)
    console.log("was selected",e.target.value)
  }
  const handleGetUsers = async()=>{
    const userlist = await axios.get("https://test-task-api-optimo.herokuapp.com/employee");   
     setUsers(userlist.data.sort((a, b) => (a.liked < b.liked) ? 1 : -1))
     setList(userlist.data.sort((a, b) => (a.liked < b.liked) ? 1 : -1))  
  }
  const handleGetPositons = async()=>{
    const getpositions = await axios.get("https://test-task-api-optimo.herokuapp.com/job");
    setSelectPosition(getpositions.data)
  }
  const handleGetLocation = async()=>{
    const getlocation = await axios.get("https://test-task-api-optimo.herokuapp.com/location");
    setLocation(getlocation.data)
  }
  useEffect(() =>{
    handleGetUsers()
    handleGetPositons()
    handleGetLocation()
    idlist()
   },[]);
  useEffect(() => {
    applyFilters();
    

  }, [selectedRating, selectedCategory, ]);
 
    return(
      <>
     <Info/>
        <div className="jumbotron ">
            <select  className="select-list" onChange={handleCategoryChange}>
            
            <option value="">
            Select Positon 
                </option>
                {/* <option value={"Frontend developer"} >
                Frontend developer
                </option>
                <option value={"Architect"}>
                Architect
                </option>
                <option value={"Backend developer"}>
                Backend developer
                </option> */}
                   {selectPosition.map((item) => (
      <option value={item.id} key={item.id}  >{item.name}</option>
    ))}
            </select >
            <select className="select-list"  onChange={handleRaitingChange}>
            <option value="">
                    Select Location
                </option>
                {location.map((item) => (
      <option value={item.id} key={item.id}  >{item.name}</option>
    ))}
            </select>
            {/* {users.map((item) => (
      <div key={item.id}  >{item.id}</div>
    ))} */}
             { <List top={ users} list={list} /> }

        </div>
        </>
    )
}
export default Users