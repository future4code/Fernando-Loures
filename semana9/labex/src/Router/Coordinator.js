export const goToHomePage = (history)=>{
    history.push("/")
}

export const goToListTripsPage = (history)=>{
    history.push("/listar-viagens")
}

export const goToTripDetail = (history)=>{
    history.push("/detalhes-viagem")
}

export const goToCreateTrip = (history)=>{
    history.push("/criar-viagem")
}

export const goToAplica = (history)=>{
    history.push("/aplicar-para-viagem")
}

export const goToQuestion = (history)=>{
    history.push("/canal-de-duvidas")
}

export const goToLoginPage = (history)=>{
    history.push("/login")
}

export const goBackPage = (history)=>{
    history.goBack()
}