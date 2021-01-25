
function test1 (n: number) {
    // 4 * (3) + 1 = 13
    // O(1)
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
}
function test2 (n: number) {
    // n * 3 + 1 = 3n + 1
    // O(n)
    for (let i = 0; i < n; n++) {
        console.log(i);
    }
}

function test3 (n: number) {
    // 外部循环 n 次
    // n * (3n+1+2) + 1 = 3n^2 + 3n + 1
    // O(n^2)
    for (let i = 0; i < n; i++) {
        // 内部循环n 次
        // 每次 3
        // 3n + 1
        for (let j = 0; j < n; j++) {
            console.log(i + j);
        }
    }
}

function test4 (n: number) {
    // n * (3 * 15 + 1 +j 2) + 1 = 48n + 1
    // O(n)
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < 15; j++) {
            console.log(i + j);
        }
    }
}

function test5 (n: number) {
    // n=4: 2, 1            2次 每次5
    // n=8: 4, 2, 1         3次
    // n=16: 8, 4, 2, 1     4 次
    // 2^x = n   => x = log2(n)
    // O(log(n))
    while ((n = Math.floor(n/2)) > 0) {
        console.log(n);
    }
}

function test6 (n: number) {
    // 5^x = n   => x = log5(n)
    // O(log(n))
    while((n = Math.floor(n/5)) > 0) {
        console.log(n)
    }
}

function test7 (n: number) {
    // 外部循环：
    // n=4: 1, 2            2次
    // n=8: 1, 2, 4         3次
    // n=16: 1, 2, 4, 8     4次  
    // x = log2(n)
    // x(3n+1+2) + 1 = log2(n) * (3n+3) = 3n * log2(n) + 3 * log2(n)
    // O(nlog(n))
    for (let i = 1; i < n; i+=i) {
        // 内部循环有 n 次
        // 3n + 1
        for (let j = 0; j < n; j++) {
            console.log(i+j);
        }
    }
}