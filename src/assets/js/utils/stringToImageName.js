export default function stringToImageName(heroName) {
  return heroName.split(" ").join("_").split("'").join("").toLowerCase();
}
