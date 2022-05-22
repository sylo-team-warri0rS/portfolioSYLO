$(
    function () {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");

        hamburger.addEventListener("click", mobileMenu);

        function mobileMenu() {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        }
        const navLink = document.querySelectorAll(".nav-link");

        navLink.forEach(n => n.addEventListener("click", closeMenu));

        function closeMenu() {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
        let projects = [
            {
                img:"img/projects/project01-desktop.png",
                altImg:"NFT Preview Card",
                pdesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste cum. Ullam officia esse modi veniam quia? Ullam est cumque saepe blanditiis ipsa. Ipsum in blanditiis commodi? Possimus, Project 1.",
                demo:"https://yamisan1.github.io/NFT-Card-Front-End-Mentor-Challenge-01/",
                code:"https://github.com/yamiSan1/NFT-Card-Front-End-Mentor-Challenge-01"
            },
            {
                img:"img/projects/project01-desktop.png",
                altImg:"NFT Preview Card",
                pdesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste cum. Ullam officia esse modi veniam quia? Ullam est cumque saepe blanditiis ipsa. Ipsum in blanditiis commodi? Possimus, Project 2.",
                code:"https://github.com/yamiSan1/NFT-Card-Front-End-Mentor-Challenge-01"
            },
            {
                img:"img/projects/project01-desktop.png",
                altImg:"NFT Preview Card",
                pdesc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, iste cum. Ullam officia esse modi veniam quia? Ullam est cumque saepe blanditiis ipsa. Ipsum in blanditiis commodi? Possimus, Project 3.",
                demo:"https://yamisan1.github.io/NFT-Card-Front-End-Mentor-Challenge-01/",
                code:"https://github.com/yamiSan1/NFT-Card-Front-End-Mentor-Challenge-01"
            }
        ]
        let i = 0;
        function control(i) {
            $(".project-img").attr("src",projects[i].img)
            $(".project-img").attr("alt",projects[i].altImg)
            $("#project-desc").text(projects[i].pdesc)
            $("#project-desc").text(projects[i].pdesc)
            $(".btn4 a").attr("href",projects[i].demo)
            $(".btn5 a").attr("href",projects[i].code)
        }
        control(i);
        $(".prev").click(
            function () {
                if (i == 0){
                    i=3;
                }
                i--;
                control(i);
            }
        )
        $(".next").click(
            function () {
                if (i == 2){
                    i=-1;
                }
                i++;
                control(i);
            }
        )
    }
)

