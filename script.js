function toggleSubitems(itemId) {
    var subitems = document.getElementById(itemId);
    var item = document.getElementById(itemId).parentNode;
    item.classList.toggle('active');
}

function toggleBackgroundColor(checkbox) {
    var row = checkbox.closest('tr');
    if (checkbox.checked) {
        row.classList.add('checked');
    } else {
        row.classList.remove('checked');
    }
}
const tableData = [
    {
      brand: "Apple",
      description: "Develop an app",
      member: "",
      category: "Technology",
      tags: "#Apple",
      meeting: "In meeting",
      icon: "fa-apple",
      color:"blue",
    },
    {
      brand: "Google",
      description: "Google Search",
      member: "Kundan",
      category: "Technology",
      tags: "#Google",
      meeting: "No Contact",
      icon: "fa-google",
      color:'sky'
    },
    {
      brand: "Microsoft",
      description: "Launch an advisory Services",
      member: "Vicky",
      category: "Productivity",
      tags: "#Microsoft",
      meeting: "Meeting 3",
      icon: "fa-microsoft",
      color:'yellowgreen'
    },
    {
      brand: "Spotify",
      description: "Listen & Enjoy",
      member: "Mantu",
      category: "Entertainment",
      tags: "#Spotify",
      meeting: "In 30 minutes",
      icon: "fa-spotify",
      color:'green'
    },
    {
      brand: "Facebook",
      description: "Streaming",
      member: "John",
      category: "Entertainment",
      tags: "#Facebook",
      meeting: "In 2 hour",
      icon: "fa-facebook",
      color:'blue'
    },
    {
      brand: "Paypal",
      description: "Payment App",
      member: "Vignesh",
      category: "Transition",
      tags: "#Paypal",
      meeting: "Evening",
      icon: "fa-paypal",
      color:'blue'
    },
    {
      brand: "WhatsApp",
      description: "Instant Messaging",
      member: "Radhika",
      category: "Communication",
      tags: "#Whatsapp",
      meeting: "In 20 minutes",
      icon: "fa-whatsapp",
      color:'green'
    },
    {
      brand: "Docker",
      description: "Core Technology",
      member: "Anjli Verma",
      category: "Deployment",
      tags: "#Docker",
      meeting: "Yesterday",
      icon: "fa-docker",
      color:'sea'
    },
    {
      brand: "React",
      description: "Developer",
      member: "KRITE",
      category: "Deployment",
      tags: "#React",
      meeting: "In 30 minutes",
      icon: "fa-react",
      color:'yellow'
    }
  ];
  
const tbody= document.querySelector("#tbody")
tableData.forEach((e,index)=>{
    const tr=document.createElement("tr")
tr.innerHTML=`<td class="brand"><input type="checkbox" class="brand-checkbox" onchange="toggleBackgroundColor(this)">
<i class="fa-brands ${e.icon}" style="color: ${e.color};"></i> 
 ${e.brand}</td>
<td style="font-weight: 500">${e.description}</td>
<td class="member">


 
</td>
<td class="Technology"><span>${e.category}</span></td>
<td class="tags"><span>${e.tags}</span></td>
<td ><span class="sub-items left" style="color:${e.color};">${e.meeting}</span></td>
</tr>`


const memberColumn = tr.querySelector('.member');
// Generate a random number between 3 and 6
function getRandomNumber() {
    return Math.floor(Math.random() * (6 - 3 + 1)) + 2;
  }
  
  // Example usage
  

  
for (let i = 0; i <getRandomNumber(); i++) {
    const img = document.createElement('img');
    img.setAttribute('src', `https://avatar.iran.liara.run/public/${i+1}`);
    img.setAttribute('style', `width: 20px; height: 20px;margin-left:${i==0?'5px':'-9px'}`);
    memberColumn.appendChild(img);
}


tbody.appendChild(tr)

})
