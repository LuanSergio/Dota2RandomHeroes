module.exports = function(heroName) {
  return heroName.split(" ").join("_").split("'").join("").toLowerCase();
}