// import { List, ListItem, ListItemText, Typography } from "@mui/material";
// import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch('https://localhost:5001/api/v1/events')
      .then(response => response.json())
      .then(data => setActivities(data));

    return () => {};
  }, []);

  return (
    /*
    <>
       <Typography variant ="h3">Events Hub</Typography>
       <List>
         {activities.map((activity: Activity) => (
           <ListItem key={activity.id}>
             <ListItemText>{activity.title}</ListItemText>
           </ListItem>
         ))}
       </List>
     </>
   */
    <div>
      <h3 style={{color: 'red'}}>Events Hub</h3>
      <ul>
        {activities.map((activity) => (
          <li key={activity.id}>{activity.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
