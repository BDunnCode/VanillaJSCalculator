class Calculator {
    constructor(outputRow1TextElement, outputRow2TextElement) {
        this.outputRow1TextElement = outputRow1TextElement
        this.outputRow2TextElement = outputRow2TextElement
        this.clear()
    }

    clear() {
        this.outputRow1 = ''
        this.outputRow2 = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {
        this.outputRow2 = number
    }

    chooseOperation(operation) {

    }

    compute(outputRow1TextElement, outputRow2TextElement, operation) {

    }

    updateDisplay() {
        this.outputRow2TextElement.innerText = this.outputRow2
    }

}


const numberButtons = document.querySelectorAll('[data-number]')
const deleteButton = document.querySelector('[data-delete]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const allClearButton = document.querySelector('[data-allclear]')
const outputRow1TextElement = document.querySelector('[data-outputrow1]')
const outputRow2TextElement = document.querySelector('[data-outputrow2]')

const calculator = new Calculator(outputRow1TextElement, outputRow2TextElement )

numberButtons.forEach(button => { 
    button.addEventListener('click', () => {
        console.log('hi')
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})