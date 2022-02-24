import React, { useState } from 'react'
import "./About.scss"

import abouthead from "../../Assets/abouthead.png"
import about from "../../Assets/about.jpg"


import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';



const About = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
   <div className="about__container">
       <div className="about__header">
           <div className="first">StartSign IS</div>
           <div className="first">THE FURTURE</div>
           <div className="last">
               <img src={abouthead} alt="" className="head__img" />
           <div className="first">OF <span>INVESTMENT</span></div>

               
           </div>
       </div>

       <div className="about">
           <div className="left">
               <div className="heading">About Us</div>
               <div className="paras">
                   <div className="para">9999 Aliens left their planet to find a better place to establish themselves. They went through 43 different worlds … and they finally chose the Earth. This came after an important meeting changed everything …</div>
                   <div className="para">
                   One Alien named A-12 was walking into the Hollywood hills. Suddenly, A-12 saw two guys sitting on the roof of their car, celebrating their latest business deal.
                   </div>
                   <div className="para">
                   The two guys told the Alien about how they had changed their lives becoming entrepreneurs. After hours of passionate conversation, they came to an agreement. Together, they will unite their forces to create the most exclusive business club in the world…
                   </div>
               </div>
               <div onClick={handleClickOpen}  className="left__btn">
                   Read More
               </div>
           </div>
           <div className="right">
               <img src={about} alt="" className="right__img" />
           </div>
       </div>

             {/* MUI  */}

      <div>

<Dialog
  open={open}
  onClose={handleClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
>
  <DialogTitle id="alert-dialog-title">
    {"Use Google's location service?"}
  </DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Let Google help apps determine location. This means sending anonymous
      location data to Google, even when no apps are running.
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus, necessitatibus sed! Praesentium officia reiciendis eaque repellat ipsam, quia neque, at corporis quidem perspiciatis rerum. Consectetur tenetur nulla laudantium voluptatibus. Voluptate dicta, quasi ad iusto ea incidunt mollitia ipsum quidem eveniet ut, in pariatur amet corporis maxime odit quos aliquam rem repudiandae culpa doloremque! Tenetur, neque. Voluptatibus nihil culpa odio veniam tempore asperiores! Ex eaque amet facere non. Non dolore labore vero commodi iure tempora voluptatibus, deserunt soluta fugiat. At, neque fugit. Animi id repellendus voluptas? Optio laborum libero, cumque sit deserunt placeat aut sint, nostrum fuga quam eos illum cupiditate molestiae! Dolore aut quam culpa. Repudiandae porro hic maxime ullam cum ducimus? Animi reprehenderit adipisci tempore, quod laborum accusamus alias ipsam corrupti ex fugiat consequatur molestias sed iste sint eos officia nam saepe! Vero quasi totam beatae atque eveniet, accusantium distinctio quae tempora similique modi, esse tempore, sequi sunt veniam non recusandae deleniti magnam deserunt dicta et! Cum quod sapiente nostrum veritatis magni, alias voluptas incidunt quidem repellendus maiores atque excepturi porro illum nobis obcaecati dolorem ab, exercitationem autem enim inventore debitis modi beatae quisquam earum. Commodi optio asperiores blanditiis eveniet debitis saepe totam ut corrupti ullam repellat sed error vitae, dicta assumenda voluptate. Odit natus deserunt expedita quasi quia aliquid aut! Praesentium, iusto. Eius, reiciendis eaque? Quis asperiores maxime eius deserunt! Tenetur alias laborum id magnam ex quisquam fugit accusamus exercitationem corrupti dolorum dolorem, aliquam qui pariatur nisi praesentium corporis vel dicta molestiae quasi minima autem cum. Minima ratione perferendis, iure debitis cupiditate illo doloremque vero accusantium eligendi totam quidem illum tempora autem, nihil sed consequatur saepe dolore aut esse? Molestias ut nisi unde laudantium nobis quisquam, odit officia voluptates laboriosam vero rem. Necessitatibus voluptatem quo corrupti. Nostrum dolore dicta sed sit animi quasi dolorem pariatur ipsum modi atque.
  </DialogContentText>
  </DialogContent>
  <DialogActions>
    <Button onClick={handleClose}>Disagree</Button>
    <Button onClick={handleClose} autoFocus>
      Agree
  </Button>
  </DialogActions>
</Dialog>
</div>
   </div>
  )
}

export default About