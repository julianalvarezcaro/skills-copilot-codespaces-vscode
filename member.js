function skillsMember() {
  var member = document.getElementById("member");
  member.addEventListener("click", function() {
    var skills = document.getElementById("skills");
    if (skills.style.display === "none") {
      skills.style.display = "block";
    } else {
      skills.style.display = "none";
    }
  });
}