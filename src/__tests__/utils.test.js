import {pointsForWord} from '../utils'

describe('pointsForWord', () => {
    it('calculates the total points for a word (1 point per vowel, 2 points per consonant)', () => {
        const word = 'test'

        const points = pointsForWord(word)

        expect(points).toBe(7)
    })
})

describe('pointsForWord', () => {
    it ('handles uppsercase and lowercase input', () => {
        const word = 'tEst'

        const points = pointsForWord(word)

        expect(points).toBe(7)
    })
})