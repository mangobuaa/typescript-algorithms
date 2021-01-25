
namespace prepare_analysis {
    function test1 (n: number) {
        // 1 + 4*3 = 12
        // O(1)
        for (let i = 0; i < 4; i++) {
            console.log(i);
        }
    }
    function test2 (n: number) {
        // 1 + n * 3 = 3n + 1
        // O(n)
        for (let i = 0; i < n; n++) {
            console.log(i);
        }
    }

    function test3 (n: number) {
        // 1 + 2n + n * (1 + 3n) = 3n^2 + 3n + 1
        // O(n^2)
        for (let i = 0; i < n; i++) {   // 1 + 2n
            // 内部执行 n 次，n * (1+3n)
            for (let j = 0; j < n; j++) {   // 每次 1+3n
                console.log(i + j);
            }
        }
    }

    function test4 (n: number) {
        // 1 + 2n + n * (1 + 3*15) = 48n + 1
        // O(48)
        for (let i = 0; i < n; i++) {   // 1 + 2n
            // 内部执行 n 次，n * (1+3 * 15)
            for (let j = 0; j < 15; j++) {   // 每次 1 + 3 * 15
                console.log(i + j);
            }
        }
    }

    function test5 (n: number) {
        // n=8: 4, 2, 1 3次
        // n=16: 8， 4， 2， 1 4次
        // n: 2^x = n => x = log2(n)
        // O(log(n))
        while ((n = Math.floor(n/2)) > 0) {
            console.log(n);
        }
    }

    function test6 (n: number) {
        // log5(n)
        // O(log(n))
        while((n = Math.floor(n/5)) > 0) {
            console.log(n)
        }
    }

    function test7 (n: number) {
        
        // n=8:  1, 2, 4        3次
        // n=16: 1, 2, 4, 8     4次
        // 外循环 log2(n) 次
        // 1 + 2 * log2(n) + log2(n)(1+3n)
        // O(nlog(n))
        for (let i = 1; i < n; i+=i) {
            for (let j = 0; j < n; j++) { // 1 + 3n
                console.log(i+j);
            }
        }
    }
}