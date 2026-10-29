        function checkGrade() {

            let name = document.getElementById("studentName").value;
            let score = document.getElementById("score").value;
            let result = document.getElementById("result");

            if (name === "") {
                result.innerHTML = "Please enter your name.";
                result.style.color = "red";
                return;
            }

            if (score >= 70) {

                result.innerHTML =
                    "Well done " + name + "! Grade: A - Excellent";

                result.style.color = "green";

            }

            else if (score >= 60) {

                result.innerHTML =
                    "Good job " + name + "! Grade: B - Very Good";

                result.style.color = "orange";

            }

            else if (score >= 50) {

                result.innerHTML =
                    "Good effort " + name + "! Grade: C - Good";

                result.style.color = "orange";

            }

            else if (score >= 45) {

                result.innerHTML =
                    "Keep trying " + name + "! Grade: D - Pass";

                result.style.color = "red";

            }

            else {

                result.innerHTML =
                    "Sorry " + name + ". Grade: F - Fail";

                result.style.color = "red";

            }


            /* START ANIMATION */

            result.classList.remove("show");

            setTimeout(function() {
                result.classList.add("show");
            }, 10);

        }
         function updateClock() {
            const now = new Date();

            let hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();

            const ampm = hours >= 12 ? "PM" : "AM";

            hours = hours % 12;
            hours = hours ? hours : 12;

            document.getElementById("hours").textContent =
                String(hours).padStart(2, "0");

            document.getElementById("minutes").textContent =
                String(minutes).padStart(2, "0");

            document.getElementById("seconds").textContent =
                String(seconds).padStart(2, "0");

            document.getElementById("ampm").textContent = ampm;
        }

        updateClock();
        setInterval(updateClock, 1000);

    

