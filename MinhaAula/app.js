// 1. Importação das bibliotecas
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 2. Sua configuração do firebase
const firebaseConfig = {
  apikey: "AIzaSyCLuFQ5N3xo0noEf9NlfgoH7jBTKtJY1OA", 
  authDomain: "aulateste-3bafc.firebaseapp.com",
  projectId: "aulateste-3bafc",
  storageBucket: "aulateste-3bafc.firebasestorage.app",
  messagingSenderId: "517061844117",
  appId: "1:517061844117:web:e95ab42a03a3f769180f9c"
};

// 3. Inicialização das configurações
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. Função de Cadastro
function cadastrarComEmail() {
    // Pegar os valores que o usuário digitou
    const email = document.getElementById('e-mail').value; 
    const password = document.getElementById('password').value;

    // O que vai enviar para o Firebase criar a conta
    createUsersWithEmailAndPassword(auth, email, password) 
        .then((userCredential) => {
            alert("Sucesso! Usuário: " + userCredential.user.email);
        })
        .catch((error) => {
            alert("Erro: " + error.message);
        });
}
