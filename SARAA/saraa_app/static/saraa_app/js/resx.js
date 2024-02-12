document.addEventListener('DOMContentLoaded', (event) => {
    function toggle() {
        let profileDropdownList = document.querySelector(".menu");
        profileDropdownList.classList.toggle("active");
    }

    // Attach the toggle function to the profile element
    let profileElement = document.querySelector(".profile");
    profileElement.addEventListener('click', toggle);
});

// function toggleSidebar(sectionId) {
//     // Close the sidebar if it is already open
//     var sidebar = document.getElementById('sidebar');
//     if (sidebar.classList.contains('active')) {
//         sidebar.classList.remove('active');
//         document.querySelector('.sidebar-section.active').classList.remove('active');
//     } else {
//         // Open the new section
//         sidebar.classList.add('active');
//         document.getElementById(sectionId).classList.add('active');
//     }
// }
