const searchKey = document.querySelector(".search");
let git = new GIT();
let ui = new UI;
 
searchKey.addEventListener("keyup",onKeyPress);
function onKeyPress()
{
    const keyValue = searchKey.value;
    if(keyValue != "")
    {   ui.clearAlert();
        document.getElementById("spin").style.display="inline-block";
        document.querySelector(".userinfo").innerHTML="";
        let data =git.getData(keyValue)
        .then((user)=>{
            if(user.userProfile.message === 'Not Found') {
                // Show alert
                document.getElementById("spin").style.display="none";
                ui.alertDisplay('User not found', 'alert alert-danger mt-5');
                ui.clearInfo();

              } else 
              {
                document.getElementById("spin").style.display="none";
                // Show profilesp
                ui.displayUser(user);
                //ui.displayRepo(user);
                ui.displayRepo(user);
               
              }
        });
        
    
    }else{
        ui.clearInfo();
    }
}
