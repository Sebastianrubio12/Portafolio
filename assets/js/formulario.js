const $form = document.getElementById('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'Aplication/json'
        }
    })
    if (response.ok) {
        this.reset()
        alert('Gracias por contactarme, te escribire pronto :)')
    }
}