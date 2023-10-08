var arr = [
    { dp: "https://images.unsplash.com/photo-1553860214-87b92d6c1e22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveSUyMGFuZCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80", image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
    { dp: "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmwlMjBwaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" },

    { dp: "https://images.unsplash.com/photo-1576828831022-ca41d3905fb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybCUyMGJlYXV0aWZ1bHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
    { dp: "https://images.unsplash.com/photo-1548637724-cbc39e0c8d3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3JmdWwlMjBnaXJsfGVufDB8fDB8fHww&w=1000&q=80", image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
    { dp: "https://images.unsplash.com/photo-1614425640886-5fe51c397c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmwlMjBwaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" },

    { dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQC8-XSJ2z-w3h0jpOWHNYQmR_6rjjF0TVqjX4ZA05&s", image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
    { dp: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD237D8pcpr4zksvbbVDPyWGyM3WTDAB6lpvje0A4&s", image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },

    { dp: "https://images.unsplash.com/photo-1553860214-87b92d6c1e22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJveSUyMGFuZCUyMGdpcmx8ZW58MHx8MHx8fDA%3D&w=1000&q=80", image: "https://images.unsplash.com/photo-1515202913167-d9a698095ebf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" },
    { dp: "https://images.unsplash.com/photo-1606122017369-d782bbb78f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2lybHMlMjBwaG90b3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGdpcmwlMjBwaWNzfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" },

]

var clutter = "";
arr.forEach(function (elem, idx) {
    clutter += `<div class="story">
    <div class="overlay"></div>
    <img id="${idx}" src="${elem.dp} alt="">
</div>`
})

document.querySelector("#stories").innerHTML = clutter
var grow = 0;
document.querySelector("#stories").addEventListener("click", function (dets) { //dets means- details
    Document.querySelector("#fullpreview").style.display = "initial"
    Document.querySelector("#fullpreview").style.backgroundImage = `url(${arr[dets.target.id].image})`;
    setTimeout(function () {
        document.querySelector("#fullpreview").style.display = "none";

    }, 2500)

    if (grow < 100) {
        setInterval(function () {
            document.querySelector("#growth").style.width = `${grow++}%`
        }, 25)
    } else {
        grow = 0;
    }

})

