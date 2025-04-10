const projects = [
    {
      title: "Portfolio Website",
      image: "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg",
      role: "Frontend Developer",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      tools: "HTML, CSS, JavaScript",
      liveLink: "https://yourportfolio.com",
    },
    {
      title: "E-Commerce App",
      image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      role: "Frontend Developer",
      description:
        "A simple e-commerce platform for managing products, carts, and orders.",
      tools: "HTML, CSS,Bootstrap",
      liveLink: "https://yourecommerce.com",
    },
    {
      title: "Tour_Planner",
      image: "https://static.vecteezy.com/system/resources/thumbnails/056/226/962/small_2x/backpacking-and-tourism-illustration-with-travel-essentials-in-a-flat-style-cartoon-design-vector.jpg",
      role: "Frontend Developer",
      description:
        "An app that provides real-time travel information, including destinations, activities, and accommodations,using API.",
      tools: "HTML, CSS, JavaScript,API",
      liveLink: "https://madhari-tarunsai.github.io/Travel-Guide-Creator/",
    },
    {
        title: "Digital Clock",
        image: "https://i.ebayimg.com/images/g/tugAAOSwEwtlS384/s-l1200.jpg",
        role: "Frontend Developer",
        description:
          "Tells about Real time timmer",
        tools: "HTML, CSS, JavaScript",
        liveLink: "https://yourweatherapp.com",
      },
  ];
  
  const container = document.getElementById("project");
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.justifyContent = "center";
  container.style.gap = "20px";
  container.style.padding = "100px";
  
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.style.border = "1px solid #ccc";
    card.style.borderRadius = "8px";
    card.style.padding = "20px";
    card.style.width = "100%";
    card.style.maxWidth = "300px";
    card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    card.style.backgroundColor = "#fff";
    card.style.textAlign = "center";
  
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;
    image.style.width = "100%";
    image.style.borderRadius = "5px";
    card.appendChild(image);
  
    const title = document.createElement("h3");
    title.textContent = project.title;
    card.appendChild(title);
  
    const role = document.createElement("p");
    role.innerHTML = `<strong>Role:</strong> ${project.role}`;
    card.appendChild(role);
  
    const desc = document.createElement("p");
    desc.textContent = project.description;
    card.appendChild(desc);
  
    const tools = document.createElement("p");
    tools.innerHTML = `<strong>Tools Used:</strong> ${project.tools}`;
    card.appendChild(tools);
  
    const button = document.createElement("a");
    button.href = project.liveLink;
    button.target = "_blank";
    button.textContent = "Live Project";
    button.style.display = "inline-block";
    button.style.marginTop = "10px";
    button.style.padding = "10px 15px";
    button.style.backgroundColor = "#007bff";
    button.style.color = "#fff";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.textDecoration = "none";
    card.appendChild(button);
  
    container.appendChild(card);
  });