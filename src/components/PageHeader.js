import NotificationModal from "./NotificationModal";

function PageHeader() {

    function darkMode() {
        document.getElementById("app").style.backgroundColor = "#000000";
        document.getElementById("app").style.color = "#ffffff";
        document.getElementById("pageHeader").style.backgroundColor = "#000000";
        document.getElementById("pageHeader").style.color = "#ffffff";
        document.getElementById("lightMode").style.display = "inline-block";
        document.getElementById("darkMode").style.display = "none";
    }

    function lightMode() {
        document.getElementById("app").style.backgroundColor = "#f4f4f4";
        document.getElementById("app").style.color = "#000000";
        document.getElementById("darkMode").style.display = "inline-block";
        document.getElementById("lightMode").style.display = "none";
        document.getElementById("pageHeader").style.backgroundColor = "#f4f4f4";
        document.getElementById("pageHeader").style.color = "#000000";
    }

    function toggleNotifModal() {
        const isOpen = document.getElementById("notificationModal");
        const displayStatus = window.getComputedStyle(isOpen).display;

        if (displayStatus === "block") {
            isOpen.style.display = "none";
        }

        if (displayStatus === "none") {
            isOpen.style.display = "block";
        }
    }

    return (
        <div id="pageHeader">
            <div id="logOutBlock">
                <NotificationModal />
                <p className="logOutBlockItemShare"><span class="material-icons">share</span></p>
                <p onClick={() => { darkMode() }} id="darkMode" className="logOutBlockItemDark"><span class="material-icons">dark_mode</span></p>
                <p onClick={() => { lightMode() }} id="lightMode" className="logOutBlockItemLight"><span class="material-icons">light_mode</span></p>
                <p onClick={() => { toggleNotifModal() }} id="notificationIcon"><div id="newNotifAlert"></div><span class="material-icons">notifications</span></p>
                <p className="logOutBtn"><span class="material-icons">logout</span></p>
            </div>
        </div>
    );
}

export default PageHeader;