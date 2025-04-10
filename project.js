const projects = [
    {
      title: "Portfolio Website",
      image: "https://designnotes.blog.gov.uk/wp-content/uploads/sites/53/2020/06/Portfolio-Desk.jpg",
      role: "Frontend Developer",
      description: "A personal portfolio website to showcase my projects and skills.",
      tools: "HTML, CSS, JavaScript",
      liveLink: "https://madhari-tarunsai.github.io/portfolio-website/",
    },
    {
      title: "E-Commerce App",
      image: "https://repository-images.githubusercontent.com/456963513/82528385-a73f-488f-9003-513321283a6b",
      role: "Frontend Developer",
      description: "A simple e-commerce platform for managing products, carts, and orders.",
      tools: "HTML, CSS, Bootstrap",
      liveLink: "https://madhari-tarunsai.github.io/stylish_men-s_wear_min_project/",
    },
    {
      title: "Tour_Planner",
      image: "https://static.vecteezy.com/system/resources/thumbnails/056/226/962/small_2x/backpacking-and-tourism-illustration-with-travel-essentials-in-a-flat-style-cartoon-design-vector.jpg",
      role: "Frontend Developer",
      description: "An app that provides real-time travel information, including destinations, activities, and accommodations, using API.",
      tools: "HTML, CSS, JavaScript, API",
      liveLink: "https://madhari-tarunsai.github.io/Travel-Guide-Creator/",
    },
    {
      title: "Digital Clock",
      image: "https://i.ebayimg.com/images/g/tugAAOSwEwtlS384/s-l1200.jpg",
      role: "Frontend Developer",
      description: "Tells about real-time timer",
      tools: "HTML, CSS, JavaScript",
      liveLink: "https://madhari-tarunsai.github.io/Digital_Time/",
    },
  ];
  
  const container = document.getElementById("project");
  
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("project-card");
  
    const image = document.createElement("img");
    image.src = project.image;
    image.alt = project.title;
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
    card.appendChild(button);
  
    container.appendChild(card);
  });
  