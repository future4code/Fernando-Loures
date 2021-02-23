export const goToHomePage = (history)=>{
    history.push("/")
}

export const goToListTripsPage = (history)=>{
    history.push("/trips/list")
}

export const goToTripDetail = (history)=>{
    history.push("/trips/details")
}

export const goToCreateTrip = (history)=>{
    history.push("/trips/create")
}

export const goToAplica = (history)=>{
    history.push("/aplication-form")
}

export const goToQuestion = (history)=>{
    history.push("/questions")
}

export const goToLoginPage = (history)=>{
    history.push("/login")
}
export const goToSignUp = (history)=>{
    history.push("/signup")
}

export const goBackPage = (history)=>{
    history.goBack()
}