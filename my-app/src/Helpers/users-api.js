  const users = [];

  const createUser = ({name, email, password, repeatPassword}) => {

    const user = {
      name: name,
      email: email,
      password: password
    }
    if(email.length===0 || password.length===0 || repeatPassword.length===0 || name.length===0){
      return{
        isUserCreated: false,
        errorMsg: 'All inputs should be'
      }
    }
    if(password!==repeatPassword){
      return{
        isUserCreated: false,
        errorMsg: "Password does't matches"
      }
    }
    else if(localStorage.getItem(email)!==null){
      return{
        isUserCreated: false,
        errorMsg: "User already exist"
      }
    }
    else{
    //  users.push(user);
    let newUser = {
      name: name,
      password: password
    }
    localStorage.setItem(email, JSON.stringify(newUser));
      return{
        isUserCreated: true
      }
    }
    //return new Promise(resolve => resolve({
      //  isUserCreated: false,
      //  errorMsg: "User already exist"
      //}))
    }



const signIn = ({email, password}) => {
  const user = {
    email: email,
    password: password
  }

  if(email.length === 0 || password.length === 0){

    return{
      isSignIn: false,
      errorMsg: "All fields must be filled"
    }
  }

  else if(localStorage.getItem(email)===null){
    return {
      isSignIn: false,
      errorMsg: "No such user exists",
    }
  }

  else if(localStorage.getItem(email)!==null && password!=JSON.parse(localStorage.getItem(email)).password){

    return {
       isSignIn: false,
       errorMsg: "Wrong password"
    }
  }
  else{
    if(localStorage.getItem('currentUser')!==null){
      localStorage.removeItem('currentUser');
    }
    let currentUser = {
      email: email,
      name: JSON.parse(localStorage.getItem(email)).name
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    return {
      isSignIn: true,
      currentUser /// 11111important
      //currentUserEmail: currentUser.email,
      //currentUserName: currentUser.name
    }
  }

}

function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser'));
}

function logOut(){
  window.location.reload();
  return localStorage.removeItem('currentUser');
}

export {createUser, signIn, getCurrentUser, logOut};
