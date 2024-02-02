

function IsAuthenticated(UserType) {
    if (localStorage.getItem(UserType)){
        return true;
    }
    else{
        return false;
    }
}

export default IsAuthenticated
