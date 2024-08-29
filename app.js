//3 for refererring to each form page
const formPage1 = document.getElementById("form-page1"); 
const formPage2 = document.getElementById("form-page2"); 
const formPage3 = document.getElementById("form-page3");
const formPage4 = document.getElementById("form-page4");
const formPage5 = document.getElementById("form-page5");

//1 for referring to the progress bar
const progressBar = document.querySelector("progress"); 

//2 for referring to the summary text fields
const summaryName = document.getElementById("summary-name");        
const summaryEmail = document.getElementById("summary-email"); 
const summaryDate = document.getElementById("summary-date");
const summaryAdults = document.getElementById("summary-adults");
const summaryChildren = document.getElementById("summary-children");
const summaryLocker = document.getElementById("summary-locker");
const summaryColor = document.getElementById("summary-color");


//1 for referring to the data table
const formData = document.getElementById("collected-data"); 

//Page navigation and progress display
function showPage(pageNumber) {
    switch (pageNumber) {
        case 1:
            formPage1.style.display = 'block';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value=5
            break;
        
        case 2:
            formPage1.style.display = 'none';
            formPage2.style.display = 'block';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value=25
            break;

        case 3:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'block';
            formPage4.style.display = 'none';
            formPage5.style.display = 'none';
            progressBar.value=75
            break;   

        case 4 :
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'block';
            formPage5.style.display = 'none';
            progressBar.value=100
            break; 

        case 5:
            formPage1.style.display = 'none';
            formPage2.style.display = 'none';
            formPage3.style.display = 'none';
            formPage4.style.display = 'none';
            formPage5.style.display = 'block';
            UpdateSummary();
            break;

        default:
        break;
    }
}

//Collate form data
function getFormData() {
    // example using ID-based fetch
    const fName = document.getElementById("contact-name").value;
    const eAddress = document.getElementById("email-address").value;
    const bDate = document.getElementById("date-Attendence").value;
    const cAdult = document.getElementById("adult-count").value;
    const cChildren = document.getElementById("child-count").value;
    const tColor = document.getElementById("color-pick").value;




    // example using CSS selectors within formPage2
    const oStorage = formPage3.querySelector('input[name=storage]:checked').value;
    

    return data = {
        name: fName,
        email: eAddress,
        date: bDate,
        adults:cAdult,
        children:cChildren,
        color:tColor,
        storage:oStorage

    };
}

//Update Summary fields
function UpdateSummary () {
    const data = getFormData();

    summaryName.innerHTML = data.name;
    summaryEmail.innerHTML = data.email;
    summaryDate.innerHTML = data.date;
    summaryAdults.innerHTML = data.adults;
    summaryChildren.innerHTML = data.children;
    summaryColor.innerHTML = data.color;
    summaryLocker.innerHTML = data.storage;
}

/*
//Submitting data
function submitData() {
    const dataRow = document.createElement("tr");
    const cellName = document.createElement("td");
    const cellDate = document.createElement("td");

    dataRow.appendChild(cellName);
    dataRow.appendChild(cellDate);

    const data = getFormData();

    cellName.innerHTML = data.name;
    cellDate.innerHTML = data.date;

    formData.appendChild(dataRow);

    showPage(1);
}*/