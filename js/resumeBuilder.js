var tplReplace = function(template, value) {
  return template.replace('%data%', value);
}
var bio = {
  name: 'David Andrus',
  role: 'Front End Engineer',
  contacts : {
      mobile: '555.555.5555',
      email: 'someemail@someemail.com',
      github: 'https://github.com/davidandrus',
      // twitter: string (optional)
      location: 'Seattle',
  },
  welcomeMessage: 'Hi, I am Dave, welcome to my resume',
  skills: ['HTML', 'JavaScript', 'CSS'],
  biopic: 'https://avatars0.githubusercontent.com/u/1655282?v=3&s=460',
  display: function() {
    $('#header')
      .prepend(
        tplReplace(HTMLheaderName, this.name) +
        tplReplace(HTMLheaderRole, this.role)
      );

    $('#topContacts')
      .append(tplReplace(HTMLmobile, this.contacts.mobile))
      .append(tplReplace(HTMLemail, this.contacts.email))
      .append(tplReplace(HTMLgithub, this.contacts.github))
      .append(tplReplace(HTMLlocation, this.contacts.location))

    $('#header')
      .append(tplReplace(HTMLbioPic, this.biopic))
      .append(tplReplace(HTMLwelcomeMsg, this.welcomeMessage))
      .append(HTMLskillsStart);

    this.skills.forEach(function(skill) {
      $('#skills').append(tplReplace(HTMLskills, skill))
    });
  }
};

var education = {
  schools: [{
    name: 'School 1',
    location: 'Space',
    degree: 'Web Design',
    majors: ['Web Design'],
    dates: ['2005-2006'],
    url: 'http://someschool.com',
  }],
  onlineCourses: [{
    title: 'Online Course',
    school: 'Online Course',
    dates: ['2005-2006'],
    url: 'http://someschool.com',
  }],
  display: function() {

  },
};

var work = {
  jobs: [{
    employer: 'Employer',
    title: 'Front-end Developer',
    location: 'Space',
    dates: 'in progress',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sed massa at convallis. Mauris at risus sit amet turpis fringilla pretium. Donec id vehicula tortor. In vulputate sem at odio eleifend, sed lobortis justo commodo. Etiam tempor luctus sapien quis aliquam. In malesuada sapien at dignissim facilisis. Donec dictum consectetur massa, ut pulvinar leo dictum quis.',
  }],
  display: function() {
    this.jobs.forEach(function(job) {
      var workItem = $(HTMLworkStart);
      workItem
        .append(
          tplReplace(HTMLworkEmployer, job.employer) +
          tplReplace(HTMLworkTitle, job.title)
        )
        .append(tplReplace(HTMLworkDates, job.dates))
        .append(tplReplace(HTMLworkLocation, job.location))
        .append(tplReplace(HTMLworkDescription, job.description))

      $('#workExperience').append(workItem);
    });

  }
}

var projects = {
  projects: [{
    title: 'Project 1',
    dates: '2016-2017',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis sed massa at convallis. Mauris at risus sit amet turpis fringilla pretium. Donec id vehicula tortor. In vulputate sem at odio eleifend, sed lobortis justo commodo. Etiam tempor luctus sapien quis aliquam. In malesuada sapien at dignissim facilisis. Donec dictum consectetur massa, ut pulvinar leo dictum quis.',
    images: ['http://placehold.it/300/200']
  }],
  display: function() {
    this.projects.forEach(function(project) {
      var projectItem = $(HTMLprojectStart);
      projectItem
        .append(tplReplace(HTMLprojectTitle, project.title))
        .append(tplReplace(HTMLprojectDates, project.dates))
        .append(tplReplace(HTMLprojectDescription, project.description))

      project.images.forEach(function(imageUrl) {
        projectItem.append(tplReplace(HTMLprojectImage, imageUrl))
      })

      $('#projects').append(projectItem);
    });
  }
};

bio.display();
work.display();
projects.display();
