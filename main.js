const app = document.getElementById("app")

const formAction = () => {

    const form = document.getElementById("form")
    form.onsubmit = (event) => {
        event.preventDefault()
        const formData = new formData(form) 
        const userData = {
            email: formData.get('email'),
            phone: formData.get('phone')
        }
    }

}

const startApp = () => {

    const content = `
    <form id="form">
        <input type="email" name="email" placeholder="E-mail"></input>
        <input type="text" name="phone" placeholder="Telefone"></input>
        <button>Confirmar</button>
    </form>
    `

    app.innerHTML = content

    formAction()

}
startApp()