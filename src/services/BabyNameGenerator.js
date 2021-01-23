import { BOY_NAMES, GIRL_NAMES } from '../constants';

const BabyNameGenerator = (isBoy, char = null) => {

    const pickRandomName = names => {
        return names[Math.floor(Math.random() * names.length)]

    }

    const pickRandomLetter = mapping => {
        const randomLetterIndex = Math.floor(Math.random() * Object.keys(mapping).length);
        return Object.keys(mapping)[randomLetterIndex];
    }

    if (isBoy) {
        if (char === null) {
            return pickRandomName(BOY_NAMES[pickRandomLetter(BOY_NAMES)])
        } else {
            return pickRandomName(BOY_NAMES[char])
        }
    } else {
        if (char === null) {
            return pickRandomName(GIRL_NAMES[pickRandomLetter(GIRL_NAMES)])
        } else {
            return pickRandomName(GIRL_NAMES[char])
        }
    }
}

export default BabyNameGenerator;