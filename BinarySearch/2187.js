var minimumTime = function (time, totalTrips) {
  let start = 1;
  let end = Math.min(...time) * totalTrips;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);

    let totalTrip = 0;
    for (let i = 0; i < time.length; i++) {
      totalTrip += Math.floor(mid / time[i]);
    }

    if (totalTrip < totalTrips) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
  return start;
};

console.log(minimumTime([1, 2, 3], 5));
