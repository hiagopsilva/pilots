export const handleIconTrophy = (position: number) => {
  if (position === 1) {
    return require('../assets/icons/trophy-gold.png')
  }

  if (position === 2) {
    return require('../assets/icons/trophy-silver.png')
  }

  return require('../assets/icons/trophy-bronze.png')
}
