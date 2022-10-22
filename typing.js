const box = document.querySelector('.typing')
const text = [
	"Wow! ^ I'm glad you are. ^ I like talking to people!",
	"What's your name? Anatholi maybe? ^ There was an Anatoli here once, we had some lovely times together.",
	"Unfortunately, his wife told him to step away from the monitor and throw the charcoal into the furnace. ^ I hope you don't have a furnace!",
]
let wordIndex = 0
let textIndex = 0
let oldTime = 0
const speed = 80 //czym większa wartość tym wolniejszy typing
const stop = 2000 //zatrzymanie między kolejnymi tekstami
let activeDOMElement = box

const typing = newTime => {
	if (newTime - oldTime > speed) {
		const letter = text[textIndex].substr(wordIndex, 1)
		if (wordIndex === text[textIndex].length - 1) {
			if (textIndex === text.length - 1) {
				return
			}
			return setTimeout(() => {
				box.textContent = ''
				textIndex++
				wordIndex = 0
				requestAnimationFrame(typing)
			}, stop)
		} else if (wordIndex === 0 || letter === '^') {
			const p = document.createElement('p')
			box.appendChild(p)
			activeDOMElement = p
		}

		if (!(letter === '^')) {
			activeDOMElement.textContent += letter
		}

		oldTime = newTime
		wordIndex++
	}
	requestAnimationFrame(typing)
}

typing()
