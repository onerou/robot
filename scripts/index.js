module.exports = function (robot) {
  robot.hear(/send totoro/i, (res) => {
    res.sendMessage("123");
  });
};
