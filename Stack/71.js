var simplifyPath = function (path) {
  let stack = path.split("/").filter((item) => item !== "");

  let token = [];

  for (let tok of stack) {
    if (tok === "..") {
      if (token.length) {
        token.pop();
      }
    } else if (tok !== ".") {
        token.push(tok);
    }
  }

  return "/" + token.join("/");
};

console.log(simplifyPath("/home/user/Documents/../Pictures"));
