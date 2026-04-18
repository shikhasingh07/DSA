var numUniqueEmails = function(emails) {
    let set = new Set();

  for (let email of emails) {
    let [local, domain] = email.split("@");

    // ignore everything after '+'
    local = local.split("+")[0];

    // remove dots
    local = local.replaceAll(".", "");

    set.add(local + "@" + domain);
  }

  return set.size;
};