const profiles = [
    { name: "John Doe", description: "Front-end Developer" },
    { name: "Alice Smith", description: "UX Designer" },
    { name: "Bob Johnson", description: "Software Engineer" },
    { name: "Ana Dey", description: "HR" },
     { name: "Nick Johnson", description: "Manager" },
    
];

function displayProfiles() {
    const profileList = document.getElementById("profile-list");

    profiles.forEach(profile => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>${profile.name}</strong>: ${profile.description}`;
        profileList.appendChild(li);
    });
}

window.onload = displayProfiles;
