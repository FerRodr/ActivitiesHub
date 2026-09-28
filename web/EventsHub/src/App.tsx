import { List, ListItem, ListItemText, Typography } from "@mui/material";
import react from "react"

function App() {
  const [activities, setActivities] = react.useState<Activity[]>([]);

  react.useEffect(() => {
    fetch('https://localhost:5001/api/v1/events')
      .then(response => response.json())
      .then(data => setActivities(data));

    return () => {};
  }, []);

  return (
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
  )
}

export default App
