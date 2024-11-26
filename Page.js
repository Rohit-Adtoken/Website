// app.ts

window.onload = function () {
    const newListingButton = document.getElementById("newListing") as HTMLAnchorElement;
    const myCampaignsButton = document.getElementById("myCampaigns") as HTMLAnchorElement;
    const assetLibraryButton = document.getElementById("assetLibrary") as HTMLAnchorElement;
    const logoutButton = document.getElementById("logout") as HTMLAnchorElement;
    const helpFeedbackButton = document.getElementById("helpFeedback") as HTMLAnchorElement;

    const contentDiv = document.querySelector(".content") as HTMLDivElement;

    newListingButton.addEventListener("click", () => loadContent("New Listing"));
    myCampaignsButton.addEventListener("click", () => loadContent("My Campaigns"));
    assetLibraryButton.addEventListener("click", () => loadContent("Asset Library"));
    logoutButton.addEventListener("click", () => alert("Logging out..."));
    helpFeedbackButton.addEventListener("click", () => alert("Redirecting to Help & Feedback"));

    function loadContent(section: string) {
        contentDiv.innerHTML = `<h1>${section}</h1><p>This is the content for the ${section} section.</p>`;
    }
};
