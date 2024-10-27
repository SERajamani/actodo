import Header from "../components/header";
import Card from "../components/Card";
import ToDoContainer from "../components/ToDoContainer";
import { useLocation } from "react-router-dom"


function Landing() {
    const data =useLocation()

  return (
    <div className="bg-black p-16">

      <div className="bg-[#EFEFEF] p-10 border rounded-md">

        {/*Header*/}
        <Header username={data.state.user} />

        {/*Card */}
        <div className="flex justify-between gap-7 my-5 flex-wrap">

          <Card bgcolor={"#8272DA"} title={"23"} subtitle={"Chennai"} />
          <Card bgcolor={"#FD6663"} title={"October"} subtitle={"08:32:45"} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />


        </div>

        {/*ToDoContainer*/}
        <ToDoContainer />
      </div>
    </div>


  );
}

export default Landing
