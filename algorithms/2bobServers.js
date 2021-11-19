/*Bob has a server farm crunching numbers. He has nodes servers in his farm. His company has a lot of work to do. The work comes as a number workload which indicates how many jobs there are. Bob wants his servers to get an equal number of jobs each. If that is impossible, he wants the first servers to receive more jobs. He also wants the jobs sorted, so that the first server receives the first jobs. The way this works, Bob wants an array indicating which jobs are going to which servers.
Can you help him distribute all this work as evenly as possible onto his servers?*/

let servers = 4;
let jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
let result = [];


function distributeJobs(servers, jobs) {
    let result = [];
    let jobsPerServer = Math.floor(jobs.length / servers);
    let remainder = jobs.length % servers;
    let start = 0;
    let end = jobsPerServer;
    for (let i = 0; i < servers; i++) {
        result.push(jobs.slice(start, end));
        start = end;
        end += jobsPerServer;
    }
    for (let i = 0; i < remainder; i++) {
        result[i].push(jobs[start]);
        start++;
    }
    return result;
    }

    console.log("distribute: \n" , distributeJobs(servers, jobs));