// JavaScript code to handle the Navbar menu toggle

function toggleMenu() 
{
    var rightToggle = document.querySelector('.rightToggle');
    var rightToggleOpen = document.querySelector('#menu-toggle');
    var rightToggleClose = document.querySelector('#menu-toggle1');


    if (rightToggle.style.display === 'none' || rightToggle.style.display === '' ) 
    {
        rightToggle.style.display = 'flex'; // Display the menu
        rightToggleOpen.style.display = 'none'; // Display the menu close
        rightToggleClose.style.display = 'flex'; // Display the menu
    }
    else 
    {
        rightToggle.style.display = 'none'; // Hide the menu
        rightToggleClose.style.display = 'none'; // Display the menu
        rightToggleOpen.style.display = 'flex'; // Display the menu close
    }
}


//hover list divs

        function hoverDiv1()
        {
            var listDiv1 = document.querySelector('.listDiv1');

            if (listDiv1.style.display === 'none' || listDiv1.style.display === '' ) 
            {
                listDiv1.style.display = 'flex'; // Display the menu
            }
            else 
            {
                listDiv1.style.display = 'none'; // Hide the menu
            }
        }

        let hoverBTN1 = document.querySelector('.hoverBTN1');
        hoverBTN1.addEventListener('mouseover', hoverDiv1);

        function hoverDiv11()
        {
            var listDiv1 = document.querySelector('.listDiv1');

            if (listDiv1.style.display === 'flex' || listDiv1.style.display === '' ) 
            {
                listDiv1.style.display = 'none'; // Display the menu
            }
            else 
            {
                listDiv1.style.display = 'flex'; // Hide the menu
            }
        }

        // let hoverBTN1 = document.querySelector('.hoverBTN1');

        hoverBTN1.addEventListener('mouseout', hoverDiv11);


        function hoverDiv2()
        {
            var listDiv2 = document.querySelector('.listDiv2');


            if (listDiv2.style.display === 'none' || listDiv2.style.display === '' ) 
            {
                listDiv2.style.display = 'flex'; // Display the menu close
            }
            else 
            {
                listDiv2.style.display = 'none'; // Display the menu
            }
        }

        let hoverBTN2 = document.querySelector('.hoverBTN2');

        hoverBTN2.addEventListener('mouseover', hoverDiv2);


        function hoverDiv22()
        {
            var listDiv2 = document.querySelector('.listDiv2');


            if (listDiv2.style.display === 'flex' || listDiv2.style.display === '' ) 
            {
                listDiv2.style.display = 'none'; // Display the menu close
            }
            else 
            {
                listDiv2.style.display = 'flex'; // Display the menu
            }
        }

        // let hoverBTN2 = document.querySelector('.hoverBTN2');

        hoverBTN2.addEventListener('mouseout', hoverDiv22);


//-----------Slider code-------------------------------//

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].classList.remove('active-slide');
    currentSlide = index;
    slides[currentSlide].classList.add('active-slide');
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
    showSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
}

setInterval(nextSlide, 3000);

showSlide(currentSlide);



// for last slider

       const slider = document.querySelector('.slider');
       let scrollInterval;
       
       function scrollRight() {
           const firstSlide = slider.firstElementChild;
           slider.style.transition = 'none';
           slider.appendChild(firstSlide);
           slider.style.transform = 'translateX(25%)';
           setTimeout(() => {
               slider.style.transition = 'transform 0.8s ease-in-out';
               slider.style.transform = 'translateX(0)';
           }, 0);
       }
       
       function autoScroll() {
           scrollInterval = setInterval(scrollRight, 5000); // Change slide every 3 seconds
       }
       
       autoScroll();


