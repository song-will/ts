interface HTMLElementTagNameMap {
    input: HTMLInputElement
}

const textEl = document.querySelector<HTMLInputElement>('input')
if (textEl !== null) {
    textEl.addEventListener('click', (e: MouseEvent) => {
        console.log(e.clientX)
    })
    console.log(textEl.value)
}

const textEl2 = document.querySelector('input') as HTMLInputElement
const textEl3 = document.querySelector<HTMLInputElement>('input')
console.log(textEl3!.value)