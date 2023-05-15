import ListItem from "./components/ListItem.jsx";

function App() {
    const data = [
        {
            title: "Have a Snack",
            description: "Queso",
            time: "now",
        },
        {
            title: "Go running",
            description: "3 miles",
            time: "2pm"
        },
        {

        }
    ]
  return (
   <div>
     <ol>
         {/*Long format*/}
         {/*<ListItem taskname="have lunch" description="sandwich" time="10 am"/>*/}
       {/*<li>*/}
       {/*  <h2>Start Work</h2>*/}
       {/*  <p>Description: Write React Demo</p>*/}
       {/*  <p>Time: 9am</p>*/}
       {/*</li>*/}
         {data.map((task) => (
             <ListItem
                 taskName = {task.title}
                 description = {task.description}
                 time = {task.time}
             />
         ))}
     </ol>
   </div>
  )
}

export default App
