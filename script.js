// {
//     company: 'Mobile First Corp',
//     position: 'React Native Developer',
//     location: 'Remote',
//     type: 'Full-time',
//     salary: '$130,000 - $175,000',
//     description: 'Build cross-platform mobile applications using React Native.',
//     status: 'Not Applied',
//   },

const jobs = [
  {
    company: 'Mobile First Corp',
    position: 'React Native Developer',
    location: 'Remote',
    type: 'Full-time',
    salary: '$130,000 - $175,000',
    description: 'Build cross-platform mobile applications using React Native.',
    status: 'Not Applied',
  },
  {
    company: 'WebFlow Agency',
    position: 'Web Designer & Developer',
    location: 'Los Angeles, CA',
    type: 'Part-time',
    salary: '$90,000 - $120,000',
    description: 'Create stunning web experiences for high-profile clients.',
    status: 'Not Applied',
  },
  {
    company: 'DataViz Solutions',
    position: 'Data Visualization Specialist',
    location: 'Boston, MA',
    type: 'Full-time',
    salary: '$125,000 - $165,000',
    description: 'Work with big data visualization tools.',
    status: 'Not Applied',
  },
  {
    company: 'CloudWorks Ltd',
    position: 'DevOps Engineer',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$110,000 - $140,000',
    description: 'Maintain CI/CD pipelines and cloud infrastructure.',
    status: 'Not Applied',
  },
  {
    company: 'AI Innovators',
    position: 'Machine Learning Engineer',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$150,000 - $190,000',
    description: 'Develop and deploy ML models for production systems.',
    status: 'Not Applied',
  },
  {
    company: 'DesignHub Studio',
    position: 'UI/UX Designer',
    location: 'New York, NY',
    type: 'Contract',
    salary: '$80,000 - $100,000',
    description: 'Design user-friendly interfaces and improve user experience.',
    status: 'Not Applied',
  },
  {
    company: 'CyberSecure Inc',
    position: 'Cybersecurity Analyst',
    location: 'Chicago, IL',
    type: 'Full-time',
    salary: '$120,000 - $150,000',
    description: 'Monitor and secure enterprise systems against threats.',
    status: 'Not Applied',
  },
  {
    company: 'FinTech Global',
    position: 'Backend Developer',
    location: 'London, UK',
    type: 'Full-time',
    salary: '£70,000 - £90,000',
    description: 'Build scalable APIs and financial transaction systems.',
    status: 'Not Applied',
  },
];

let interviewCount = 0;
let rejectedCount = 0;

const jobsContainer = document.querySelector('.jobs-container');
const totalCountEl = document.querySelector('.total-count');
const interviewCountEl = document.querySelector('#interview-count');
const rejectedCountEl = document.querySelector('#rejected-count');

function renderJobs(filter = 'all') {
  jobsContainer.innerHTML = '';
  let filteredJobs = jobs.filter((job) => {
    if (filter === 'all') return true;
    return job.status.toLowerCase() === filter;
  });

  if (filteredJobs.length === 0) {
    document.getElementById('emptyMessage').classList.remove('hidden');
  } else {
    document.getElementById('emptyMessage').classList.add('hidden');
    filteredJobs.forEach((job, index) => {
      const card = document.createElement('div');
      card.className = 'job';
      card.innerHTML = `
        <div class="job-header">
            <div>
              <h3>${job.company}</h3>
              <p>${job.position}</p>
            </div>
            <div>
              <button class="btn-delete delete">
                <img src="./assets/delete.png" alt="" />
              </button>
            </div>
          </div>
          <p>${job.location} • ${job.type} • ${job.salary}</p>
          <div>
            <button  class="btn btn-not-applied">NOT APPLIED</button
            ><button id="interviewStatus" class="btn btn-interview hidden">Interview</button>
            <button id="rejectedStatus" class="btn btn-rejected hidden">Rejected</button>
          </div>
          <p>
            ${job.description}
          </p>
          <div>
            <button class="btn btn-interview interview">Interview</button>
            <button class="btn btn-rejected rejected">Rejected</button>
          </div>
      `;
      jobsContainer.appendChild(card);

      card
        .querySelector('.interview')
        .addEventListener('click', () => updateStatus(index, 'Interview'));
      card
        .querySelector('.rejected')
        .addEventListener('click', () => updateStatus(index, 'Rejected'));
      card
        .querySelector('.delete')
        .addEventListener('click', () => deleteJob(index));
    });
  }
}

function updateStatus(index, status) {
  let job = jobs[index];
  const interViewStatus = document.querySelector('#interviewStatus');
  const rejectedStatus = document.querySelector('#rejectedStatus');
  if (job.status === 'Interview') interviewCount--;
  if (job.status === 'Rejected') rejectedCount--;

  job.status = status;

  console.log(interviewCountEl);

  if (status === 'Interview') interviewCount++;
  if (status === 'Rejected') rejectedCount++;

  interviewCountEl.textContent = interviewCount;
  rejectedCountEl.textContent = rejectedCount;
  renderJobs(document.querySelector('.tab.active').dataset.tab);
}

function deleteJob(index) {
  let job = jobs[index];
  if (job.status === 'Interview') interviewCount--;
  if (job.status === 'Rejected') rejectedCount--;
  jobs.splice(index, 1);
  totalCountEl.textContent = jobs.length;
  interviewCountEl.textContent = interviewCount;
  rejectedCountEl.textContent = rejectedCount;
  renderJobs(document.querySelector('.tab.active').dataset.tab);
}

document.querySelectorAll('.tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document
      .querySelectorAll('.tab')
      .forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    renderJobs(tab.dataset.tab);
  });
});

totalCountEl.textContent = jobs.length;

renderJobs();
