export default function getColor(pokemon) {
    const typeColors = {
      fire: '#FF4422',
      water: '#3399FF',
      grass: '#77CC55',
      electric: '#FFCC33',
      ground: '#DDBB55',
      poison: '#AA5599',
      fighting: '#444444',
      normal: '#AAAAAA',
      flying: '#FFBB00',
      fairy: '#FF77AA',
      psychic: '#FF5599',
      rock: '#AAAAAA',
      bug: '#77CC55',
      ice: '#66CCFF',
      dragon: '#7038F8',
      ghost: '#6666BB',
      dark: '#775544',
      steel: '#AAAABB'
    };
    return typeColors[pokemon.types[0].type.name] || '';
}