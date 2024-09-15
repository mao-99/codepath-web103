const renderGifts = async () => {
    const response = await fetch('/gifts')
    let data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data){
        data.map(gift => {
            const card = document.createElement('div')
            card.classList.add('card')
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
            topContainer.style.backgroundImage = `url(${gift.image})`
            const containerText = document.createElement('h3')
            containerText.textContent = `${gift.name}`
            bottomContainer.appendChild(containerText)
            const containerLink = document.createElement('a')
            containerLink.textContent = 'Read More >'
            containerLink.href = `/gifts/${gift.id}`
            containerLink.setAttribute('role', 'button')
            bottomContainer.appendChild(containerLink)
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const nullResponse = document.createElement('h2')
        nullResponse.textContent = 'No Gifts Available 😞'
        mainContent.appendChild(nullResponse)
    }
}

renderGifts()

const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    const response = await fetch(`/gifts`)
    const data = await response.json()
    const giftContent = document.getElementById('gift-content')
    let gift
    if (data){
        gift = data.find(gift => gift.id === requestedID)
        if (gift) {
            const giftImage = document.getElementById('image')
            giftImage.src = gift.image
            const giftName = document.getElementById('name')
            giftName = gift.name
            const giftSubmittedBy = document.getElementById('submittedBy')
            giftSubmittedBy = gift.submittedBy
            const giftPricePoint = document.getElementById('pricePoint')
            giftPricePoint = gift.pricePoint
            const giftAudience = document.getElementById('audience')
            giftAudience = gift.audience
            const giftDescription = document.getElementById('description')
            giftDescription = gift.description
            document.title = gift.name
        }
        else {
            const noGiftResponse = document.createElement('h2')
            noGiftResponse.textContent = "No Gifts Available 😞"
            giftContent.appendChild(noGiftResponse)
        }
    }
    else {

    }
}

renderGift()