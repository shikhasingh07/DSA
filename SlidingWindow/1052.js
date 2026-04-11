var maxSatisfied = function (customers, grumpy, minutes) {
    const n = customers.length;
    if (n === 0) return 0;
    if (minutes === 0) {
        let baseOnly = 0;
        for (let i = 0; i < n; i++) {
            if (grumpy[i] === 0) baseOnly += customers[i];
        }
        return baseOnly;
    }

    let base = 0;
    for (let i = 0; i < n; i++) {
        if (grumpy[i] === 0) base += customers[i];
    }

    let extra = 0;
    for (let i = 0; i < minutes && i < n; i++) {
        if (grumpy[i] === 1) extra += customers[i];
    }

    let bestExtra = extra;
    for (let i = minutes; i < n; i++) {
        // remove left element (i-X) if that minute was grumpy
        if (grumpy[i - minutes] === 1) extra -= customers[i - minutes];

        // add new right element i if that minute is grumpy
        if (grumpy[i] === 1) extra += customers[i];

        // update bestExtra
        if (extra > bestExtra) bestExtra = extra;
    }

    return base + bestExtra;
};