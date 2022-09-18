function PageHeader(){

    function darkMode(){
        document.getElementById("app").style.backgroundColor = "#000000";
        document.getElementById("app").style.color = "#ffffff";
        document.getElementById("pageHeader").style.backgroundColor="#000000";
        document.getElementById("pageHeader").style.color="#ffffff";
        document.getElementById("lightMode").style.display = "inline-block";
        document.getElementById("darkMode").style.display = "none";
    }

    function lightMode(){
        document.getElementById("app").style.backgroundColor = "#fcfcfc";
        document.getElementById("app").style.color = "#000000";
        document.getElementById("darkMode").style.display = "inline-block";
        document.getElementById("lightMode").style.display = "none";
        document.getElementById("pageHeader").style.backgroundColor="#fcfcfc";
        document.getElementById("pageHeader").style.color="#000000";
    }

    return(
        <div id = "pageHeader">
            <div id = "logoBlock"><p>HEADER</p></div>
            <div id = "logOutBlock">
                <p onClick={()=>{darkMode()}} id = "darkMode" className = "logOutBlockItemDark"><span class="material-icons">dark_mode</span></p>
                <p onClick={()=>{lightMode()}} id = "lightMode" className = "logOutBlockItemLight"><span class="material-icons">light_mode</span></p>
                <p className = "logOutBtn"><span class="material-icons">logout</span></p>
            </div>
        </div>
    );
}

export default PageHeader;