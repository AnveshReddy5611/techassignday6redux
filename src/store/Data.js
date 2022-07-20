import React, {useState, useEffect} from 'react'
import axios from 'axios'


function DataFetch() {
    // const [currstate, dispatch] = useReducer(reducer, initialState)
    const [val, setVal] = useState();

    const getAnswer = async () => {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
    //   console.log(data);
      setVal(data);
    };

    useEffect(() => {
      getAnswer();
    }, []);

    console.log("choc", val);

  return (
    <div>
        {val?.map((i,index)=>{
            return (<h4 key={index}>{i.name}</h4>)
        })}
    </div>
  )
}

export default DataFetch