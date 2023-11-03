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
        this.outputRow2 = this.outputRow2.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.outputRow2.includes('.')) return
        this.outputRow2 = this.outputRow2.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
        }
        this.operation = operation
        this.outputRow1 = this.outputRow2
        this.outputRow2 = ''
    }

    compute() {
        let computation
        const prev = parseFloat(this.outputRow2)
        const current = parseFloat(this.outputRow1)
        if (isNaN(prev) || isNaN(current)) return
        switch (this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
             case '÷':
                computation = current / prev
                break
            default:
                return
        }
        this.outputRow2 = computation
        this.operation = undefined
        this.outputRow1 = ''
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else { 
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }   




    updateDisplay() {
        this.outputRow2TextElement.innerText = this.getDisplayNumber(this.outputRow2)
        if (this.operation != null) {
            this.outputRow1TextElement.innerText = 
                `${this.getDisplayNumber(this.outputRow1)} ${this.operation}`
        } else {
            this.outputRow1TextElement.innerText = ''
        }
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

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})