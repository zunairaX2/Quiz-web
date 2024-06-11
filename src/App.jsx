import { useState } from "react";
import Head from "./components/Header";
import Quiz from "./components/Quiz";
export default function App(){
  let [nextPage,setNextPage] = useState(true);
  
  if(nextPage){
      return <Head setNextPage={setNextPage}/>
    }
  return(
    <div>
      <Quiz/>
    </div>
  );
}
