window.onscroll = function() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo img');
    const collegeInfo = document.querySelector('.college-info');
    const navLinks = document.querySelectorAll('nav ul li a'); // Select all nav links

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
       
        header.style.height = "80px"; // Reduced header height
        // Make header transparent
        header.style.paddingTop = "50px";
        logo.style.height = "50px"; // Reduced logo height
        logo.style.width = "50px"; // Reduced logo width
        logo.style.border = "2px solid #5da8f3";
        collegeInfo.style.fontSize = "18px"; // Reduced clg name size
        collegeInfo.style.marginLeft = "5px"; // Adjust left margin for the clg name
        collegeInfo.style.lineHeight = "1"; // Reduced line height to minimize gaps
       
        
    } else {
        // Reset styles when at the top
        header.style.height = "80px"; // Original header height
        // Original solid background color
        header.style.paddingTop = "20px";
        logo.style.height = "60px"; // Original logo height
        logo.style.width = "60px"; // Original logo width
        logo.style.border = "none";
        collegeInfo.style.fontSize = "20px"; // Original clg name size
        collegeInfo.style.marginLeft = "10px"; // Original margin for the clg name
        collegeInfo.style.lineHeight = "1.2"; // Reset line height for original spacing
      
       
       
    }
};
