AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "TensorFlow Developer Professional Certification",
    cardImage: "assets/images/education-page/tf_developer.png",
    moocLink: "https://www.tensorflow.org/certificate",
  },
  {
    title: "Deep Learning Specialization",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    title: "Neural Networks and Deep Learning",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/neural-networks-deep-learning",
  },
  {
    title: "Structuring Machine Learning Projects",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Convolutional Neural Networks",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "TensorFlow Specialization",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },

  {
    title: "Convolutional Neural Networks in TensorFlow",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Natural Language Processing in TensorFlow",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },
  {
    title: "Sequences, Time Series and Prediction in Tensorflow",
    cardImage: "assets/images/education-page/coursera1.png",
    moocLink: "https://www.coursera.org/learn/machine-learning",
  },

  {
    title: "Data Structures & Algorithms",
    cardImage: "assets/images/education-page/udacity_logo.png",
    moocLink: "https://www.udacity.com/course/data-structures-and-algorithms-nanodegree--nd256",
  },

  {
    title: "Full Stack Web Development",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Android App Development",
    cardImage: "assets/images/education-page/Internshala.jpg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Penetration Testing and Ethical Hacking",
    cardImage: "assets/images/education-page/cybrary.jpg",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
  {
    title: "Blockchain & Cryptocurrency",
    cardImage: "assets/images/education-page/udemy.png",
    moocLink: "https://www.udacity.com/course/intro-to-html-and-css--ud001",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png"
  },
  {
    img: "assets/images/education-page/c2.jpg"
  },
  {
    img: "assets/images/education-page/c3.png"
  },
  {
    img: "assets/images/education-page/c4.png"
  },
  {
    img: "assets/images/education-page/c5.jpg"
  },
];

let currentItem = 0;

const img = document.getElementById('image');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

window.addEventListener('DOMContentLoaded', function () {
  showExperience();
})

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
      const item = experience[currentItem];
      img.src = item.img;
      currentItem++;

    },
    3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
    (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
    (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);


/* Timeline Section*/

const timeline = document.querySelector(".timeline");
const timelinesection = [
  {
    heading: "R.M.K Engineering College",
    image: "./assets/images/education-page/RMK_Engineering_College.jpg",
    subheading: "Bachelors of Science, Computer Science & Engineering, (2016-2020)",
    description: "<li> CGPA - 8.56/10 </li><li>Top 1% in the department</li>",
  },

  {
    heading: "Higher Secondary - Velammal Matriculation Higher Secondary School",
    image: "./assets/images/education-page/velammal.png",
    subheading: "Maths - Biology (2014 - 2016)",
    description: "<li> 1159/1200 </li><li> 100% Scholarship Holder </li><li>Top 1% in the department</li>",
  },
  {
    heading: "High School - Velammal Matriculation Higher Secondary School",
    image: "./assets/images/education-page/velammal.png",
    subheading: "(2012 - 2014)",
    description: "<li> 494/500 </li><li>State 6th Rank</li><li>Top 1% in the department</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
    (output += `       
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Activities:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);