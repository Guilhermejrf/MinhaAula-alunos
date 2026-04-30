// 1.
// Sem o link https://... o navegador não encontra o Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 2. Sua configuração (Mantenha como está, mas dentro deste arquivo novo)
const firebaseConfig = {
  apiKey: "Sua apiKey",
  authDomain: "Seu authDomain",
  projectId: "Seu projectId",
  storageBucket: "Seu storageBucket",
  messagingSenderId: "Seu messagingSenderId",
  appId: "appId",
  measurementId: "measurementId"
};

// 3. Inicialização dos coiso
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 4. Função de Cadastro (Usando window. para o HTML enxergar)
