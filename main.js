const app = document.getElementById("app")

const users = [
    {}
]

const getUser = (userData => {
    return userData.find((user) => {
        return user.email == userData.email
    })
})

const getTotalSubscribers = (userData) =>{
    const subs = users.filter((user) => {
        return user.refBy == userData.ref
    })
    return subs.length
}

const showInvite = userData=> {
    app.innerHTML = `
    <input type="text" id="link" value="https://evento.com?ref=${userData.ref}" disabled>

    <div id="stats">
        <h4>
            ${getTotalSubscribers(userData)}
        </h4>
        <p>
            Inscrições Abertas
        </p>
    </div>
    `    
}

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