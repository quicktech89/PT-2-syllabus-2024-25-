let isMaintenanceMode = false; // Toggle this to enable/disable maintenance

function handleDownload() {
    const successModal = document.getElementById('success-modal');
    const modalMessage = document.getElementById('modal-message');

    if (isMaintenanceMode) {
        modalMessage.textContent = 'The syllabus PDF is under maintenance. Please check back later!';
        successModal.style.display = 'block';
    } else {
        // Path to the PDF file in your project
        const pdfPath = 'assests/pdfs/PT-2 Syllabus Class 9th (2024-25).pdf'; // Update this path as needed
        
        // Start the PDF download
        const link = document.createElement('a');
        link.href = pdfPath; // Point to the PDF file
        link.download = 'PT-2 Syllabus Class 9th (2024-25).pdf'; // Specify the download file name
        link.click();

        // Show success modal
        modalMessage.textContent = 'Your syllabus has been successfully downloaded!';
        successModal.style.display = 'block';
    }
}

function closeModal() {
    document.getElementById('success-modal').style.display = 'none';
}

// Add dynamic notices
function addNotice() {
    const newNotice = prompt('Enter your new notice:');
    if (newNotice) {
        const noticeList = document.getElementById('notice-list');
        const li = document.createElement('li');
        li.textContent = newNotice;
        noticeList.appendChild(li);
    }
}
