document.addEventListener("DOMContentLoaded", () => {
    const jobForm = document.getElementById('job-form');
    const jobListings = document.getElementById('job-listings');

    const jobs = [];

    jobForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const jobTitle = document.getElementById('job-title').value;
        const companyName = document.getElementById('company-name').value;
        const location = document.getElementById('location').value;
        const jobDescription = document.getElementById('job-description').value;

        const newJob = {
            title: jobTitle,
            company: companyName,
            location: location,
            description: jobDescription
        };

        jobs.push(newJob);
        renderJobs();
        jobForm.reset();
    });

    function renderJobs() {
        jobListings.innerHTML = '';
        jobs.forEach((job, index) => {
            const jobItem = document.createElement('div');
            jobItem.className = 'job-item';
            jobItem.innerHTML = `
                <h3>${job.title}</h3>
                <p><strong>Company:</strong> ${job.company}</p>
                <p><strong>Location:</strong> ${job.location}</p>
                <p>${job.description}</p>
            `;
            jobListings.appendChild(jobItem);
        });
    }
});
