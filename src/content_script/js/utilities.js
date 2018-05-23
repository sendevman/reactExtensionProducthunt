const TIMEOUT_LOAD_DATA = 1000
const ATTEMPT_LIMIT = 10

function clickFollowButton(resolve, reject, className, modButton, listHeight = 0, attempt = 0) {
    
    let buttons = document.querySelectorAll(className)
    let button = buttons[0]
    let activeList = document.querySelector('.grid_49782')

    if (!button) {
        activeList.scrollTop = activeList.scrollHeight
    } else {
        let position = button.getBoundingClientRect()
        if (window.innerHeight < position.y || position.y < 0) {
            activeList.scrollTop = activeList.scrollTop + position.y - 200
        }
        button.click()
        if (modButton) modButton(button)
    }

    return resolve()
}

export function attemptFollow() {
    return new Promise(
        (resolve, reject) =>
            clickFollowButton(
                resolve,
                reject,
                '.userCard_63a8f .button_30e5c.mediumSize_c215f.simpleVariant_8a863:not(.active_037ba)',
                button => button.classList.add('active_037ba')
            )
    )
}

export function attemptUnfollow() {
    return new Promise(
        (resolve, reject) =>
            clickFollowButton(
                resolve,
                reject,
                '.userCard_63a8f .button_30e5c.active_037ba.mediumSize_c215f.simpleVariant_8a863',
                button => button.classList.remove('active_037ba')
            )
    )
    .catch(err => console.error("producthuntfollowers problem", err))
}
