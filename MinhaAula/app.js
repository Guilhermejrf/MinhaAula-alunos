// 1.
// Sem o link https://... o navegador não encontra o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 2. Sua configuração (Mantenha como está, mas dentro deste arquivo novo)
const firebaseConfig = {
  apiKey: "AIzaSyCAQjdjCWPMv3bU0rzg6H_MaWg583vv5ug",
  authDomain: "aula-1-guilherme.firebaseapp.com",
  projectId: "aula-1-guilherme",
  storageBucket: "aula-1-guilherme.firebasestorage.app",
  messagingSenderId: "486984790863",
  appId: "1:486984790863:web:daf013d0a813a712ff4b3a",
  measurementId: "G-PV7JRYVEBG"
};

// 3. Inicialização dos coiso
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. Função de Cadastro (Usando window. para o HTML enxergar)
