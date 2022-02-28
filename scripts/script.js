function createCabinetAnswer() {
    let input = document.getElementById('cabinetLock')
    let answer = input.value
    if (answer.toLowerCase() != 'face') {
        setInvalid(input)
    } else {

        setValid(input)
        let hint = createModal()
        let answerRow = document.getElementById('cabinetHints')

        clearElement(answerRow)

        answerRow.appendChild(hint)
        return answer
    }
}

function setValid(node) {
    node.classList.add('is-valid')
    node.classList.remove('is-invalid')
}

function setInvalid(node) {
    node.classList.remove('is-valid')
    node.classList.add('is-invalid')
}

function clearElement(element) {
    if (element.firstChild) {
        while (element.firstChild) {
            element.removeChild(element.firstChild)
        }
    }

}

function createModal() {
    let modalContainer = document.createElement('div')
    modalContainer.setAttribute('class', 'col img-col')

    let modalInner =
        `<div class="row">
            <div class="col img-col">
                <!-- Button trigger modal -->

                <div data-bs-toggle="modal" data-bs-target="#cabinetModal" class="text-center" style="width: 100%;height: 100%;">
                    <span>Closed office cabinet</span>
                    <img src="/assets/cabinet.png" data-toggle="modal" data-target="#cabinetModal" style="max-width: 100%;max-height: 100%;">
                </div>

                <!-- Modal -->
                <div class="modal fade" id="cabinetModal" tabindex="-1" aria-labelledby="cabinetModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="cabinetModalLabel">Simple file cabinet, closed by word lock</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="/assets/cabinet.png" style="max-width: 100%;max-height: 100%;">
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