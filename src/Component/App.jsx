import { Avatar, Button,  Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
    image: {
       width: "150px",
       height: "150px",
       marginLeft: "40px",
       marginBottom: "50px"
       
    },
   
    background:{
        height:"50px",
        width: "1200px",
        marginLeft: "20px",
        marginTop: "20px",
        paddingTop: "250px",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        backgroundImage: `url(${"/944291.jpg"})`
    },
    name:{
       fontWeight: "bold"
    },
    topic:{
        color: "#ffd54f",
        marginTop: "40px",
        fontSize: "15px",
        marginBottom: "10px"

    },
    container:{
        marginLeft: "250px",
    },
    slas:{
      margin:"6px"
    },
    title:{
       marginTop: "6px"
    },
   
    Box_container:{
        backgroundColor: "#a7ffeb",
        borderRadius:"7px",
        margin: "5px"
    },
    Box_Chatbot:{
         backgroundColor: "#ffecb3",
         borderRadius:"7px",
         margin: "5px"
    },
    Box_Crypto:{
        backgroundColor: "#c5cae9",
        borderRadius:"7px",
        margin: "5px"
    },
    Box_Technology:{
        backgroundColor: "#80cbc4",
        borderRadius:"7px",
        margin: "5px"
    },
    edit:{
       color:"#6a1b9a",
       marginTop: "10px" ,
       paddingRight: "30px",
       paddingLeft: "30px"
    },
    unfollow: {
        color:"#6a1b9a",
       marginTop: "10px" ,
       marginLeft: "40px",
       paddingRight: "50px",
       paddingLeft: "50px",
      
    },
    para: {
        
        color: "#5e35b1" 
    },
    
        spacing:{
            marginLeft:"180px",
            fontWeight: "bold"
        },
        spacing_mobile:{
            marginLeft:"485px",
            color: "#5e35b1" 
        },
        set1:{
          fontWeight: "bold"
        },
       
        set3:{
            marginLeft:"215px",
            fontWeight: "bold"
        },
        following:{
            marginLeft: "200px",
            color: "#5e35b1" 
        },
        views:{
          marginLeft: "195px",
          color: "#5e35b1" 
        },
        follower_set:{
            marginTop: "10px"
        },
        member:{
            fontSize: "20px",
            marginRight: "5px",
            color: "#5e35b1" 
        },
       
    
})


function App(){
    const classes = useStyles();
    return (
       
        <div>
         
          
           <div src="/944291.jpg" className={classes.background}>
           <Avatar alt="avatar image" src="/banner-orignal-image.jpg" className={classes.image} />
            
           </div>
           <div className={classes.container}>
           
           <Typography variant="h5" className={classes.topic} >HealthCare Robotics, Crypto</Typography>
           <Grid container spacing={2}>
           <Grid container item xs={12}  spacing={1}>
           <Typography variant="h4" className={classes.name}>Mithchell Williamson </Typography>
           <Typography variant="h5" className={classes.slas}>|</Typography>
           
           <Typography variant="h5" className={classes.title} >Head of Product at Cryptoxp</Typography>
           </Grid>
           <Grid container item xs={12} spacing={1}>
           <Typography className={classes.member} >Mebmer Since:</Typography>
           <Typography variant="h5" className={classes.name} >10/01/2016</Typography>
           </Grid>
           <Grid container item xs={12} spacing={1}>
               <Typography varient="body1" className={classes.para}>
                   Loren ipsum is simply dummy text of the printing and typesetting industry.Loren ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type speciman book. It has survived not only five centuries, but also the leap into electronic typesetting, remainig essentially unchanged.
               </Typography>
           </Grid>
           <Grid container item xs={12} spacing={1}>
              <Button variant="contained" className={classes.Box_container} disableElevation >Python</Button>
              <Button variant="contained" className={classes.Box_Chatbot} disableElevation>Chatbot</Button>
              <Button variant="contained" className={classes.Box_Crypto} disableElevation>Crypto</Button>
              <Button variant="contained" className={classes.Box_Technology} disableElevation>Technology</Button>
              
              
           </Grid>
      
           <Grid container item xs={12} spacing={1}>
           <Grid container spacing={1}>
            <Grid container item xs={12} className={classes.detail_set} spacing={1}>
              <Typography variant="h5" className={classes.name}>mithchell.williamson@gmail.com</Typography>
               <Typography variant="h5" className={classes.spacing}>+91-9113217792</Typography>
               </Grid>
            
             <Grid container item xs={12} spacing={1}>
              <Typography className={classes.para}>Email id</Typography>
              <Typography className={classes.spacing_mobile}>Mobile Number</Typography>
             </Grid>
           </Grid>
               
           </Grid>

           <Grid container item xs={12} spacing={1}>
           <Grid container spacing={1}>
            <Grid container item xs={12} className={classes.follower_set} spacing={1}>
              <Typography variant="h5" className={classes.set1}>4000</Typography>
               <Typography variant="h5" className={classes.set3}>2154</Typography>
               <Typography variant="h5" className={classes.set3}>56141</Typography>
               </Grid>
           
             <Grid container item xs={12} spacing={1}>
              <Typography className={classes.para}>Followers</Typography>
              <Typography className={classes.following}>Followings</Typography>
              <Typography className={classes.views}>Profile views</Typography>
             </Grid>
           </Grid>
               
           </Grid>
           <Grid container item xs={12} spacing={1}>
               <Button variant="outlined" className={classes.edit}>Edit Profile</Button>
               <Button variant="outlined" className={classes.unfollow}>Unfollow</Button>
           </Grid>

           </Grid>
           </div>
          
        </div>
    );
}

export default App;
