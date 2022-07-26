async function getCourses() {
  const response = await fetch("/courses");
  const courses = await response.json();
  return courses;
}

async function main() {
  const course_grid_parent = document.querySelector("#courses_grid_parent");

  const courses = await getCourses();
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];

    const course_container = document.createElement("div");
    const courseCode = document.createElement("div");
    const courseName = document.createElement("div");
    const courseSlot = document.createElement("div");
    const courseCredits = document.createElement("div");

    courseCode.innerText = course.courseCode;
    courseName.innerText = course.courseName;
    courseSlot.innerText = course.courseSlot;
    courseCredits.innerText = course.courseCredits;

    course_container.setAttribute("class", "course_container");

    course_container.appendChild(courseCode);
    course_container.appendChild(courseName);
    course_container.appendChild(courseSlot);
    course_container.appendChild(courseCredits);

    course_grid_parent.appendChild(course_container);
  }
}

function filterBySubject() {
  console.log("filter");
  courses = document.querySelectorAll(".course_container");
  const subject = document.querySelector("#subject").value;
  for (let i = 0; i < courses.length; i++) {
    const course = courses[i];

    if (!course.children[0].innerText.includes(subject.toUpperCase())) {
      course.style.display = "none";
    } else {
      course.style.display = "grid";
    }
  }
}

main();
