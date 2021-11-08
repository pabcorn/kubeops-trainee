let servers = [
  {
    id: 0,
    capacity: 10
  },
  {
    id: 1,
    capacity: 20
  },
  {
    id: 2,
    capacity: 30
  }
];

let jobs = [
  {
    id: 0,
    time: 1
  },
  {
    id: 1,
    time: 2
  },
  {
    id: 2,
    time: 3
  },
  {
    id: 3,
    time: 4
  },
  {
    id: 4,
    time: 5
  },
  {
    id: 5,
    time: 6
  }
];
distributeJobs = [servers.length, jobs.length];
console.log("Distribute => ",distributeJobs);