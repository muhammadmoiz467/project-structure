import { message } from "antd";

message.config({
  top: 80,
});
window.toastify = (msg, type) => message[type](msg);
window.getRandomId = () => Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2);

window.isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
window.isValidPassword = (password) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/.test(password);
window.isValidName = (name) => /^[a-zA-Z\s]{3,}$/.test(name);

window.api = import.meta.env.VITE_API_URL;