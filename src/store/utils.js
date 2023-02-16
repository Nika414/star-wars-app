const gendersColorMap = {
  male: '#73D677',
  female: '#C956FF',
  hermaphrodite: '#F5DB13',
};

export function handleTags(card) {
  const tags = [];
  if (card.gender && card.gender !== 'n/a') {
    tags.push({ info: card.gender, color: gendersColorMap[card.gender] });
  } if (card.birth_year && card.birth_year !== 'unknown') {
    tags.push({ info: card.birth_year, color: '#07D6F2' });
  }
  return { ...card, tags };
}
