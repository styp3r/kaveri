import NotificationModal from "./NotificationModal";

function PageHeader() {

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
                <div id="newNotifAlert"></div>
                <p onClick={() => { toggleNotifModal() }} id="notificationIcon"><span class="material-icons">notifications</span></p>
                <p className="logOutBtn"><span class="material-icons">logout</span></p>
            </div>
        </div>
    );
}

export default PageHeader;