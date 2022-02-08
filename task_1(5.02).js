let nums = 0
while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; i++) {
        if (nums % i === 0) {
            check = false;
            break;
        }
    }

    if (check) console.log(nums);
    nums++;

}