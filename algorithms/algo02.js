serverCount = 2;
jobCount = 7;


function distribute(serverCount, jobCount) {
    var servers = [];
    var jobs = [];
    var result = [];

    for (var i = 0; i < serverCount; i++) {
        servers.push(i);
    }

    for (var i = 0; i < jobCount; i++) {
        jobs.push(i);
    }

    for (var i = 0; i < serverCount; i++) {
        result.push([]);
    }

    for (var i = 0; i < jobCount; i++) {
        var server = i % serverCount;
        result[server].push(jobs[i]);
    }

    return result;
}

console.log(distribute(serverCount, jobCount));