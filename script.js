document.addEventListener('DOMContentLoaded', function() {
    // 初始顯示第一個經歷
    document.getElementById('experience1').style.display = 'block';

    // 初始化所有經歷的顯示狀態
    for (var i = 2; i <= totalExperiences; i++) {
        document.getElementById('experience' + i).style.display = 'none';
    }
});

var currentExperience = 1;
var totalExperiences = 6; // 替換成您的總經歷數量

function changeExperience() {
    currentExperience = (currentExperience % totalExperiences) + 1;
    var currentExperienceElement = document.getElementById("experience" + currentExperience);
    
    // 將所有經歷隱藏
    var experiences = document.querySelectorAll(".experience");
    experiences.forEach(function (experience) {
        experience.style.display = "none";
    });

    // 增加一點延遲，確保元素已經隱藏，然後再顯示當前經歷
    setTimeout(function() {
        currentExperienceElement.style.display = "block";
    }, 10);
}

document.addEventListener('DOMContentLoaded', function() {
    var skills = document.querySelectorAll('.skill');

    skills.forEach(function(skill) {
        var percent = skill.getAttribute('data-percent');
        skill.style.setProperty('--percent', percent + '%');
    });
});

function changeIntro() {
    var introText = document.getElementById('intro-text');
    introText.textContent = "在大學我參加了系學會社團，舉辦了許多活動與主持經驗，也認識到很多不同組織。期望在畢業前能繼續把大學過得多采多姿，且得到許多獎項~。";
}