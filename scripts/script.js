// Validation 
//helpers
function setValid(node) {
    node.classList.add('is-valid')
    node.classList.remove('is-invalid')
}

function setInvalid(node) {
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
}

//cabinet    
function isCabinedPasswordValid(answer) {
    return answer.toLowerCase() === 'face'
}

//printer
function isPrinterPasswordValid(answer) {
    return answer.toLowerCase() === 'printall'
}

//safe
function isSafePasswordValid(answer) {
    let strippedAnswer = answer.replace(/\./g, "")
    return strippedAnswer === '10015150'
}

//computer
function isComputerPasswordValid(answer) {
    return answer === '123111'
}

//phone
function isPhonePinValid(answer) {
    return answer === '7839'
}


// DOM handler
function clearElement(element) {
    if (element.firstChild) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

}

// show hint
function showHint(inputId, isValid, answerRowId, hints) {
    let input = document.getElementById(inputId)
    let answer = input.value
    if (!isValid(answer)) {
        setInvalid(input)

    } else {
        setValid(input)
        createHint(answerRowId, hints)
    }
}

// attach modal to proper row
function createHint(answerRowId, hints) {
    let answerRow = document.getElementById(answerRowId)
    clearElement(answerRow)
    hints.forEach(element => {
        answerRow.appendChild(element)
    });

    return answerRow
}


// create modal with hint
function createModal(modalId, imgLink, modalLabel, shortHeader, longHeader) {
    let modalContainer = document.createElement('div')
    modalContainer.setAttribute('class', 'col img-col')

    let modalInner =
        `<div class="row">
            <div class="col img-col">
                <!-- Button trigger modal -->

                <div data-bs-toggle="modal" data-bs-target="#${modalId}" class="text-center" style="width: 100%;height: 100%;">
                    <span>${shortHeader}</span>
                    <img src="${imgLink}" data-toggle="modal" data-target="#${modalId}" style="max-width: 100%;max-height: 100%;">
                </div>

                <!-- Modal -->
                <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="${modalLabel}" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="${modalLabel}">${longHeader}</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="${imgLink}" style="max-width: 100%;max-height: 100%;">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`

    modalContainer.innerHTML = modalInner
    return modalContainer

}

// show hint for cabinet
function showHintForCabinet() {

    let hints = new Array()
    let inputId = "cabinetLock"
    let isValid = isCabinedPasswordValid
    let answerRowId = "cabinetHints"
    let hint = createModal('oatmealModal', "/assets/oatmeal.png", "oatmealModalLabel", "Oatmeal Recipe", "Recipe for oatmeal with many different berries")
    hints.push(hint)

    showHint(inputId, isValid, answerRowId, hints)
}

// show hint for printer
function showHintForPrinter() {
    let hints = new Array()
    let inputId = "printerPassword"
    let isValid = isPrinterPasswordValid
    let answerRowId = "printerHints"
    let hint = createModal('lawyerModal', "/assets/lawyer.png", "lawyerModalLabel", "Letter to lawyer", "Somebody from company steals money? That can't be good...")
    hints.push(hint)

    showHint(inputId, isValid, answerRowId, hints)

}

// show hint for safe
function showHintForSafe() {

    let hints = new Array()
    let inputId = "safePassword"
    let isValid = isSafePasswordValid
    let answerRowId = "safeHints"
    let hintOne = createModal('rejectedModal', "/assets/rejected.png", "rejectedModalLabel", "Pay rise letter", "Looks like letter was rejected")
    let hintTwo = createModal('bluntModal', "/assets/bluntNote.png", "bluntModalLabel", "Torn letter", "It seems that letter was attached to something...")

    hints.push(hintOne)
    hints.push(hintTwo)

    showHint(inputId, isValid, answerRowId, hints)

}

// show hints for computer
function showHintForComputer() {
    let hints = new Array()
    let inputId = "computerPassword"
    let isValid = isComputerPasswordValid
    let answerRowId = "computerHints"
    let hintOne = createModal('emailModal', "/assets/email.png", "emailModalLabel", "Email", "Looks like someone was irritated...")
    let hintTwo = createModal('stradivariusModal', "/assets/stradivarius.png", "stradivariusModalLabel", "Website", "Marcus loves music, but why this page?...")

    hints.push(hintOne)
    hints.push(hintTwo)

    showHint(inputId, isValid, answerRowId, hints)

}

// show hints for phone
function showHintsForPhone() {
    //!!! not ready
    let hints = new Array()
    let inputId = "phonePassword"
    let isValid = isPhonePinValid
    let answerRowId = "phoneHints"
    let hint = createModal('twitterModal', "/assets/twitter.png", "twitterModalLabel", "Twitter account", "Fresh local news")

    hints.push(hint)


    showHint(inputId, isValid, answerRowId, hints)
}